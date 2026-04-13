import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import bcrypt from 'bcryptjs';
import { Product, User, Cart, Order } from './models';

const envBase = path.resolve(__dirname, '..');
dotenv.config({ path: path.join(envBase, '.env') });
dotenv.config({ path: path.join(envBase, '.env.local') });

const MONGO_URI = process.env.MONGO_URI || '';

if (!MONGO_URI) {
  console.error('MONGO_URI is required');
  process.exit(1);
}

const sampleProducts = [
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 199.99,
    image: '/product.png'
  },
  {
    name: 'Smart Fitness Watch',
    description: 'Track your workouts, heart rate, and sleep with this advanced fitness watch.',
    price: 299.99,
    image: '/product.png'
  },
  {
    name: '4K Ultra HD Monitor',
    description: '27-inch 4K monitor with stunning visuals and ergonomic design.',
    price: 449.99,
    image: '/product.png'
  },
  {
    name: 'Mechanical Gaming Keyboard',
    description: 'RGB backlit mechanical keyboard with customizable keys and fast response.',
    price: 129.99,
    image: '/product.png'
  },
  {
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: 39.99,
    image: '/product.png'
  },
  {
    name: 'Portable Power Bank',
    description: '20000mAh power bank with fast charging and multiple USB ports.',
    price: 49.99,
    image: '/product.png'
  },
  {
    name: 'Smart Home Security Camera',
    description: '1080p HD camera with night vision, motion detection, and mobile app control.',
    price: 89.99,
    image: '/product.png'
  },
  {
    name: 'Ergonomic Office Chair',
    description: 'Adjustable office chair with lumbar support and breathable mesh material.',
    price: 249.99,
    image: '/product.png'
  }
];

const adminCredentials = {
  name: process.env.ADMIN_NAME || 'Admin User',
  email: process.env.ADMIN_EMAIL || 'admin@demo.com',
  password: process.env.ADMIN_PASSWORD || 'admin123'
};

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    const usersCollection = mongoose.connection.db.collection('users');
    const indexes = await usersCollection.indexes();
    if (indexes.some((index) => index.name === 'userId_1')) {
      await usersCollection.dropIndex('userId_1');
      console.log('Dropped stale unique users.userId_1 index');
    }

    console.log('Seeding products...');
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log(`Seeded ${sampleProducts.length} products successfully`);

    console.log('Clearing stale user data...');
    await User.deleteMany({});
    await Cart.deleteMany({});
    await Order.deleteMany({});

    const existingAdmin = await User.findOne({ email: adminCredentials.email });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminCredentials.password, 10);
      await User.create({
        name: adminCredentials.name,
        email: adminCredentials.email,
        password: hashedPassword,
        isAdmin: true
      });
      console.log(`Created admin user: ${adminCredentials.email}`);
    } else {
      console.log(`Admin user already exists: ${adminCredentials.email}`);
    }

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
}

seedDatabase();