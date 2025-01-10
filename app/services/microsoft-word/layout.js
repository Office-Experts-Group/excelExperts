import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Word Template Conversions | Excel Experts",
  description:
    "Our team of Word design experts take the stress out of your company templates by converting all of your organisation's documents to our easy to use templates, complete with your branding, a consistent look and a professional feel.",

  openGraph: {
    title: "Word Template Conversions | Excel Experts",
    description:
      "Our team of Word design experts take the stress out of your company templates by converting all of your organisation's documents to our easy to use templates, complete with your branding, a consistent look and a professional feel.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/word-template-conversions/",
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

  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/word-template-conversions/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
