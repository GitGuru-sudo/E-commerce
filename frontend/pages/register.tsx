import { useRouter } from 'next/router';
import { useState } from 'react';
import { api } from '../lib/api';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await api.post('/auth/register', { name, email, password });
      router.push('/login');
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Register failed');
    }
  };

  return (
    <div className="mx-auto max-w-md space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-semibold">Register</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full rounded-xl border px-4 py-3" type="text" required />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-xl border px-4 py-3" type="email" required />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Password</span>
          <input value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full rounded-xl border px-4 py-3" type="password" required />
        </label>
        <button className="w-full rounded-xl bg-slate-900 px-4 py-3 text-white hover:bg-slate-800" type="submit">Create account</button>
      </form>
      {message && <p className="rounded-xl bg-rose-50 p-3 text-sm text-rose-700">{message}</p>}
    </div>
  );
}
