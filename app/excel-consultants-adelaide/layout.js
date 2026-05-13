import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Consultants Adelaide",
  description:
    "Australia-wide Excel consultancy with consultants available in Adelaide. Over 25 years of experience delivering custom spreadsheets, dashboards, formulas, macros, and data analysis solutions for businesses across Australia.",

  // OpenGraph
  openGraph: {
    title: "Excel Consultants Adelaide",
    description:
      "Australia-wide Excel consultancy with consultants available in Adelaide. Over 25 years of experience delivering custom spreadsheets, dashboards, formulas, macros, and data analysis solutions for businesses across Australia.",
    url: "https://www.excelexperts.com.au/excel-consultants-adelaide",
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
    "Excel consultants Adelaide",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Consultants Adelaide",
    description:
      "Australia-wide Excel consultancy with consultants available in Adelaide. Over 25 years of experience delivering custom spreadsheets, dashboards, formulas, macros, and data analysis solutions for businesses across Australia.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-consultants-adelaide",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
