import React from "react";

export const metadata = {
  // Basic metadata
  title: "10 Common Excel Problems on Mac and How to Fix Them (2026 Guide)",
  description:
    "Discover practical solutions to the 10 most common Excel problems on Mac. Learn how to troubleshoot Excel for macOS Sequoia, Sonoma, and Ventura.",

  // OpenGraph
  openGraph: {
    title: "10 Common Excel Problems on Mac and How to Fix Them (2026 Guide)",
    description:
      "Discover practical solutions to the 10 most common Excel problems on Mac. Learn how to troubleshoot Excel for macOS Sequoia, Sonoma, and Ventura.",
    url: "https://www.excelexperts.com.au/blog/excel-problems-on-mac",
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
    type: "article",
  },

  // Additional metadata
  keywords: ["Excel Mac problems"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "10 Common Excel Problems on Mac and How to Fix Them (2026 Guide)",
    description:
      "Discover practical solutions to the 10 most common Excel problems on Mac. Learn how to troubleshoot Excel for macOS Sequoia, Sonoma, and Ventura.",
    images: ["/logo.png"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.excelexperts.com.au/blog/excel-problems-on-mac",
  },

  // Article metadata
  authors: [{ name: "Daniel Thomas" }],
};

export default function ExcelMacProblemsLayout({ children }) {
  return <>{children}</>;
}
