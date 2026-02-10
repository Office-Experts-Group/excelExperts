import React from "react";

export const metadata = {
  title: "Excel Programmers Melbourne | Custom VBA & Macro Specialists",
  description:
    "Professional Excel programmers in Melbourne offering 25+ years expertise. Custom VBA solutions, spreadsheet development, macro automation and advanced formula creation.",

  openGraph: {
    title: "Excel Programmers Melbourne | Custom VBA & Macro Specialists",
    description:
      "Professional Excel programmers in Melbourne offering 25+ years expertise. Custom VBA solutions, spreadsheet development, macro automation and advanced formula creation.",
    url: "https://www.excelexperts.com.au/excel-programmers-melbourne",
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

  keywords: ["excel programmers melbourne"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Programmers Melbourne | Custom VBA & Macro Specialists",
    description:
      "Professional Excel programmers in Melbourne offering 25+ years expertise. Custom VBA solutions, spreadsheet development, macro automation and advanced formula creation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.excelexperts.com.au/excel-programmers-melbourne",
  },
};

export default function ExcelProgrammersMelbourneLayout({ children }) {
  return <>{children}</>;
}
