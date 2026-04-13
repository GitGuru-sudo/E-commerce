import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getUser, removeToken, removeUser, AuthUser } from '../lib/auth';
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    setUser(getUser());
  }, [router.asPath]);

  const logout = () => {
    removeToken();
    removeUser();
    setUser(null);
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/90 shadow-sm sticky top-0 z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link href="/" className="font-semibold text-xl">E-Commerce</Link>
          <nav className="flex flex-wrap items-center gap-3 text-sm">
            <Link href="/products" className="hover:text-sky-600">Products</Link>
            <Link href="/cart" className="hover:text-sky-600">Cart</Link>
            <Link href="/orders" className="hover:text-sky-600">Orders</Link>
            {user?.isAdmin && <Link href="/admin" className="hover:text-sky-600">Admin</Link>}
            {user ? (
              <button onClick={logout} className="ml-2 rounded bg-slate-900 px-3 py-1 text-white">Logout</button>
            ) : (
              <>
                <Link href="/login" className="hover:text-sky-600">Login</Link>
                <Link href="/register" className="rounded border px-3 py-1 hover:bg-slate-100">Register</Link>
              </>
            )}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
