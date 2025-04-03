/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Allow local Strapi during development
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      // Allow production Strapi
      {
        protocol: "https",
        hostname: "balanced-star-d25a9e7e97.media.strapiapp.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
