/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Disable Next.js Image Optimization API in favor of Netlify's
  },
  // Add any other Next.js config options here
}

module.exports = nextConfig
