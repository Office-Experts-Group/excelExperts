import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Word Template Creation | Excel-Integrated Document Solutions | Microsoft Office Services",
  description:
    "Excel Experts create professional Word templates with seamless Excel integration capabilities. Our templates feature automated data integration, custom formatting, and comprehensive branding across your Microsoft Office documents.",

  // OpenGraph
  openGraph: {
    title: "Word Document & Template Creation with Excel Integration",
    description:
      "Specialized Word templates designed by Excel experts, featuring seamless data integration, automated reporting, and professional branding across your Microsoft Office suite.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/word-document-template-creation/",
  },

  // Additional metadata
  keywords: [
    // Core template services
    "Excel-Word template integration",
    "data-driven Word templates",
    "Excel-linked document templates",
    "automated report templates",
    "integrated Office templates",

    // Specific services
    "Excel data merge templates",
    "dynamic document creation",
    "automated Word templates",
    "Excel-Word automation",
    "integrated document solutions",

    // Features
    "Excel data integration",
    "automated document updating",
    "cross-application templates",
    "dynamic content generation",
    "automated report formatting",

    // Business focus
    "business intelligence templates",
    "data-driven documentation",
    "integrated reporting solutions",
    "automated business documents",
    "Excel-Word workflow automation",
  ],
  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/word-document-template-creation/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
