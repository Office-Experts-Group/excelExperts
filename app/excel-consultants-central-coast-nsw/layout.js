import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Consultants Central Coast, NSW",
  description:
    "Excel consultants serving Central Coast NSW as part of an Australia-wide team. 25+ years building spreadsheets, dashboards, macros and reporting systems.",

  // OpenGraph
  openGraph: {
    title: "Excel Consultants Central Coast, NSW",
    description:
      "Excel consultants serving Central Coast NSW as part of an Australia-wide team. 25+ years building spreadsheets, dashboards, macros and reporting systems.",
    url: "https://www.excelexperts.com.au/excel-consultants-central-coast-nsw",
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
    // Location-specific
    "Excel consultants Central Coast, NSW",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Consultants Central Coast, NSW",
    description:
      "Excel consultants serving Central Coast NSW as part of an Australia-wide team. 25+ years building spreadsheets, dashboards, macros and reporting systems.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-consultants-central-coast-nsw",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
