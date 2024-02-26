/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/services/private-chef",
        destination: "/private-chef-meal-prep",
        permanent: true, // Set to true if this is a permanent redirect
      },
    ];
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    LOCAL_URL: process.env.LOCAL_URL,
    LIVE_URL: process.env.LIVE_URL,
    LOCAL_DB_URL: process.env.LOCAL_DB_URL,
    LIVE_DB_URL: process.env.LIVE_DB_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Wildcard to allow all domains
      },
    ],
  },
};

module.exports = nextConfig;
