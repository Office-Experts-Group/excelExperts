const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const REDIRECTS = [
  {
    source: "/is-access-right-for-your-company",
    destination: "/services/microsoft-access/is-access-right-for-your-company",
    permanent: true,
  },
  {
    source: "/services/microsoft-dot-net",
    destination: "https://officeexperts.com.au/services/microsoft-dot-net",
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
      "https://officeexperts.com.au/services/by-business-solution/custom-office-solutions",
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
      "https://officeexperts.com.au/services/by-business-solution/dashboards",
    permanent: true,
  },
  {
    source: "/services/microsoft-office-365",
    destination: "https://officeexperts.com.au/services/microsoft-office-365",
    permanent: true,
  },
  {
    source: "/services/microsoft-power-bi",
    destination:
      "https://officeexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
    permanent: true,
  },
  {
    source: "/services/by-business-solution/online-solutions",
    destination:
      "https://officeexperts.com.au/services/by-business-solution/online-solutions",
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
      "https://officeexperts.com.au/services/by-business-solution/vba-macro-development",
    permanent: true,
  },
  {
    source: "/about-us",
    destination: "https://www.officeexperts.com.au/about-us",
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
  },

  async redirects() {
    return REDIRECTS;
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
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
