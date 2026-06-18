import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { docsPageTree } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={docsPageTree}
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <img src="/img/logo.svg" alt="Velocity" className="h-6" />
            <span className="font-semibold">Help Center</span>
          </div>
        ),
      }}
      links={[
        {
          text: 'API Docs',
          url: '/api-docs',
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
