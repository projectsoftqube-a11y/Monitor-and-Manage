import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve /public images as they are: Vercel image optimisation is a paid allowance on the Hobby plan
  // and answers 402 once it is used up, which leaves every next/image blank.
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
};

export default nextConfig;
