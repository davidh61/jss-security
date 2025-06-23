import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", 
    distDir: "github-pages",
    images: {
        unoptimized: true
    }
};

export default nextConfig;
