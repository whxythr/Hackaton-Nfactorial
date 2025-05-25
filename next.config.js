/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Explicitly define that both app and pages folders are in the src directory
  distDir: '.next',
  // Ensure Next.js looks for pages and app in the src directory
  swcMinify: true,
  images: {
    domains: ['storage.googleapis.com'],
  },
  // Tell Next.js to look for pages and app in src directory
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack: (config, { isServer }) => {
    // Additional config to ensure src/app and src/pages are recognized
    return config;
  },
}

module.exports = nextConfig 