/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  // Image optimization settings
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000, // Cache for 1 year
  },

  // Advanced chunk splitting
  webpack: (config, { dev, isServer }) => {
    // Only apply optimizations for production client-side builds
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          minSize: 20000,
          maxSize: 70000,
          cacheGroups: {
            default: false,
            vendors: false,
            // Framework chunks
            framework: {
              name: "framework",
              chunks: "all",
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 40,
              enforce: true,
            },
            // Library chunks
            lib: {
              test(module) {
                return (
                  module.size() > 80000 &&
                  /node_modules[/\\]/.test(module.identifier())
                );
              },
              name(module) {
                const hash = crypto.createHash("sha1");
                hash.update(module.identifier());
                return `lib.${hash.digest("hex").substring(0, 8)}`;
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            // Commons chunk for frequently used small modules
            commons: {
              name: "commons",
              minChunks: 2,
              priority: 20,
            },
            // Styles chunk
            styles: {
              name: "styles",
              test: /\.(css|scss)$/,
              chunks: "all",
              enforce: true,
            },
          },
        },
        runtimeChunk: { name: "runtime" },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
