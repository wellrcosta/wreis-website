import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Allow local/LAN dev access without Next.js cross-origin dev warnings.
  // See: https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://localhost:3002',
    'http://192.168.1.171:3002',
  ],
};

export default withMDX(nextConfig);
