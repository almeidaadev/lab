import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
};
/** @type {import('next').NextConfig} */

module.exports = {
    experimental: {
        serverActions: {
            bodySizeLimit: "100mb",
        },
    },
};

export default nextConfig;
