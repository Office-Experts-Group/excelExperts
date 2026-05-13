import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Consultants Northern Rivers, NSW",
  description:
    "With our headquarters in Northern Rivers, NSW. For over 25yrs Excel Experts now our Australia-wide team have created custom spreadsheets, advanced formulas, macros, dashboards and comprehensive data analysis solutions.",

  // OpenGraph
  openGraph: {
    title: "Excel Consultants Northern Rivers, NSW",
    description:
      "With our headquarters in Northern Rivers, NSW. For over 25yrs Excel Experts now our Australia-wide team have created custom spreadsheets, advanced formulas, macros, dashboards and comprehensive data analysis solutions.",
    url: "https://www.excelexperts.com.au/excel-consultants-northern-rivers-nsw",
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
    "Excel consultants Northern Rivers, NSW",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Consultants Northern Rivers, NSW",
    description:
      "With our headquarters in Northern Rivers, NSW. For over 25yrs Excel Experts now our Australia-wide team have created custom spreadsheets, advanced formulas, macros, dashboards and comprehensive data analysis solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-consultants-northern-rivers-nsw",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
