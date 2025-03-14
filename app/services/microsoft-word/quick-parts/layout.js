import React from "react";

export const metadata = {
  title: "Excel-Integrated Quick Parts | Excel Experts",
  description:
    "Our Excel integration experts deliver Quick Parts solutions that seamlessly pull data from your spreadsheets into Word documents, creating dynamic, data-driven content blocks that save your business time and money.",

  openGraph: {
    title: "Excel-Integrated Quick Parts Solutions | Excel Experts",
    description:
      "Our Excel integration experts deliver Quick Parts solutions that seamlessly pull data from your spreadsheets into Word documents, creating dynamic, data-driven content blocks that save your business time and money.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/quick-parts",
    siteName: "Excel Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  keywords: [
    // Core Quick Parts services
    "Word quick parts integration",
  ],
  alternates: {
    canonical: "https://www.wordexperts.com.au/quick-parts",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-word/quick-parts",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
