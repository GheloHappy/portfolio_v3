import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    PORT: process.env.PORT,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
