const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const REDIRECTS = [
  {
    source: "/services/microsoft-excel",
    destination: "https://www.excelexperts.com.au/services",
    permanent: true,
  },
  {
    source: "/is-access-right-for-your-company",
    destination:
      "https://www.accessexperts.com.au/is-access-right-for-your-company",
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
      "https://www.accessexperts.com.au/access-azure-cloud-based-solutions",
    permanent: true,
  },
  {
    source: "/access-azure-cloud-based-solutions",
    destination:
      "https://www.accessexperts.com.au/access-azure-cloud-based-solutions",
    permanent: true,
  },
  {
    source: "/3rd-party-product-integration",
    destination:
      "https://www.accessexperts.com.au/3rd-party-product-integration",
    permanent: true,
  },
  {
    source: "/access-support",
    destination: "https://www.accessexperts.com.au/access-support",
    permanent: true,
  },
  {
    source: "/access-online",
    destination: "https://www.accessexperts.com.au/access-online",
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
    destination:
      "https://www.officeexperts.com.au/services/microsoft-office-365",
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
      "https://www.accessexperts.com.au/access-azure-cloud-based-solutions",
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
  // Microsoft Access → accessexperts.com.au
  {
    source: "/services/microsoft-access",
    destination: "https://www.accessexperts.com.au",
    permanent: true,
  },
  {
    source: "/services/microsoft-access/access-azure-cloud-based-solutions",
    destination:
      "https://www.accessexperts.com.au/access-azure-cloud-based-solutions",
    permanent: true,
  },
  {
    source: "/services/microsoft-access/access-online",
    destination: "https://www.accessexperts.com.au/access-online",
    permanent: true,
  },
  {
    source: "/services/microsoft-access/3rd-party-product-integration",
    destination:
      "https://www.accessexperts.com.au/3rd-party-product-integration",
    permanent: true,
  },
  {
    source: "/services/microsoft-access/is-access-right-for-your-company",
    destination:
      "https://www.accessexperts.com.au/is-access-right-for-your-company",
    permanent: true,
  },
  {
    source: "/services/microsoft-access/upgrades-and-migration",
    destination: "https://www.accessexperts.com.au/upgrades-and-migration",
    permanent: true,
  },
  {
    source: "/services/microsoft-access/access-support",
    destination: "https://www.accessexperts.com.au/access-support",
    permanent: true,
  },

  // Microsoft Word → wordexperts.com.au
  {
    source: "/services/microsoft-word",
    destination: "https://www.wordexperts.com.au",
    permanent: true,
  },
  {
    source: "/services/microsoft-word/companies-and-organisations",
    destination: "https://www.wordexperts.com.au/companies-and-organisations",
    permanent: true,
  },
  {
    source: "/services/microsoft-word/corporate-global-template-solution",
    destination:
      "https://www.wordexperts.com.au/corporate-global-template-solution",
    permanent: true,
  },
  {
    source: "/services/microsoft-word/custom-toolbars-and-ribbons",
    destination: "https://www.wordexperts.com.au/custom-toolbars-and-ribbons",
    permanent: true,
  },
  {
    source: "/services/microsoft-word/fill-in-forms",
    destination: "https://www.wordexperts.com.au/fill-in-forms",
    permanent: true,
  },
  {
    source: "/services/microsoft-word/government-departments",
    destination: "https://www.wordexperts.com.au/government-departments",
    permanent: true,
  },
  {
    source: "/services/microsoft-word/popup-forms",
    destination: "https://www.wordexperts.com.au/popup-forms",
    permanent: true,
  },
  {
    source:
      "/services/microsoft-word/remove-repetition-and-increase-productivity",
    destination:
      "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity",
    permanent: true,
  },
  {
    source: "/services/microsoft-word/corporate-identity",
    destination: "https://www.wordexperts.com.au/corporate-identity",
    permanent: true,
  },
  {
    source: "/services/microsoft-word/accessibility",
    destination: "https://www.wordexperts.com.au/accessibility",
    permanent: true,
  },
  {
    source: "/services/microsoft-word/word-template-conversions",
    destination: "https://www.wordexperts.com.au/word-template-conversions",
    permanent: true,
  },
  {
    source: "/services/microsoft-word/training",
    destination: "https://www.wordexperts.com.au/training",
    permanent: true,
  },
  {
    source: "/services/microsoft-word/upgrades-and-migration",
    destination: "https://www.wordexperts.com.au/upgrades-and-migration",
    permanent: true,
  },
  {
    source: "/services/microsoft-word/quick-parts",
    destination: "https://www.wordexperts.com.au/quick-parts",
    permanent: true,
  },
  {
    source: "/services/microsoft-word/word-document-template-creation",
    destination:
      "https://www.wordexperts.com.au/word-document-template-creation",
    permanent: true,
  },

  // Microsoft PowerPoint → officeexperts.com.au (assumed pattern)
  {
    source: "/services/microsoft-powerpoint",
    destination:
      "https://www.officeexperts.com.au/services/microsoft-powerpoint",
    permanent: true,
  },
  {
    source: "/services/microsoft-powerpoint/existing-presentation-redesign",
    destination:
      "https://www.officeexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign",
    permanent: true,
  },
  {
    source:
      "/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations",
    destination:
      "https://www.officeexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations",
    permanent: true,
  },
  {
    source:
      "/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
    destination:
      "https://www.officeexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
    permanent: true,
  },
  {
    source: "/services/microsoft-powerpoint/automate-presentations-with-vba",
    destination:
      "https://www.officeexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba",
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
