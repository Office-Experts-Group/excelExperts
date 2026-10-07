// next-sitemap.config.js
// Excel Experts sitemap: lastmod comes from the last git commit touching each route folder

const { execSync } = require("child_process");
const path = require("path");

// Change to "src/app" if the project keeps its routes under src
const APP_DIR = "app";

// Pages whose canonical points to another domain in the group.
// Kept out of the sitemap so non-canonical URLs aren't submitted to Google.
// Don't Disallow these in robots.txt, or Google can't crawl them to see the canonical tag.
const pathsWithDifferentCanonicals = new Set([
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
  // powerpoint
  "/services/microsoft-powerpoint",
  "/services/microsoft-powerpoint/automate-presentations-with-vba",
  "/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations",
  "/services/microsoft-powerpoint/existing-presentation-redesign",
  "/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
]);

// Runs a git command; returns an empty string if git or the history is unavailable
const git = (command) => {
  try {
    return execSync(`git ${command}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "";
  }
};

// Built once: maps each route to its folder, ignoring route groups,
// e.g. "/blog/foo" -> "app/(site)/blog/foo"
const routeFolders = (() => {
  const map = {};
  git(`ls-files ${APP_DIR}`)
    .split("\n")
    .filter((file) => /\/page\.(js|jsx|ts|tsx)$/.test(file))
    .forEach((file) => {
      const folder = path.posix.dirname(file);
      const segments = folder
        .slice(APP_DIR.length)
        .split("/")
        .filter((segment) => segment && !/^\(.*\)$/.test(segment));
      map["/" + segments.join("/")] = folder;
    });
  return map;
})();

// Last commit date for the files directly inside a route's folder, or undefined
const lastModified = (route) => {
  const folder = routeFolders[route];
  if (!folder) return undefined;
  // :(glob) with a single * matches only this folder, not child routes
  return git(`log -1 --format=%cI -- ":(glob)${folder}/*"`) || undefined;
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.excelexperts.com.au",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  trailingSlash: false,
  autoLastmod: false,
  exclude: ["/api/*"],

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
  },

  transform: async (_config, sitePath) => {
    // Strip any trailing slash so "/foo/" and "/foo" match the same Set entry
    const normalisedPath =
      sitePath.length > 1 ? sitePath.replace(/\/$/, "") : sitePath;

    if (pathsWithDifferentCanonicals.has(normalisedPath)) {
      return null; // Returning null excludes the path from the sitemap
    }

    return { loc: sitePath };
  },
};
