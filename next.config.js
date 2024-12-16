/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
  },

  webpack: (config, { dev, isServer }) => {
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
            framework: {
              name: "framework",
              chunks: "all",
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 40,
              enforce: true,
            },
            commons: {
              name: "commons",
              minChunks: 2,
              priority: 20,
            },
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
