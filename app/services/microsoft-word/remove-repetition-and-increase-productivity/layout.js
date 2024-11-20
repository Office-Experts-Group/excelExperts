import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Excel-Word Integration | Data Automation Solutions | Excel Experts",
  description:
    "Our Excel-Word integration solutions automate data transfer between spreadsheets and documents. We streamline your workflow by eliminating repetitive data entry and ensuring consistent data flow across platforms.",

  openGraph: {
    title: "Excel-Word Integration and Productivity Solutions",
    description:
      "Our Excel-Word integration solutions automate data transfer between spreadsheets and documents. We streamline your workflow by eliminating repetitive data entry and ensuring consistent data flow across platforms.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity/",
    siteName: "Excel Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Excel Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  keywords: [
    // Core services
    "excel word integration",
    "spreadsheet automation services",
    "excel data automation",
    "data transfer solutions",
    "excel document integration",

    // Features
    "automated data transfer",
    "spreadsheet synchronization",
    "excel data extraction",
    "automated reporting tools",
    "excel process automation",

    // Benefits
    "reduce data entry",
    "increase spreadsheet efficiency",
    "improve data accuracy",
    "streamline excel processes",
    "automate excel tasks",

    // Business focus
    "business data solutions",
    "corporate excel automation",
    "enterprise spreadsheet solutions",
    "professional excel services",
    "data productivity consulting",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel-Word Integration and Productivity Solutions",
    description:
      "Our Excel-Word integration solutions automate data transfer between spreadsheets and documents. We streamline your workflow by eliminating repetitive data entry and ensuring consistent data flow across platforms.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
