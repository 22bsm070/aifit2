import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Ensure the dev server binds to localhost only
  },
  // Force localhost binding
  async rewrites() {
    return [];
  },
};

export default nextConfig;
