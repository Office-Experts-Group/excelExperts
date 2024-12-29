import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title:
    "Word Design Services | Excel-Integrated Templates | Data-Driven Design Solutions",
  description:
    "Excel Experts specialise in converting your existing documents into smart, data-integrated Word templates. Our solutions combine Excel's powerful data handling with Word's document capabilities for automated, professional results.",

  openGraph: {
    title: "Word Template Conversions | Excel-Integrated Design Services",
    description:
      "Transform your documents into smart, data-driven Word templates with Excel integration. Our expert team combines Excel's analytical power with Word's document capabilities for automated, professional results.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/word-template-conversions/",
  },

  keywords: [
    // Core services
    "Excel-Word template integration",
    "data-driven Word templates",
    "Excel-powered document design",
    "spreadsheet to Word conversion",
    "automated document templates",

    // Service-specific
    "Excel data integration services",
    "dynamic Word templates",
    "automated document solutions",
    "smart Word templates",
    "data-linked Word templates",

    // Location-based
    "Excel-Word integration Australia",
    "data template services Sydney",
    "automated document solutions Melbourne",
    "Excel-Word experts Brisbane",

    // Business focus
    "business intelligence templates",
    "automated corporate documents",
    "data-driven document design",
    "integrated template solutions",
    "Excel-Word automation",
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
