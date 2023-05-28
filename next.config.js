/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    API_BASE_URL: "http://localhost:3000" || "http://127.0.0.1:3000",
  },
  images: {
    domains: ["http://localhost:3000", "http://127.0.0.1:3000"],
  },
};

module.exports = nextConfig;
