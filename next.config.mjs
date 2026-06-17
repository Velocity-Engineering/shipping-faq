import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  outputFileTracingRoot: '/Users/sauravswaroop/Desktop/velocity/shipping-faq',
};

export default withMDX(config);
