/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during builds (optional)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Enable React strict mode (recommended)
  reactStrictMode: true,
};

module.exports = nextConfig;
