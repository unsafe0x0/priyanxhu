import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/feed",
        destination: "https://blogs.priyanxhu.me/api/feed",
      },
    ];
  },
};

export default nextConfig;
