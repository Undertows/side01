
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVER_API_URL:'http://localhost:3002',
  },
}

module.exports = nextConfig
