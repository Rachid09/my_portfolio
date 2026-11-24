/** @type {import('next').NextConfig} */

const nextConfig = {
  // Case studies are static folders in public/case-studies/<slug>/ whose pages use
  // relative asset paths, so their trailing slash must be kept. Trailing slashes
  // are handled in src/middleware.ts instead (stripped everywhere else, as before).
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ],
  },
}

module.exports = nextConfig
