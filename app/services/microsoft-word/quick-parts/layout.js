import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title:
    "Excel-Integrated Quick Parts | Data-Driven Document Components | Excel Experts",
  description:
    "Our Excel integration experts deliver Quick Parts solutions that seamlessly pull data from your spreadsheets into Word documents, creating dynamic, data-driven content blocks that save your business time and money.",

  openGraph: {
    title: "Excel-Integrated Quick Parts Solutions",
    description:
      "Our Excel integration experts deliver Quick Parts solutions that seamlessly pull data from your spreadsheets into Word documents, creating dynamic, data-driven content blocks that save your business time and money.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/quick-parts/",
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
    // Core Quick Parts services
    "excel quick parts integration",
    "data-driven quick parts",
    "excel building blocks",
    "spreadsheet data components",
    "excel document automation",

    // Location-based
    "excel integration australia",
    "spreadsheet consulting sydney",
    "data automation melbourne",
    "excel services brisbane",
    "spreadsheet experts perth",

    // Service-specific
    "excel data integration",
    "spreadsheet automation",
    "dynamic content blocks",
    "automated data components",
    "excel document efficiency",

    // Industry-specific
    "financial data automation",
    "business spreadsheet solutions",
    "enterprise data integration",
    "professional excel services",

    // Technology combinations
    "excel word automation",
    "spreadsheet productivity tools",
    "data integration solutions",
    "excel template automation",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel-Integrated Quick Parts Solutions",
    description:
      "Our Excel integration experts deliver Quick Parts solutions that seamlessly pull data from your spreadsheets into Word documents, creating dynamic, data-driven content blocks that save your business time and money.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/quick-parts/",
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
