import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Consultants Melbourne",
  description:
    "Australia-wide Excel consultants with local developers available in Melbourne. 25+ years improving reporting, spreadsheets, dashboards and automation systems.",

  // OpenGraph
  openGraph: {
    title: "Excel Consultants Melbourne",
    description:
      "Australia-wide Excel consultants with local developers available in Melbourne. 25+ years improving reporting, spreadsheets, dashboards and automation systems.",
    url: "https://www.excelexperts.com.au/excel-consultants-melbourne",
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
    "Excel consultants Melbourne",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Consultants Melbourne",
    description:
      "Australia-wide Excel consultants with local developers available in Melbourne. 25+ years improving reporting, spreadsheets, dashboards and automation systems.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-consultants-melbourne",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
