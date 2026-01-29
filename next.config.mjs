/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '1337',
          pathname: '/uploads/**',
        },
        {
          protocol: 'https',
          hostname: 'synaptix-labs-strapi-api-production.up.railway.app',
          pathname: '/uploads/**',
        },
        {
          protocol: 'https',
          hostname: 'assets.synaptixlabs.ai',
          pathname: '/**',
        },
      ],
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;