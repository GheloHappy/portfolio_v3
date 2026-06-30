import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname),
  env: {
    PORT: process.env.PORT,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
