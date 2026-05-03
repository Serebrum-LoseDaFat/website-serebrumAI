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
      {
        source: "/blueprint",
        destination: "/playbook/blueprint",
        permanent: true,
      },
      {
        source: "/content-marketing",
        destination: "/playbook/content-marketing",
        permanent: true,
      },
      {
        source: "/fundraising",
        destination: "/playbook/fundraising",
        permanent: true,
      },
      {
        source: "/gtm",
        destination: "/playbook/gtm",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
