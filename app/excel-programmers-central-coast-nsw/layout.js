import React from "react";

export const metadata = {
  title: "Excel Programmers Central Coast NSW",
  description:
    "Central Coast Excel experts providing custom spreadsheet development, VBA programming and business automation tailored to your workflow.",

  openGraph: {
    title: "Excel Programmers Central Coast NSW",
    description:
      "Central Coast Excel experts providing custom spreadsheet development, VBA programming and business automation tailored to your workflow.",
    url: "https://www.excelexperts.com.au/excel-programmers-central-coast-nsw",
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

  keywords: ["excel programmers central coast nsw"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Programmers Central Coast NSW",
    description:
      "Central Coast Excel experts providing custom spreadsheet development, VBA programming and business automation tailored to your workflow.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.excelexperts.com.au/excel-programmers-central-coast-nsw",
  },
};

export default function ExcelProgrammersCentralCoastNSWLayout({ children }) {
  return <>{children}</>;
}
