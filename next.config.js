/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for Azure Static Web Apps
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
