import React from "react";

export const metadata = {
  title: "Excel Programmers Melbourne",
  description:
    "Melbourne Excel programmers trusted for advanced spreadsheet development, automation and data reporting solutions for growing businesses.",

  openGraph: {
    title: "Excel Programmers Melbourne",
    description:
      "Melbourne Excel programmers trusted for advanced spreadsheet development, automation and data reporting solutions for growing businesses.",
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
    title: "Excel Programmers Melbourne",
    description:
      "Melbourne Excel programmers trusted for advanced spreadsheet development, automation and data reporting solutions for growing businesses.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.excelexperts.com.au/excel-programmers-melbourne",
  },
};

export default function ExcelProgrammersMelbourneLayout({ children }) {
  return <>{children}</>;
}
