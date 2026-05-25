import React from "react";

export const metadata = {
  title: "Excel Programmers Gold Coast",
  description:
    "Gold Coast Excel programmers delivering custom spreadsheets, VBA automation and reporting tools backed by 25+ years of expertise.",

  openGraph: {
    title: "Excel Programmers Gold Coast",
    description:
      "Gold Coast Excel programmers delivering custom spreadsheets, VBA automation and reporting tools backed by 25+ years of expertise.",
    url: "https://www.excelexperts.com.au/excel-programmers-gold-coast",
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

  keywords: ["excel programmers gold coast"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Programmers Gold Coast",
    description:
      "Gold Coast Excel programmers delivering custom spreadsheets, VBA automation and reporting tools backed by 25+ years of expertise.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.excelexperts.com.au/excel-programmers-gold-coast",
  },
};

export default function ExcelProgrammersGoldCoastLayout({ children }) {
  return <>{children}</>;
}
