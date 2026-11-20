/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/feed',
        destination: '/api/feed',
      },
      {
        source: '/swipe',
        destination: '/api/swipe',
      },
      {
        source: '/matches',
        destination: '/api/matches',
      },
      {
        source: '/reset',
        destination: '/api/reset',
      },
    ];
  },
};

export default nextConfig;
