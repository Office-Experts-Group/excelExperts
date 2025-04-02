const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const REDIRECTS = [
  {
    source: "/services",
    destination: "/",
    permanent: true,
  },
  {
    source: "/services/microsoft-excel",
    destination: "https://www.excelexperts.com.au",
    permanent: true,
  },
  {
    source: "/is-access-right-for-your-company",
    destination: "/services/microsoft-access/is-access-right-for-your-company",
    permanent: true,
  },
  {
    source: "/services/microsoft-dot-net",
    destination: "https://www.officeexperts.com.au/services/microsoft-dot-net",
    permanent: true,
  },
  {
    source:
      "/services/by-business-solution/3rd-party-application-or-office-integration",
    destination:
      "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration/",
    permanent: true,
  },
  {
    source: "/services/by-business-solution/custom-office-solutions",
    destination:
      "https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions",
    permanent: true,
  },
  {
    source: "/access-azure-cloudbased-services",
    destination:
      "/services/microsoft-access/access-azure-cloud-based-solutions",
    permanent: true,
  },
  {
    source: "/access-azure-cloud-based-solutions",
    destination:
      "/services/microsoft-access/access-azure-cloud-based-solutions",
    permanent: true,
  },
  {
    source: "/3rd-party-product-integration",
    destination: "/services/microsoft-access/3rd-party-product-integration",
    permanent: true,
  },
  {
    source: "/access-support",
    destination: "/services/microsoft-access/access-support",
    permanent: true,
  },
  {
    source: "/access-online",
    destination: "/services/microsoft-access/access-online",
    permanent: true,
  },
  {
    source: "/services/by-business-solution/dashboards",
    destination:
      "https://www.officeexperts.com.au/services/by-business-solution/dashboards",
    permanent: true,
  },
  {
    source: "/services/microsoft-office-365",
    destination: "https://www.officeexperts.com.au/services/microsoft-office-365",
    permanent: true,
  },
  {
    source: "/services/microsoft-power-bi",
    destination:
      "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
    permanent: true,
  },
  {
    source: "/services/by-business-solution/online-solutions",
    destination:
      "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
    permanent: true,
  },
  {
    source: "/services/by-business-solution/cloud-based-solutions-with-azure",
    destination:
      "/services/microsoft-access/access-azure-cloud-based-solutions",
    permanent: true,
  },
  {
    source: "/vba-macro-developmentVBA%20macros",
    destination:
      "https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development",
    permanent: true,
  },
  {
    source: "/testimonials/the-money-institute/",
    destination: "/client-testimonials",
    permanent: true,
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  optimizeFonts: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,

  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  async rewrites() {
    return [
      {
        source: "/about-us",
        destination: "https://www.officeexperts.com.au/about-us",
      },
    ];
  },

  async redirects() {
    return REDIRECTS.map((redirect) => ({
      ...redirect,
      // For external redirects, only add basePath
      ...(redirect.destination.startsWith("https://")
        ? {
            basePath: false,
          }
        : {}),
    }));
  },

  async headers() {
    return [
      {
        // Match all Next.js media files
        source: "/_next/static/media/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Match all Next.js static files
        source: "/_next/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        // Match all static files and images
        source: "/:all*(svg|jpg|png|webp|css|js|woff|woff2|ttf|eot)",
        locale: false,
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow, noimageindex",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Regular routes
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow, noimageindex",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },

  webpack: (config, { dev, isServer }) => {
    // Add CSS minification in production builds
    if (!dev && !isServer) {
      config.optimization.minimizer.push(new CssMinimizerPlugin());
    }
    return config;
  },
};

module.exports = nextConfig;