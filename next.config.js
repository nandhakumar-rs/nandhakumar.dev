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
      {
        protocol: 'https',
        hostname: 'dev-to-uploads.s3.amazonaws.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
