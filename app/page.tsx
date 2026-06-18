import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-fd-background to-fd-secondary/20 p-8">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <img src="/img/logo.svg" alt="Velocity" className="h-12 mx-auto mb-4" />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-fd-foreground sm:text-5xl">
          Velocity Shipping
        </h1>
        <p className="mb-2 text-xl font-medium text-fd-primary">
          Help Center & Documentation
        </p>
        <p className="mb-8 text-lg text-fd-muted-foreground">
          Find answers to common questions about using Velocity Shipping for your e-commerce logistics needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-lg bg-fd-primary px-8 py-3 font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Help Center
          </Link>
          <Link
            href="/api-docs"
            className="inline-flex items-center justify-center rounded-lg border border-fd-border bg-fd-background px-8 py-3 font-medium text-fd-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            API Documentation
          </Link>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">
        <div className="rounded-lg border border-fd-border bg-fd-card p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-fd-primary/10 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-fd-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-semibold text-fd-foreground mb-2">Quick Start</h3>
          <p className="text-sm text-fd-muted-foreground">Get started with Velocity Shipping in minutes</p>
        </div>

        <div className="rounded-lg border border-fd-border bg-fd-card p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-fd-primary/10 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-fd-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="font-semibold text-fd-foreground mb-2">Integrations</h3>
          <p className="text-sm text-fd-muted-foreground">Connect Shopify, WooCommerce & more</p>
        </div>

        <div className="rounded-lg border border-fd-border bg-fd-card p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-fd-primary/10 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-fd-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-fd-foreground mb-2">Support</h3>
          <p className="text-sm text-fd-muted-foreground">24/7 help from our expert team</p>
        </div>
      </div>

      <footer className="mt-16 text-sm text-fd-muted-foreground">
        &copy; {new Date().getFullYear()} Velocity Shipping. All rights reserved.
      </footer>
    </main>
  );
}
