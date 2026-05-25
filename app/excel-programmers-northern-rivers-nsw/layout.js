import React from "react";

export const metadata = {
  title: "Excel Programmers Northern Rivers NSW",
  description:
    "Northern Rivers Excel programming services for businesses needing custom spreadsheets, VBA automation and efficient reporting systems.",

  openGraph: {
    title: "Excel Programmers Northern Rivers NSW",
    description:
      "Northern Rivers Excel programming services for businesses needing custom spreadsheets, VBA automation and efficient reporting systems.",
    url: "https://www.excelexperts.com.au/excel-programmers-northern-rivers-nsw",
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

  keywords: ["excel programmers northern rivers nsw"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Programmers Northern Rivers NSW",
    description:
      "Northern Rivers Excel programming services for businesses needing custom spreadsheets, VBA automation and efficient reporting systems.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.excelexperts.com.au/excel-programmers-northern-rivers-nsw",
  },
};

export default function ExcelProgrammersNorthernRiversNSWLayout({ children }) {
  return <>{children}</>;
}
