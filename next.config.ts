import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/dashboard",
      },
    ]
  }
}

export default nextConfig;
