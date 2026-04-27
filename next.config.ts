import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  experimental: {
    swcPlugins: [
      [
        '@effector/swc-plugin',
        {
          transformLegacyDomainMethods: false,
          factories: ['@effector-kit/models', '@effector-kit/react'],
        },
      ],
    ],
  },
}

export default nextConfig
