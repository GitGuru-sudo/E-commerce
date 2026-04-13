import Link from 'next/link';
import { useEffect, useState } from 'react';
import { api } from '../../lib/api';
import { getToken, AuthUser, getUser } from '../../lib/auth';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    setUser(getUser());
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await api.get('/products');
    setProducts(response.data);
  };

  const addToCart = async (id: string) => {
    try {
      await api.post('/cart', { productId: id, quantity: 1 }, { headers: { Authorization: `Bearer ${getToken()}` } });
      setMessage('Added to cart');
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Add to cart failed');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <h1 className="text-2xl font-semibold">Products</h1>
          <p className="text-slate-600">Browse available items and add them to your cart.</p>
        </div>
        <Link href="/cart" className="rounded bg-slate-900 px-4 py-2 text-white">View cart</Link>
      </div>
      {message && <div className="rounded-xl bg-sky-50 p-4 text-slate-800">{message}</div>}
      <div className="grid gap-4 md:grid-cols-3">
        {products.map((product) => (
          <div key={product._id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="mt-2 text-slate-600">{product.description}</p>
            <p className="mt-3 text-lg font-semibold">${product.price.toFixed(2)}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={`/product/${product._id}`} className="rounded border px-4 py-2 hover:bg-slate-50">View</Link>
              <button onClick={() => addToCart(product._id)} className="rounded bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
