import { docs, apiDocs } from '@/.source';
import type { PageTree } from 'fumadocs-core/server';

// Export the raw source for direct access
export const docsRaw = docs;
export const apiDocsRaw = apiDocs;

// Build page tree for sidebar navigation
function buildPageTree(
  docsList: typeof docs.docs,
  metaList: typeof docs.meta,
  baseUrl: string
): PageTree.Root {
  const children: PageTree.Node[] = [];

  // Get root meta for ordering
  const rootMeta = metaList.find(m => m._file.path === 'meta.json');
  const pageOrder = rootMeta?.pages || [];

  // Group docs by folder
  const folders = new Map<string, typeof docs.docs>();
  const rootDocs: typeof docs.docs = [];

  docsList.forEach(doc => {
    const path = doc._file.path;
    const parts = path.split('/');
    if (parts.length === 1) {
      rootDocs.push(doc);
    } else {
      const folder = parts[0];
      if (!folders.has(folder)) {
        folders.set(folder, []);
      }
      folders.get(folder)!.push(doc);
    }
  });

  // Process items in order from meta.json
  pageOrder.forEach(pageName => {
    // Check if it's a folder
    if (folders.has(pageName)) {
      const folderDocs = folders.get(pageName)!;
      const folderMeta = metaList.find(m => m._file.path === `${pageName}/meta.json`);

      // Find index page for folder
      const indexDoc = folderDocs.find(d => d._file.path === `${pageName}/index.mdx`);

      const folderChildren: PageTree.Node[] = [];
      const folderPageOrder = folderMeta?.pages || [];

      folderPageOrder.forEach(subPageName => {
        if (subPageName === 'index') {
          if (indexDoc) {
            folderChildren.push({
              type: 'page',
              name: 'Overview',
              url: `${baseUrl}/${pageName}`,
            });
          }
        } else {
          const subDoc = folderDocs.find(d =>
            d._file.path === `${pageName}/${subPageName}.mdx`
          );
          if (subDoc) {
            folderChildren.push({
              type: 'page',
              name: subDoc.title,
              url: `${baseUrl}/${pageName}/${subPageName}`,
            });
          }
        }
      });

      children.push({
        type: 'folder',
        name: folderMeta?.title || pageName,
        children: folderChildren,
      });
    } else {
      // It's a root page
      const doc = rootDocs.find(d => {
        const name = d._file.path.replace('.mdx', '');
        return name === pageName || name === `${pageName}/index`;
      });
      if (doc) {
        children.push({
          type: 'page',
          name: doc.title,
          url: pageName === 'index' ? baseUrl : `${baseUrl}/${pageName}`,
        });
      }
    }
  });

  return { name: 'Docs', children };
}

// Generate page trees
export const docsPageTree = buildPageTree(docs.docs, docs.meta, '/docs');
export const apiDocsPageTree = buildPageTree(apiDocs.docs, apiDocs.meta, '/api-docs');

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
