import { docs, apiDocs } from '@/.source';

// Export the raw source for direct access
export const docsRaw = docs;
export const apiDocsRaw = apiDocs;

// Helper function to normalize slug to path
function slugToPath(slug?: string[]): string {
  if (!slug || slug.length === 0) return 'index.mdx';
  return slug.join('/') + '.mdx';
}

// Helper function to get a page by slug
export function getDocsPage(slug?: string[]) {
  const targetPath = slugToPath(slug);

  // Try exact match first
  let page = docs.docs.find(doc => doc._file.path === targetPath);

  // Try with /index.mdx for folder pages
  if (!page && slug && slug.length > 0) {
    const indexPath = slug.join('/') + '/index.mdx';
    page = docs.docs.find(doc => doc._file.path === indexPath);
  }

  return page;
}

export function getApiDocsPage(slug?: string[]) {
  const targetPath = slugToPath(slug);

  // Try exact match first
  let page = apiDocs.docs.find(doc => doc._file.path === targetPath);

  // Try with /index.mdx for folder pages
  if (!page && slug && slug.length > 0) {
    const indexPath = slug.join('/') + '/index.mdx';
    page = apiDocs.docs.find(doc => doc._file.path === indexPath);
  }

  return page;
}

// Get all docs for generating static params
export function getDocsSlugs() {
  return docs.docs.map(doc => {
    const path = doc._file.path.replace(/\.mdx$/, '').replace(/\/index$/, '');
    return path === 'index' ? [] : path.split('/');
  });
}

export function getApiDocsSlugs() {
  return apiDocs.docs.map(doc => {
    const path = doc._file.path.replace(/\.mdx$/, '').replace(/\/index$/, '');
    return path === 'index' ? [] : path.split('/');
  });
}
