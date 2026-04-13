import Link from 'next/link';

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-12 text-white shadow-xl shadow-slate-200/10">
        <div className="mx-auto max-w-5xl">
          <span className="inline-flex rounded-full bg-sky-500/20 px-4 py-1 text-sm font-semibold text-sky-200">E-Commerce Demo</span>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold tracking-tight">Shop faster with a clean e-commerce flow.</h1>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                A simple full-stack store built for CI/CD practice. Browse products, manage your cart, and place orders with an easy modern interface.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/products" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 hover:bg-sky-400">Browse products</Link>
                <Link href="/cart" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10">View cart</Link>
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-slate-900/90 p-6 shadow-xl shadow-slate-950/30">
              <div className="space-y-4">
                <div className="rounded-3xl bg-slate-800/80 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Featured</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Smart Fitness Watch</h2>
                  <p className="mt-2 text-slate-400">Track workouts, sleep, and health with a sleek companion device.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-800/80 p-4">
                    <p className="text-sm text-slate-400">Fast setup</p>
                    <p className="mt-2 text-base font-semibold text-white">Login and shop quickly</p>
                  </div>
                  <div className="rounded-3xl bg-slate-800/80 p-4">
                    <p className="text-sm text-slate-400">Auto orders</p>
                    <p className="mt-2 text-base font-semibold text-white">Cart to order experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Browse products</h2>
          <p className="mt-3 text-slate-600">Explore catalog items with price details and add them to your cart.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Simple checkout</h2>
          <p className="mt-3 text-slate-600">Update cart quantities and place a new order with one click.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Order history</h2>
          <p className="mt-3 text-slate-600">See your latest orders on the orders page once the purchase is completed.</p>
        </div>
      </div>
    </section>
  );
}
