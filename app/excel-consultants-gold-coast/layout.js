import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Consultants Gold Coast",
  description:
    "Australia-wide Excel team with Gold Coast-based developers available. Over 25 years’ experience in spreadsheets, automation, dashboards and data solutions.",

  // OpenGraph
  openGraph: {
    title: "Excel Consultants Gold Coast",
    description:
      "Australia-wide Excel team with Gold Coast-based developers available. Over 25 years’ experience in spreadsheets, automation, dashboards and data solutions.",
    url: "https://www.excelexperts.com.au/excel-consultants-gold-coast",
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
    "Excel consultants Gold Coast",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Consultants Gold Coast",
    description:
      "Australia-wide Excel team with Gold Coast-based developers available. Over 25 years’ experience in spreadsheets, automation, dashboards and data solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-consultants-gold-coast",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
