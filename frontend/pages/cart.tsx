import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { api } from '../lib/api';
import { getToken } from '../lib/auth';

interface CartItem {
  _id: string;
  quantity: number;
  product: {
    _id: string;
    name: string;
    price: number;
  };
}

export default function CartPage() {
  const router = useRouter();
  const [items, setItems] = useState<CartItem[]>([]);
  const [message, setMessage] = useState('');

  const loadCart = async () => {
    const response = await api.get('/cart', { headers: { Authorization: `Bearer ${getToken()}` } });
    setItems(response.data.items || []);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const updateQuantity = async (productId: string, quantity: number) => {
    await api.post('/cart', { productId, quantity }, { headers: { Authorization: `Bearer ${getToken()}` } });
    loadCart();
  };

  const placeOrder = async () => {
    try {
      await api.post('/orders', {}, { headers: { Authorization: `Bearer ${getToken()}` } });
      setMessage('Order placed successfully. Redirecting to orders page...');
      setTimeout(() => {
        router.push('/orders');
      }, 800);
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Could not place order');
    }
  };

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Your Cart</h1>
        <p className="mt-2 text-slate-600">Review items, update quantities, and place your order.</p>
      </div>
      {items.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-600 shadow-sm">Your cart is empty. Add products from the shop to get started.</div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item._id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{item.product.name}</h2>
                  <p className="mt-2 text-slate-600">${item.product.price.toFixed(2)} each</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => updateQuantity(item.product._id, item.quantity - 1)} className="rounded-full border px-3 py-2">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product._id, item.quantity + 1)} className="rounded-full border px-3 py-2">+</button>
                </div>
              </div>
            </div>
          ))}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-lg font-semibold">Total</p>
              <p className="text-3xl font-bold">${total.toFixed(2)}</p>
            </div>
            <button onClick={placeOrder} className="mt-6 w-full rounded-3xl bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 md:w-auto">Place order</button>
          </div>
        </div>
      )}
      {message && <div className="rounded-xl bg-sky-50 p-4 text-slate-800">{message}</div>}
    </div>
  );
}
