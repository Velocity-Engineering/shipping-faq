import { docs, apiDocs } from '@/.source';
import { loader } from 'fumadocs-core/source';

export const docsSource = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});

export const apiDocsSource = loader({
  baseUrl: '/api-docs',
  source: apiDocs.toFumadocsSource(),
});
