import { Schema, model, Document, Types } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  image: string;
  createdAt: Date;
}

export interface ICartItem {
  product: Types.ObjectId;
  quantity: number;
}

export interface ICart extends Document {
  user: Types.ObjectId;
  items: ICartItem[];
}

export interface IOrder extends Document {
  user: Types.ObjectId;
  items: Array<{ product: Types.ObjectId; quantity: number; price: number }>;
  total: number;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
});

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  price: { type: Number, required: true },
  image: { type: String, default: '/product.png' },
  createdAt: { type: Date, default: Date.now }
});

const cartItemSchema = new Schema<ICartItem>({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 }
});

const cartSchema = new Schema<ICart>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  items: { type: [cartItemSchema], default: [] }
});

const orderSchema = new Schema<IOrder>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const User = model<IUser>('User', userSchema);
export const Product = model<IProduct>('Product', productSchema);
export const Cart = model<ICart>('Cart', cartSchema);
export const Order = model<IOrder>('Order', orderSchema);
