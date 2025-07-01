import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word Upgrades and Migration | Excel Experts",
  description:
    "Specialised Microsoft Word upgrade and migration services from Excel Experts Group. Our Excel-focused team provides comprehensive Microsoft Office solutions, ensuring seamless integration between Excel and Word documents.",

  // OpenGraph
  openGraph: {
    title: "Word Upgrades and Migration | Excel Experts",
    description:
      "Professional Microsoft Word upgrade and migration services with Excel integration expertise. Specialists in cross-application compatibility and data integration.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/upgrades-and-migration",
    siteName: "Excel Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Additional metadata
  keywords: ["Word upgrades and migration"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Upgrades and Migration | Excel Experts",
    description:
      "Professional Microsoft Word upgrade and migration services with Excel integration expertise. Specialists in cross-application compatibility and data integration.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.wordexperts.com.au/upgrades-and-migration",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/services/microsoft-word/upgrades-and-migration",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
