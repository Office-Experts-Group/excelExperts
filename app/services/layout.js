import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Excel Services | Excel Consultants Australia",
  description:
    "Comprehensive Microsoft Excel services including custom development, VBA automation, data analysis, reporting solutions, formula development and training.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Excel Services | Excel Consultants Australia",
    description:
      "Comprehensive Microsoft Excel services including custom development, VBA automation, data analysis, reporting solutions, formula development and training.",
    url: "https://www.excelexperts.com.au/services",
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

  // Keywords
  keywords: [
    // Core service keywords
    "Microsoft Excel services Australia",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Excel Services | Excel Consultants Australia",
    description:
      "Comprehensive Microsoft Excel services including custom development, VBA automation, data analysis, reporting solutions, formula development and training.",
    images: ["/logo.png"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.excelexperts.com.au/services",
  },
};

export default function ServicesLayout({ children }) {
  return <main>{children}</main>;
}
