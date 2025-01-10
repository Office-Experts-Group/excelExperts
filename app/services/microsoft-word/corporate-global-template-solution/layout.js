import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Excel-Integrated Corporate Word Solutions | Excel Experts",
  description:
    "Advanced Corporate Template Solution combining Excel data automation with Word templates. Create professional documents that automatically pull from your Excel data while maintaining consistent formatting and branding.",

  openGraph: {
    title: "Excel-Integrated Corporate Word Solutions | Excel Experts",
    description:
      "Advanced Corporate Template Solution combining Excel data automation with Word templates. Create professional documents that automatically pull from your Excel data while maintaining consistent formatting and branding.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/corporate-global-template-solution/",
  },

  keywords: [
    // Core services
    // "excel word integration",
    // "excel data automation",
    "corporate word templates",
    // "excel reporting solutions",
    // "integrated template design",

    // // Features
    // "excel data extraction",
    // "automated report generation",
    // "spreadsheet integration",
    // "data consistency control",
    // "excel word synchronization",

    // // Benefits
    // "improved reporting efficiency",
    // "automated data updates",
    // "excel report standardization",
    // "data formatting consistency",
    // "integrated document workflow",

    // // Use cases
    // "financial report automation",
    // "excel data management",
    // "automated document creation",
    // "spreadsheet reporting",
    // "excel template integration",
  ],
  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/corporate-global-template-solution/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
