import React from "react";

export const metadata = {
  title: "Excel Programmers Perth",
  description:
    "Perth Excel programmers helping businesses streamline operations with custom spreadsheets, VBA development and reporting solutions.",

  openGraph: {
    title: "Excel Programmers Perth",
    description:
      "Perth Excel programmers helping businesses streamline operations with custom spreadsheets, VBA development and reporting solutions.",
    url: "https://www.excelexperts.com.au/excel-programmers-perth",
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

  keywords: ["excel programmers perth"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Programmers Perth",
    description:
      "Perth Excel programmers helping businesses streamline operations with custom spreadsheets, VBA development and reporting solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.excelexperts.com.au/excel-programmers-perth",
  },
};

export default function ExcelProgrammersPerthLayout({ children }) {
  return <>{children}</>;
}
