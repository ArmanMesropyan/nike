/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    API_HOST: "http://localhost:3000/api",
  },
  images: {
    domains: ["http://localhost:3000"],
  },
};

module.exports = nextConfig;
