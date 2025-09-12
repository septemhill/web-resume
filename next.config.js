/** @type {import('next').NextConfig} */

const nextConfig = {
  // 如果您有其他的 Next.js 設定，請保留它們
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;