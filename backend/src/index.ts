import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, Product, Cart, Order } from './models';

const envBase = path.resolve(__dirname, '..');
dotenv.config({ path: path.join(envBase, '.env') });
dotenv.config({ path: path.join(envBase, '.env.local') });

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

if (!MONGO_URI) {
  console.error('MONGO_URI is required');
  process.exit(1);
}

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    const usersCollection = mongoose.connection.db.collection('users');
    const indexes = await usersCollection.indexes();
    if (indexes.some((index) => index.name === 'userId_1')) {
      await usersCollection.dropIndex('userId_1');
      console.log('Dropped stale unique users.userId_1 index');
    }
  } catch (err) {
    console.error('MongoDB connection failed', err);
    process.exit(1);
  }
};

connectDatabase();

interface AuthRequest extends Request {
  user?: { id: string; isAdmin: boolean };
}

const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Missing token' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; isAdmin: boolean };
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

const adminMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user?.isAdmin) {
    return res.status(403).json({ message: 'Admin access required' });
  }
  next();
};

app.get('/api/health', (_, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(409).json({ message: 'Email already registered' });
  }

  const hashed = await bcrypt.hash(password, 10);
  const isAdmin = (await User.countDocuments({})) === 0;
  const user = await User.create({ name, email, password: hashed, isAdmin });

  res.status(201).json({ id: user._id, name: user.name, email: user.email, isAdmin });
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing email or password' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin } });
});

app.get('/api/products', async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

app.get('/api/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

app.post('/api/products', authMiddleware, adminMiddleware, async (req, res) => {
  const { name, description, price, image } = req.body;
  if (!name || price == null) {
    return res.status(400).json({ message: 'Name and price are required' });
  }
  const product = await Product.create({ name, description, price, image });
  res.status(201).json(product);
});

app.put('/api/products/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

app.delete('/api/products/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json({ message: 'Product removed' });
});

app.get('/api/cart', authMiddleware, async (req: AuthRequest, res) => {
  const cart = await Cart.findOne({ user: req.user!.id }).populate('items.product');
  res.json(cart || { items: [] });
});

app.post('/api/cart', authMiddleware, async (req: AuthRequest, res) => {
  const { productId, quantity } = req.body;
  if (!productId || quantity == null) {
    return res.status(400).json({ message: 'Product ID and quantity are required' });
  }

  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  let cart = await Cart.findOne({ user: req.user!.id });
  if (!cart) {
    cart = new Cart({ user: req.user!.id, items: [] });
  }

  const existing = cart.items.find((item) => item.product.toString() === productId);
  if (existing) {
    if (quantity <= 0) {
      cart.items = cart.items.filter((item) => item.product.toString() !== productId);
    } else {
      existing.quantity = quantity;
    }
  } else if (quantity > 0) {
    cart.items.push({ product: product._id, quantity });
  }

  await cart.save();
  const populated = await cart.populate('items.product');
  res.json(populated);
});

app.post('/api/orders', authMiddleware, async (req: AuthRequest, res) => {
  const cart = await Cart.findOne({ user: req.user!.id }).populate('items.product');
  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  const items = cart.items.map((item) => ({
    product: item.product._id,
    quantity: item.quantity,
    price: ((item.product as any).price || 0)
  }));
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const order = await Order.create({ user: req.user!.id, items, total });
  cart.items = [];
  await cart.save();

  res.status(201).json(order);
});

app.get('/api/orders', authMiddleware, async (req: AuthRequest, res) => {
  const orders = await Order.find({ user: req.user!.id }).sort({ createdAt: -1 }).populate('items.product');
  res.json(orders);
});

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
