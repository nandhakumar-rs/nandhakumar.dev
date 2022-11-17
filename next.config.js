/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    GTM_ID: process.env.GTM_ID,
  },
}

module.exports = nextConfig
