import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    turbopack: true,
  },
}

export default nextConfig
