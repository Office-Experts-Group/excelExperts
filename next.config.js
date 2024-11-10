/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Changed from "export" to "standalone"
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  poweredByHeader: false,
  distDir: ".next", // Explicitly set the output directory
};

module.exports = nextConfig;
