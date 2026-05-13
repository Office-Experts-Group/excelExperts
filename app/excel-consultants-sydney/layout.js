import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Consultants Sydney",
  description:
    "For Sydney businesses, our Australia-wide Excel team provides local developers for spreadsheets, dashboards, automation and reporting built over 25+ years of experience. Our team of experts has a trusted reputation.",

  // OpenGraph
  openGraph: {
    title: "Excel Consultants Sydney",
    description:
      "For Sydney businesses, our Australia-wide Excel team provides local developers for spreadsheets, dashboards, automation and reporting built over 25+ years of experience. Our team of experts has a trusted reputation.",
    url: "https://www.excelexperts.com.au/excel-consultants-sydney",
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
    "Excel consultants Sydney",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Consultants Sydney",
    description:
      "For Sydney businesses, our Australia-wide Excel team provides local developers for spreadsheets, dashboards, automation and reporting built over 25+ years of experience. Our team of experts has a trusted reputation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-consultants-sydney",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
