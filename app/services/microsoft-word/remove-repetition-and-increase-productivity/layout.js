import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Data Automation Solutions | Excel Experts",
  description:
    "Our Excel-Word integration solutions automate data transfer between spreadsheets and documents. We streamline your workflow by eliminating repetitive data entry and ensuring consistent data flow across platforms.",

  openGraph: {
    title: "Data Automation Solutions | Excel Experts",
    description:
      "Our Excel-Word integration solutions automate data transfer between spreadsheets and documents. We streamline your workflow by eliminating repetitive data entry and ensuring consistent data flow across platforms.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity/",
  },

  keywords: [
    "Miocrosoft Word automation",
    // // Core services
    // "excel word integration",
    // "spreadsheet automation services",
    // "excel data automation",
    // "data transfer solutions",
    // "excel document integration",

    // // Features
    // "automated data transfer",
    // "spreadsheet synchronization",
    // "excel data extraction",
    // "automated reporting tools",
    // "excel process automation",

    // // Benefits
    // "reduce data entry",
    // "increase spreadsheet efficiency",
    // "improve data accuracy",
    // "streamline excel processes",
    // "automate excel tasks",

    // // Business focus
    // "business data solutions",
    // "corporate excel automation",
    // "enterprise spreadsheet solutions",
    // "professional excel services",
    // "data productivity consulting",
  ],

  metadataBase: new URL("https://www.excelexperts.com.au"),
  alternates: {
    canonical:
      "/services/microsoft-word/remove-repetition-and-increase-productivity/",
    languages: {
      "en-AU":
        "/services/microsoft-word/remove-repetition-and-increase-productivity/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
