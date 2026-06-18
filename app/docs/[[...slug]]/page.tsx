import { getDocsPage, getDocsSlugs } from '@/lib/source';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = getDocsPage(slug);

  if (!page) notFound();

  const MDX = page.body;

  return (
    <article className="prose max-w-4xl mx-auto p-8">
      <h1>{page.title}</h1>
      <MDX />
    </article>
  );
}

export function generateStaticParams() {
  return getDocsSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = getDocsPage(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
  };
}
