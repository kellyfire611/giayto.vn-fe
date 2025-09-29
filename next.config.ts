import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // 👈 dòng này giúp bỏ qua lỗi lint khi build
  },
};

export default nextConfig;
