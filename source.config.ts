import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
});

export const apiDocs = defineDocs({
  dir: 'content/api-docs',
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
