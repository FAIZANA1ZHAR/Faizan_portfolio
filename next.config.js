/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Removed 'output: standalone' as it's only needed for containerized deployments
};

module.exports = nextConfig;
