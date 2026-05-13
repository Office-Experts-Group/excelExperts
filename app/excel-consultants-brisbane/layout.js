import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Consultants Brisbane - Excel Experts",
  description:
    "Excel Experts Group is an Australia-wide team with consultants available in Brisbane. For over 25 years we've delivered advanced spreadsheets, dashboards, formulas, macros, and data analysis solutions to businesses nationwide.",

  // OpenGraph
  openGraph: {
    title: "Excel Consultants Brisbane - Excel Experts",
    description:
      "Excel Experts Group is an Australia-wide team with consultants available in Brisbane. For over 25 years we've delivered advanced spreadsheets, dashboards, formulas, macros, and data analysis solutions to businesses nationwide.",
    url: "https://www.excelexperts.com.au/excel-consultants-brisbane",
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
    "Excel consultants Brisbane",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Consultants Brisbane - Excel Experts",
    description:
      "Excel Experts Group is an Australia-wide team with consultants available in Brisbane. For over 25 years we've delivered advanced spreadsheets, dashboards, formulas, macros, and data analysis solutions to businesses nationwide.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-consultants-brisbane",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
