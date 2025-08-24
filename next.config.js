/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // Temporarily disabled for development
  // output: 'export',
  trailingSlash: true,
  // Uncomment below for GitHub Pages deployment
  // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
}

module.exports = nextConfig
