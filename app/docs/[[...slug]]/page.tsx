import { docsSource } from '@/lib/source';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = docsSource.getPage(slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <article className="prose max-w-4xl mx-auto p-8">
      <h1>{page.data.title}</h1>
      <MDX />
    </article>
  );
}
