import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Consultants Darwin",
  description:
    "Excel Experts work with Darwin organisations as part of an Australia-wide consultancy, delivering spreadsheets, dashboards, formulas and reporting solutions for 25+ years.",

  // OpenGraph
  openGraph: {
    title: "Excel Consultants Darwin",
    description:
      "Excel Experts work with Darwin organisations as part of an Australia-wide consultancy, delivering spreadsheets, dashboards, formulas and reporting solutions for 25+ years.",
    url: "https://www.excelexperts.com.au/excel-consultants-darwin",
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
    "Excel consultants Darwin",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Consultants Darwin",
    description:
      "Excel Experts work with Darwin organisations as part of an Australia-wide consultancy, delivering spreadsheets, dashboards, formulas and reporting solutions for 25+ years.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-consultants-darwin",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
