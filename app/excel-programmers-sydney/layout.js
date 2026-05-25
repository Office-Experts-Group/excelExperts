import React from "react";

export const metadata = {
  title: "Excel Programmers Sydney",
  description:
    "Sydney Excel programmers with 25+ years of experience delivering custom spreadsheets, automation and business reporting solutions.",

  openGraph: {
    title: "Excel Programmers Sydney",
    description:
      "Sydney Excel programmers with 25+ years of experience delivering custom spreadsheets, automation and business reporting solutions.",
    url: "https://www.excelexperts.com.au/excel-programmers-sydney",
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

  keywords: ["excel programmers sydney"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Programmers Sydney | Excel Experts",
    description:
      "Sydney Excel programmers with 25+ years of experience delivering custom spreadsheets, automation and business reporting solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.excelexperts.com.au/excel-programmers-sydney",
  },
};

export default function ExcelProgrammersSydneyLayout({ children }) {
  return <>{children}</>;
}
