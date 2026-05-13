import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Consultants Canberra",
  description:
    "Australia-wide Excel consultants with local support in Canberra. 25+ years delivering custom spreadsheets, formulas, macros, dashboards & data analysis solutions.",

  // OpenGraph
  openGraph: {
    title: "Excel Consultants Canberra",
    description:
      "Australia-wide Excel consultants with local support in Canberra. 25+ years delivering custom spreadsheets, formulas, macros, dashboards & data analysis solutions.",
    url: "https://www.excelexperts.com.au/excel-consultants-canberra",
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
    "Excel consultants Canberra",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Consultants Canberra",
    description:
      "Australia-wide Excel consultants with local support in Canberra. 25+ years delivering custom spreadsheets, formulas, macros, dashboards & data analysis solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-consultants-canberra",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
