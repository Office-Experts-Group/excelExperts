import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Consultants Wollongong",
  description:
    "Excel Experts support Wollongong organisations through an Australia-wide team, our local developers have 25+ years building spreadsheets, macros and crafting data analysis solutions integrated in the Microsoft ecosystem.",

  // OpenGraph
  openGraph: {
    title: "Excel Consultants Wollongong",
    description:
      "Excel Experts support Wollongong organisations through an Australia-wide team, our local developers have 25+ years building spreadsheets, macros and crafting data analysis solutions integrated in the Microsoft ecosystem.",
    url: "https://www.excelexperts.com.au/excel-consultants-wollongong",
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
    "Excel consultants Wollongong",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Consultants Wollongong",
    description:
      "Excel Experts support Wollongong organisations through an Australia-wide team, our local developers have 25+ years building spreadsheets, macros and crafting data analysis solutions integrated in the Microsoft ecosystem.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-consultants-wollongong",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
