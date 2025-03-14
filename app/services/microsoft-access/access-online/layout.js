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
    url: "https://www.excelexperts.com.au/services/microsoft-access/access-online",
    siteName: "Excel Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    // Core Access Online services
    "Microsoft Access cloud database solutions",
  ],
  alternates: {
    canonical: "https://www.accessexperts.com.au/access-online",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-access/access-online",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
