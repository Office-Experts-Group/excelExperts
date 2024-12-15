import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title:
    "Excel-Integrated Corporate Templates | Data-Driven Document Solutions",
  description:
    "Our Excel integration experts deliver Word templates that automatically populate with your spreadsheet data while maintaining consistent formatting and protecting your corporate identity.",

  openGraph: {
    title:
      "Excel-Integrated Corporate Identity Solutions | Document Automation",
    description:
      "Professional template solutions combining Excel data integration with Word formatting protection. Automate document creation while maintaining corporate identity.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/corporate-identity/",
  },

  keywords: [
    // Core services
    "excel word integration",
    "spreadsheet document automation",
    "excel data templates",
    "automated report generation",
    "data-driven documents",

    // Service-specific
    "excel template design",
    "spreadsheet automation",
    "excel data protection",
    "automated formatting",
    "integrated document solutions",

    // Business focus
    "financial reporting automation",
    "excel data management",
    "automated business reports",
    "spreadsheet integration",
    "data template services",

    // Professional services
    "professional excel templates",
    "corporate data solutions",
    "automated consistency tools",
    "excel reporting system",
    "integrated document workflow",
  ],
  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/corporate-identity/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
