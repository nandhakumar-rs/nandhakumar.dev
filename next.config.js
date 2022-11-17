/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    GTM_ID: process.env.GTM_ID,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
