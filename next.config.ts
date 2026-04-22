import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/writing",
        destination: "/insights",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
