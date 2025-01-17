import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Database Upgrades and Migration - Excel Experts",
  description:
    "Expert Microsoft Access database upgrade and migration services. Our specialists ensure smooth transitions, resolve compatibility issues, and optimize database performance with minimal disruption.",

  // OpenGraph
  openGraph: {
    title:
      "Microsoft Access Database Upgrades & Migration Services | Excel Experts",
    description:
      "Professional Microsoft Access database upgrade and migration services. Specialising in version upgrades, SQL Server migrations, cloud transitions, and performance optimization.",
    url: "https://www.excelexperts.com.au/services/microsoft-access/upgrades-and-migration/",
  },

  // Additional metadata
  keywords: [
    // Core upgrade/migration services
    "Microsoft Access database migration services",
    "Microsoft Access upgrade solutions",
    // "Access database version upgrade specialist",
    // "Legacy Access database migration",
    // "Database corruption repair services",

    // // Specific migration types
    // "Access to SQL Server migration",
    // "Access database cloud migration",
    // "Azure database migration services",
    // "Access multi-user database conversion",

    // // Version-specific
    // "Access 2010 to 2019 upgrade",
    // "Access 97 database conversion",
    // "Access 2000 database migration",
    // "Access 365 compatibility upgrade",

    // // Problem-specific
    // "Slow Access database optimization",
    // "Access database corruption repair",
    // "Database splitting and optimization",
    // "Access performance troubleshooting",

    // // Solution-specific
    // "Access backend migration SQL Server",
    // "Access Azure cloud integration",
    // "SharePoint database migration",
    // "Access database upsizing services",

    // // Industry-specific
    // "Enterprise Access database migration",
    // "Multi-location database upgrade",
    // "Secure database migration services",
    // "Critical database upgrade planning",

    // // Technology combinations
    // "Access SQL Server integration",
    // "Azure cloud database migration",
    // "SharePoint Access integration",
    // "Office 365 database migration",
  ],
  metadataBase: new URL("https://www.excelexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-access/upgrades-and-migration/",
    languages: {
      "en-AU": "/services/microsoft-access/upgrades-and-migration/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
