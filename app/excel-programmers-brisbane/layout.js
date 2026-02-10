import React from "react";

export const metadata = {
  title: "Excel Programmers Brisbane | VBA Development & Automation Experts",
  description:
    "Brisbane's leading Excel programmers with 25+ years expertise. Streamline your business workflows with our local VBA experts. Contact us now for a free consultation.",

  openGraph: {
    title: "Excel Programmers Brisbane | VBA Development & Automation Experts",
    description:
      "Brisbane's leading Excel programmers with 25+ years expertise. Streamline your business workflows with our local VBA experts. Contact us now for a free consultation.",
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
    title: "Excel Programmers Brisbane | VBA Development & Automation Experts",
    description:
      "Brisbane's leading Excel programmers with 25+ years expertise. Streamline your business workflows with our local VBA experts. Contact us now for a free consultation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.excelexperts.com.au/excel-programmers-brisbane",
  },
};

export default function ExcelProgrammersBrisbaneLayout({ children }) {
  return <>{children}</>;
}
