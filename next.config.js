/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false };

    return config;
  },
  serverRuntimeConfig: {
    backendUrl: process.env.BACKEND_URL,
  },
  env: {
    BUILD_ENV: process.env.BUILD_ENV,
  },
}

module.exports = nextConfig
