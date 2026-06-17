import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b p-4">
        <nav className="flex gap-4">
          <a href="/docs" className="font-medium">Help Center</a>
          <a href="/api-docs">API Docs</a>
        </nav>
      </header>
      <main className="p-8">
        {children}
      </main>
    </div>
  );
}
