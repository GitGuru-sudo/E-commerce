import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { api } from '../../lib/api';
import { getToken } from '../../lib/auth';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
}

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!id) return;
    api.get(`/products/${id}`).then((response) => setProduct(response.data)).catch(() => setMessage('Unable to load product'));
  }, [id]);

  const addToCart = async () => {
    try {
      await api.post('/cart', { productId: id, quantity: 1 }, { headers: { Authorization: `Bearer ${getToken()}` } });
      setMessage('Added to cart');
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Could not add to cart');
    }
  };

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="mt-2 text-slate-600">{product.description}</p>
        </div>
        <div className="rounded-3xl bg-slate-100 p-5 text-right">
          <p className="text-lg text-slate-600">Price</p>
          <p className="text-3xl font-semibold">${product.price.toFixed(2)}</p>
        </div>
      </div>
      <button onClick={addToCart} className="rounded-xl bg-slate-900 px-6 py-3 text-white hover:bg-slate-800">Add to cart</button>
      {message && <p className="rounded-xl bg-sky-50 p-4 text-slate-800">{message}</p>}
    </div>
  );
}
