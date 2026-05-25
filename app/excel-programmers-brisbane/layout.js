import React from "react";

export const metadata = {
  title: "Excel Programmers Brisbane",
  description:
    "Brisbane Excel programming specialists creating powerful business spreadsheets, dashboards and automation solutions for Australian companies.",

  openGraph: {
    title: "Excel Programmers Brisbane",
    description:
      "Brisbane Excel programming specialists creating powerful business spreadsheets, dashboards and automation solutions for Australian companies.",
    url: "https://www.excelexperts.com.au/excel-programmers-brisbane",
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

  keywords: ["excel programmers brisbane"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Programmers Brisbane",
    description:
      "Brisbane Excel programming specialists creating powerful business spreadsheets, dashboards and automation solutions for Australian companies.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.excelexperts.com.au/excel-programmers-brisbane",
  },
};

export default function ExcelProgrammersBrisbaneLayout({ children }) {
  return <>{children}</>;
}
