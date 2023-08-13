/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.BASE_PATH,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
