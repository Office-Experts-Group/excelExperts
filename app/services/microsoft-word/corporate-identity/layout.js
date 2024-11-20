import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title:
    "Excel-Integrated Corporate Templates | Data-Driven Document Solutions",
  description:
    "Our Excel integration experts deliver Word templates that automatically populate with your spreadsheet data while maintaining consistent formatting and protecting your corporate identity.",

  openGraph: {
    title:
      "Excel-Integrated Corporate Identity Solutions | Document Automation",
    description:
      "Professional template solutions combining Excel data integration with Word formatting protection. Automate document creation while maintaining corporate identity.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/corporate-identity/",
    siteName: "Excel Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Excel Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  keywords: [
    // Core services
    "excel word integration",
    "spreadsheet document automation",
    "excel data templates",
    "automated report generation",
    "data-driven documents",

    // Service-specific
    "excel template design",
    "spreadsheet automation",
    "excel data protection",
    "automated formatting",
    "integrated document solutions",

    // Business focus
    "financial reporting automation",
    "excel data management",
    "automated business reports",
    "spreadsheet integration",
    "data template services",

    // Professional services
    "professional excel templates",
    "corporate data solutions",
    "automated consistency tools",
    "excel reporting system",
    "integrated document workflow",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Excel-Integrated Corporate Identity Solutions | Document Automation",
    description:
      "Professional template solutions combining Excel data integration with Word formatting protection. Automate document creation while maintaining corporate identity.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/corporate-identity/",
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
