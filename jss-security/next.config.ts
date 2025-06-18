import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", 
    distDir: "github-pages",
    basePath: '/jss-security',
    assetPrefix: '/jss-security',
    images: {
        unoptimized: true
    }
};

export default nextConfig;
