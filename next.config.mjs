import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
};

// Apply MDX configuration
const withMDX = createMDX({});

// Export the merged config
export default withMDX(nextConfig);