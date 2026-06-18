import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { apiDocsPageTree } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={apiDocsPageTree}
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <img src="/img/logo.svg" alt="Velocity" className="h-6" />
            <span className="font-semibold">API Documentation</span>
          </div>
        ),
      }}
      links={[
        {
          text: 'Help Center',
          url: '/docs',
        },
      ]}
      sidebar={{
        defaultOpenLevel: 1,
      }}
    >
      {children}
    </DocsLayout>
  );
}
