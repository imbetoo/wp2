import type { NextConfig } from "next";

// STATIC_EXPORT=1 genera una versión estática en out/ (vista previa sin servidor).
const nextConfig: NextConfig = process.env.STATIC_EXPORT
  ? {
      output: "export",
      images: { unoptimized: true },
      trailingSlash: true,
      assetPrefix: process.env.ASSET_PREFIX,
    }
  : {};

export default nextConfig;
