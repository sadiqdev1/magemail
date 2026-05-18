import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Full server-side web app — not a static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
