import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Excel-Integrated Form Solutions | Excel Experts",
  description:
    "Expert form design services combining Excel data management with Word forms. Specialising in creating data-driven forms with automated Excel integration, spreadsheet synchronization, and advanced VBA solutions.",
  openGraph: {
    title: "Excel-Integrated Form Solutions | Excel Experts",
    description:
      "Expert form design services combining Excel data management with Word forms. Specialising in creating data-driven forms with automated Excel integration, spreadsheet synchronization, and advanced VBA solutions.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/fill-in-forms/",
  },

  keywords: [
    "word fill in forms",

    // Core form services
    // "excel integrated forms",
    // "data-driven form design",
    // "excel form automation",
    // "spreadsheet form integration",
    // "excel data management forms",

    // // Technical aspects
    // "excel VBA integration",
    // "spreadsheet automation",
    // "excel data extraction",
    // "automated form population",
    // "excel form controls",

    // // Service-specific
    // "dynamic data forms",
    // "excel form templates",
    // "spreadsheet synchronized forms",
    // "automated data entry",
    // "excel-word integration",

    // // Business benefits
    // "data workflow automation",
    // "spreadsheet form services",
    // "integrated form solutions",
    // "excel form development",
    // "business data automation",
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
