import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Consultants Richmond",
  description:
    "Excel Experts operates across Australia with local Richmond-based developers available, helping businesses streamline reporting, dashboards and automation since 2000.",

  // OpenGraph
  openGraph: {
    title: "Excel Consultants Richmond",
    description:
      "Excel Experts operates across Australia with local Richmond-based developers available, helping businesses streamline reporting, dashboards and automation since 2000.",
    url: "https://www.excelexperts.com.au/excel-consultants-richmond",
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
    "Excel consultants Richmond",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Consultants Richmond",
    description:
      "Excel Experts operates across Australia with local Richmond-based developers available, helping businesses streamline reporting, dashboards and automation since 2000.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-consultants-richmond",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
