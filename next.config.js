/** @type {import('next').NextConfig} */

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${SERVER_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
