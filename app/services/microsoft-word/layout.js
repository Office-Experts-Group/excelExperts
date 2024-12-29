import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title:
    "Excel-Integrated Development Services | Data-Driven Solutions Australia",
  description:
    "Excel Experts team specialises in integrated Microsoft Office solutions, combining Excel's analytical power with comprehensive Office suite capabilities. Call us 1300 10 28 10 or Email us consult@excelexperts.com.au",

  openGraph: {
    title:
      "Excel-Integrated Development Services | Data-Driven Solutions Australia",
    description:
      "Excel Experts team specialises in integrated Microsoft Office solutions, combining Excel's analytical power with comprehensive Office suite capabilities. Call us 1300 10 28 10 or Email us consult@excelexperts.com.au",
    url: "https://www.excelexperts.com.au/services/",
  },

  keywords: [
    "Microsoft Word template conversions",
    // // Core services
    // "excel integration services australia",
    // "data-driven office solutions",
    // "excel-based consulting services",
    // "integrated office automation",
    // "excel-powered business solutions",

    // // Product specific
    // "excel development specialists",
    // "excel-access integration",
    // "excel power platform solutions",
    // "excel-sharepoint integration",
    // "excel cloud solutions",

    // // Service specific
    // "excel vba automation",
    // "data-driven template creation",
    // "excel database integration",
    // "automated workflow solutions",
    // "excel dashboard development",

    // // Location based
    // "excel integration services sydney",
    // "data solutions melbourne",
    // "excel consulting brisbane",
    // "excel experts perth",
    // "microsoft integration australia wide",
  ],

  canonical: "https://www.excelexperts.com.au/services/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
