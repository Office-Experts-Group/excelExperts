/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.officeexperts.com.au",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  generateIndexSitemap: false,
  trailingSlash: false,

  transform: async (config, path) => {
    // List of paths that have different canonicals (you'd maintain this list)
    const pathsWithDifferentCanonicals = [
      // word
      "/services/microsoft-word",
      "/services/microsoft-word/accessibility",
      "/services/microsoft-word/companies-and-organisations",
      "/services/microsoft-word/corporate-global-template-solution",
      "/services/microsoft-word/corporate-identity",
      "/services/microsoft-word/custom-toolbars-and-ribbons",
      "/services/microsoft-word/fill-in-forms",
      "/services/microsoft-word/government-departments",
      "/services/microsoft-word/popup-forms",
      "/services/microsoft-word/quick-parts",
      "/services/microsoft-word/remove-repetition-and-increase-productivity",
      "/services/microsoft-word/training",
      "/services/microsoft-word/upgrades-and-migration",
      "/services/microsoft-word/word-document-template-creation",
      "/services/microsoft-word/word-template-conversions",
      // access
      "/services/microsoft-access",
      "/services/microsoft-access/3rd-party-product-integration",
      "/services/microsoft-access/access-azure-cloud-based-solutions",
      "/services/microsoft-access/access-online",
      "/services/microsoft-access/access-support",
      "/services/microsoft-access/is-access-right-for-your-company",
      "/services/microsoft-access/upgrades-and-migration",
      // power platform
      "/services/microsoft-powerpoint",
      "/services/microsoft-powerpoint/automate-presentations-with-vba",
      "/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations",
      "/services/microsoft-powerpoint/existing-presentation-redesign",
      "/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
    ];

    // Exclude paths that have different canonical URLs
    if (pathsWithDifferentCanonicals.includes(path)) {
      return null; // Exclude from sitemap
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
