/** @type {import('next').NextConfig} */
  const withPWA = require('next-pwa')({
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development'
    })
const nextConfig = withPWA({
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
    async headers() {
        return [
            {
                
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
});

module.exports = nextConfig;
