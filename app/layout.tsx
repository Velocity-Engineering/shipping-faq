import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

export const metadata = {
  title: {
    template: '%s | Velocity Shipping Help Center',
    default: 'Velocity Shipping Help Center',
  },
  description: 'Find answers to common questions about using Velocity Shipping',
  icons: {
    icon: '/img/favicon.png',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
