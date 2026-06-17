import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="mb-4 text-4xl font-bold">Velocity Shipping Help Center</h1>
      <p className="mb-8 max-w-xl text-lg text-gray-600 dark:text-gray-400">
        Find answers to common questions about using Velocity Shipping
      </p>
      <div className="flex gap-4">
        <Link
          href="/docs"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          Help Center
        </Link>
        <Link
          href="/api-docs"
          className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          API Docs
        </Link>
      </div>
    </main>
  );
}
