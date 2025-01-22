import React from "react";

export const metadata = {
  // Basic metadata
  title: "Access Online Database Solutions | Excel Experts",
  description:
    "Professional Microsoft Access cloud database solutions, including Office 365 integration, SharePoint connectivity, and Azure hosting. Expert consultants for online database development and mobile access solutions.",

  // OpenGraph
  openGraph: {
    title: "Access Online Database Solutions | Excel Experts",
    description:
      "Professional Microsoft Access cloud database solutions, including Office 365 integration, SharePoint connectivity, and Azure hosting. Expert consultants for online database development and mobile access solutions.",
    url: "https://www.excelexperts.com.au/services/microsoft-access/access-online/",
  },

  // Additional metadata
  keywords: [
    // Core Access Online services
    "Microsoft Access cloud database solutions",
    // "Access database Office 365 integration",
    // "SharePoint Access database hosting",
    // "Azure Access database migration",

    // // Specific solutions
    // "multi-user Access database hosting",
    // "Access database mobile connectivity",
    // "iPad Access database solutions",
    // "iPhone database access setup",

    // // Integration specifics
    // "Access SharePoint data connection",
    // "Access Azure SQL integration",
    // "Office 365 Access web database",
    // "cloud-hosted Access applications",

    // // Implementation focused
    // "Access database remote access setup",
    // "secure Access cloud migration",
    // "Access web database conversion",
    // "online Access form development",

    // // Cost and business specific
    // "affordable Access cloud hosting",
    // "Access database monthly hosting",
    // "business Access cloud solutions",
    // "enterprise Access hosting plans",

    // // Technical capabilities
    // "Access database synchronization",
    // "Access cloud backup solutions",
    // "Access multi-device deployment",
    // "Access web app development",

    // // Location specific
    // "Access cloud solutions Australia",
    // "Sydney Access database hosting",
    // "Melbourne Access cloud services",
    // "Brisbane Access online solutions",
  ],
  metadataBase: new URL("https://www.excelexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-access/access-online/",
    languages: {
      "en-AU": "/services/microsoft-access/access-online/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
