import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 100],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "recharts"],
  },
};

export default nextConfig;
