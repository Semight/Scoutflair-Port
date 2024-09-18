/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scoutflair.s3.eu-north-1.amazonaws.com",
        pathname: "/*/**",
      },
    ],
  },
  staticPageGenerationTimeout: 300,
};

export default nextConfig;
