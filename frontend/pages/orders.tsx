import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { getToken } from '../lib/auth';

interface OrderItem {
  product: { name: string };
  quantity: number;
  price: number;
}

interface Order {
  _id: string;
  total: number;
  createdAt: string;
  items: OrderItem[];
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [message, setMessage] = useState('');

  const loadOrders = async () => {
    const response = await api.get('/orders', { headers: { Authorization: `Bearer ${getToken()}` } });
    setOrders(response.data);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const placeOrder = async () => {
    try {
      await api.post('/orders', {}, { headers: { Authorization: `Bearer ${getToken()}` } });
      setMessage('Order placed successfully');
      loadOrders();
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Could not place order');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <h1 className="text-2xl font-semibold">Orders</h1>
          <p className="mt-2 text-slate-600">Place a new order from your cart and view past purchases.</p>
        </div>
        <button onClick={placeOrder} className="rounded-xl bg-slate-900 px-4 py-3 text-white hover:bg-slate-800">Place order</button>
      </div>
      {message && <div className="rounded-xl bg-sky-50 p-4 text-slate-800">{message}</div>}
      <div className="space-y-4">
        {orders.length === 0 && <p className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">No orders yet.</p>}
        {orders.map((order) => (
          <div key={order._id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm text-slate-500">{new Date(order.createdAt).toLocaleString()}</p>
                <p className="text-xl font-semibold">Order #{order._id.slice(-6)}</p>
              </div>
              <p className="text-lg font-semibold">${order.total.toFixed(2)}</p>
            </div>
            <ul className="mt-4 space-y-2 text-slate-700">
              {order.items.map((item, index) => (
                <li key={index} className="flex justify-between border-t border-slate-100 py-2">
                  <span>{item.product.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
