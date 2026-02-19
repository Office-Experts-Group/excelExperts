import React from "react";

export const metadata = {
  title: "Excel Programmers Northern Rivers NSW",
  description:
    "Established in the Northern Rivers in 2000, Excel Experts has grown to become a nationwide leader in developing Excel solutions for businesses of all sizes.",

  openGraph: {
    title: "Excel Programmers Northern Rivers NSW",
    description:
      "Established in the Northern Rivers in 2000, Excel Experts has grown to become a nationwide leader in developing Excel solutions for businesses of all sizes.",
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
      "Established in the Northern Rivers in 2000, Excel Experts has grown to become a nationwide leader in developing Excel solutions for businesses of all sizes.",
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
