/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/safe-finance',
  assetPrefix: 'https://leandpeage.com/safe-finance',
  images: {
    domains: ['leandpeage.com'],
    path: 'https://leandpeage.com/safe-finance/_next/image',
    unoptimized: true,
  },
  trailingSlash: false,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
