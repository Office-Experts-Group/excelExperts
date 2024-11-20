import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Word Upgrades and Migration | Excel Expert Australia",
  description:
    "Specialized Microsoft Word upgrade and migration services from Excel Experts Group. Our Excel-focused team provides comprehensive Microsoft Office solutions, ensuring seamless integration between Excel and Word documents.",

  // OpenGraph
  openGraph: {
    title: "Word Upgrades and Migration Services - Excel Experts Group",
    description:
      "Professional Microsoft Word upgrade and migration services with Excel integration expertise. Specialists in cross-application compatibility and data integration.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/upgrades-and-migration/",
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
    type: "website",
  },

  // Additional metadata
  keywords: [
    // Core services
    "Excel-Word integration services",
    "Office suite migration",
    "Excel-compatible Word upgrades",
    "Cross-application document conversion",
    "Excel data to Word migration",

    // Specific services
    "Word-Excel template migration",
    "Office suite macro upgrades",
    "Cross-platform formatting solutions",
    "Excel-Word compatibility fixes",
    "Integrated document repair",

    // Problem-specific
    "Excel-Word formatting issues",
    "Office suite document repair",
    "Cross-application compatibility",
    "Integrated document recovery",
    "Excel-Word template integration",

    // Location-based
    "Excel-Word migration Australia",
    "Office suite experts Sydney",
    "Microsoft integration specialists Melbourne",
    "Excel-Word consultants Brisbane",

    // Business solutions
    "integrated Office migration",
    "enterprise suite upgrades",
    "corporate Excel-Word solutions",
    "professional Office integration",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@ExcelExpertsAU",
    title:
      "Word Upgrades and Migration Services - Excel Integration Specialists",
    description:
      "Professional Microsoft Word upgrade and migration services with Excel integration expertise. Specialists in cross-application compatibility and data integration.",
    images: ["/logo.png"],
  },

  // Additional tags
  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/upgrades-and-migration/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Icons
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
