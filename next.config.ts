// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Disable ESLint during builds (optional)
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   // Enable React strict mode (recommended)
//   reactStrictMode: true,

//   // ✅ Allow external image domains
//   images: {
//     domains: ["images.pexels.com"],
//   },
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ["cdn.sanity.io", "images.pexels.com"], // Add Sanity domain
  },
};

module.exports = nextConfig;
