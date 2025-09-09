const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Enable ESLint to run during builds on Vercel
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig

