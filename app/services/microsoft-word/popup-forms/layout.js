import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Excel-Integrated Popup Forms | Excel Experts",
  description:
    "Our Excel integration experts deliver popup forms that seamlessly connect with your spreadsheet data, enhancing data entry processes, improving accuracy, and streamlining Excel-to-Word workflows while saving your business money.",
  openGraph: {
    title: "Excel-Integrated Popup Forms | Excel Experts",
    description:
      "Our Excel integration experts deliver popup forms that seamlessly connect with your spreadsheet data, enhancing data entry processes, improving accuracy, and streamlining Excel-to-Word workflows while saving your business money.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/popup-forms/",
  },

  keywords: [
    "microsoft word popup forms",
    // // Core popup form services
    // "excel integrated forms",
    // "data-driven popup forms",
    // "excel form automation",
    // "spreadsheet data forms",
    // "excel popup integration",

    // // Features and benefits
    // "spreadsheet data validation",
    // "excel automation tools",
    // "automated data entry",
    // "excel workflow solutions",
    // "spreadsheet productivity tools",

    // // Service-specific
    // "excel form integration",
    // "data automation consulting",
    // "excel popup development",
    // "spreadsheet automation",
    // "data template design",

    // // Business focus
    // "business data solutions",
    // "excel template automation",
    // "spreadsheet efficiency",
    // "data entry optimization",
    // "excel quality control",
  ],
  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/popup-forms/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
