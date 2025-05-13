import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Consultants Central Coast, NSW",
  description:
    "Excel consultants in Central Coast, NSW with 25+ years of experience. Custom spreadsheets, dashboards, formulas, macros, and data analysis solutions.",

  // OpenGraph
  openGraph: {
    title: "Excel Consultants Central Coast, NSW",
    description:
      "Leading Excel consultants in Central Coast, NSW. For over 25yrs Excel Experts have supercharged business efficiency with custom spreadsheets, advanced formulas, macros, dashboards and comprehensive data analysis solutions.",
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
      "Leading Excel consultants in Central Coast, NSW. For over 25yrs Excel Experts have supercharged business efficiency with custom spreadsheets, advanced formulas, macros, dashboards and comprehensive data analysis solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-consultants-central-coast-nsw",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
