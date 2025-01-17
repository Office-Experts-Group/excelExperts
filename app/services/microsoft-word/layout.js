import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Microsoft Word Services | Excel Experts",
  description:
    "Our Excel Experts team has a dedicated wing of Word design professionals who can help you with all aspects of your company's Word documents, excel, access and power platform integrations.",

  openGraph: {
    title: "Microsoft Word Services | Excel Experts",
    description:
      "Our Excel Experts team has a dedicated wing of Word design professionals who can help you with all aspects of your company's Word documents, excel, access and power platform integrations.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/",
  },

  keywords: [
    "Microsoft Word and Excel Integration",
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

  metadataBase: new URL("https://www.excelexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-word/",
    languages: {
      "en-AU": "/services/microsoft-word/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
