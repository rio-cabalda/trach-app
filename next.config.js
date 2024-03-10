/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.imagin.studio',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'ap.rdcpix.com'
      },
      {
        protocol: 'http',
        hostname: 'localhost:3000/'
      }
    ],
    domains: ['*']
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
