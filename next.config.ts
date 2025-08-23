import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'payment=()',
          },
          {
            key: 'X-Robots-Tag',
            value: 'noimageindex',
          },
        ],
      },
    ]
  },
}

export default nextConfig
