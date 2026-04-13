import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { getToken, getUser } from '../lib/auth';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
}

export default function AdminPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState('');
  const user = getUser();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await api.get('/products');
    setProducts(response.data);
  };

  const createProduct = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await api.post('/products', { name, description, price: Number(price), image: '/product.png' }, { headers: { Authorization: `Bearer ${getToken()}` } });
      setName('');
      setDescription('');
      setPrice('');
      setMessage('Product added');
      loadProducts();
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Add product failed');
    }
  };

  const deleteProduct = async (id: string) => {
    await api.delete(`/products/${id}`, { headers: { Authorization: `Bearer ${getToken()}` } });
    loadProducts();
  };

  if (!user) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">Please login to access this page.</div>;
  }

  if (!user.isAdmin) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">Admin access required. You need admin privileges to access this page.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <p className="mt-2 text-slate-600">Create, view, and remove products.</p>
      </div>
      <form onSubmit={createProduct} className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <label className="block text-sm font-medium text-slate-700">Product name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full rounded-xl border px-4 py-3" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="mt-2 w-full rounded-xl border px-4 py-3" rows={3} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Price</label>
          <input value={price} onChange={(e) => setPrice(e.target.value)} className="mt-2 w-full rounded-xl border px-4 py-3" type="number" step="0.01" required />
        </div>
        <button className="rounded-xl bg-slate-900 px-4 py-3 text-white hover:bg-slate-800" type="submit">Create product</button>
      </form>
      {message && <div className="rounded-xl bg-sky-50 p-4 text-slate-800">{message}</div>}
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product._id} className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="mt-2 text-slate-600">{product.description}</p>
              <p className="mt-2 text-lg font-semibold">${product.price.toFixed(2)}</p>
            </div>
            <button className="rounded-xl bg-rose-600 px-4 py-3 text-white hover:bg-rose-700" onClick={() => deleteProduct(product._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
