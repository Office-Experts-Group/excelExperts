import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word Template Creation | Excel Experts",
  description:
    "Excel Experts create professional Word templates with seamless Excel integration capabilities. Our templates feature automated data integration, custom formatting, and comprehensive branding across your Microsoft Office documents.",

  // OpenGraph
  openGraph: {
    title: "Word Template Creation | Excel Experts",
    description:
      "Excel Experts create professional Word templates with seamless Excel integration capabilities. Our templates feature automated data integration, custom formatting, and comprehensive branding across your Microsoft Office documents.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/word-document-template-creation/",
  },

  // Additional metadata
  keywords: [
    "Word document template creation",
    // // Core template services
    // "Excel-Word template integration",
    // "data-driven Word templates",
    // "Excel-linked document templates",
    // "automated report templates",
    // "integrated Office templates",

    // // Specific services
    // "Excel data merge templates",
    // "dynamic document creation",
    // "automated Word templates",
    // "Excel-Word automation",
    // "integrated document solutions",

    // // Features
    // "Excel data integration",
    // "automated document updating",
    // "cross-application templates",
    // "dynamic content generation",
    // "automated report formatting",

    // // Business focus
    // "business intelligence templates",
    // "data-driven documentation",
    // "integrated reporting solutions",
    // "automated business documents",
    // "Excel-Word workflow automation",
  ],

  metadataBase: new URL("https://www.excelexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-word/word-document-template-creation/",
    languages: {
      "en-AU": "/services/microsoft-word/word-document-template-creation/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
