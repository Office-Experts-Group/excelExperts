import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel Experts Blog",
  description:
    "Unlock the full potential of Excel with insights from seasoned consultants. Our blog offers expert guidance on improving accuracy, automating workflows, and building spreadsheets that drive better business decisions.",

  // OpenGraph
  openGraph: {
    title: "Excel Experts Blog",
    description:
      "Unlock the full potential of Excel with insights from seasoned consultants. Our blog offers expert guidance on improving accuracy, automating workflows, and building spreadsheets that drive better business decisions.",
    url: "https://www.excelexperts.com.au/blog",
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
  keywords: ["Excel Experts Blog"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Experts Blog",
    description:
      "Unlock the full potential of Excel with insights from seasoned consultants. Our blog offers expert guidance on improving accuracy, automating workflows, and building spreadsheets that drive better business decisions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
