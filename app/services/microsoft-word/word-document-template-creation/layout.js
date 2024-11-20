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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@ExcelExpertsAU",
    title: "Excel-Integrated Word Template Creation",
    description:
      "Professional Word templates with seamless Excel integration. Create dynamic, data-driven documents with automated updating and comprehensive branding.",
    images: ["/logo.png"],
  },

  // Additional tags
  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/word-document-template-creation/",
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
