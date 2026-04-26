import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  experimental: {
    swcPlugins: [['@effector/swc-plugin', {}]],
  },
}

export default nextConfig
