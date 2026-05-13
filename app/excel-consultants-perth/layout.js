import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Consultants Perth",
  description:
    "Perth businesses can access our Australia-wide Excel consultants with 25+ years of experience, our local developers are available for reporting, dashboards, automation and spreadsheet systems.",
  // OpenGraph
  openGraph: {
    title: "Excel Consultants Perth",
    description:
      "Perth businesses can access our Australia-wide Excel consultants with 25+ years of experience, our local developers are available for reporting, dashboards, automation and spreadsheet systems.",
    url: "https://www.excelexperts.com.au/excel-consultants-perth",
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
    "Excel consultants Perth",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Consultants Perth",
    description:
      "Perth businesses can access our Australia-wide Excel consultants with 25+ years of experience, our local developers are available for reporting, dashboards, automation and spreadsheet systems.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-consultants-perth",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
