import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Excel-Integrated Form Solutions | Data-Driven Forms | Excel Experts",
  description:
    "Expert form design services combining Excel data management with Word forms. Specialized in creating data-driven forms with automated Excel integration, spreadsheet synchronization, and advanced VBA solutions.",

  openGraph: {
    title: "Excel-Integrated Forms & Data Management Solutions",
    description:
      "Professional form design services combining Excel data management with Word forms. Create dynamic, data-driven forms with automated Excel integration.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/fill-in-forms/",
  },

  keywords: [
    // Core form services
    "excel integrated forms",
    "data-driven form design",
    "excel form automation",
    "spreadsheet form integration",
    "excel data management forms",

    // Technical aspects
    "excel VBA integration",
    "spreadsheet automation",
    "excel data extraction",
    "automated form population",
    "excel form controls",

    // Service-specific
    "dynamic data forms",
    "excel form templates",
    "spreadsheet synchronized forms",
    "automated data entry",
    "excel-word integration",

    // Business benefits
    "data workflow automation",
    "spreadsheet form services",
    "integrated form solutions",
    "excel form development",
    "business data automation",
  ],
  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/fill-in-forms/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
