import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Word Upgrades and Migration | Excel Experts",
  description:
    "Specialised Microsoft Word upgrade and migration services from Excel Experts Group. Our Excel-focused team provides comprehensive Microsoft Office solutions, ensuring seamless integration between Excel and Word documents.",

  // OpenGraph
  openGraph: {
    title: "Word Upgrades and Migration | Excel Experts",
    description:
      "Professional Microsoft Word upgrade and migration services with Excel integration expertise. Specialists in cross-application compatibility and data integration.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/upgrades-and-migration/",
  },

  // Additional metadata
  keywords: [
    "Word upgrades and migration",
    // // Core services
    // "Excel-Word integration services",
    // "Office suite migration",
    // "Excel-compatible Word upgrades",
    // "Cross-application document conversion",
    // "Excel data to Word migration",

    // // Specific services
    // "Word-Excel template migration",
    // "Office suite macro upgrades",
    // "Cross-platform formatting solutions",
    // "Excel-Word compatibility fixes",
    // "Integrated document repair",

    // // Problem-specific
    // "Excel-Word formatting issues",
    // "Office suite document repair",
    // "Cross-application compatibility",
    // "Integrated document recovery",
    // "Excel-Word template integration",

    // // Location-based
    // "Excel-Word migration Australia",
    // "Office suite experts Sydney",
    // "Microsoft integration specialists Melbourne",
    // "Excel-Word consultants Brisbane",

    // // Business solutions
    // "integrated Office migration",
    // "enterprise suite upgrades",
    // "corporate Excel-Word solutions",
    // "professional Office integration",
  ],
  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/upgrades-and-migration/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
