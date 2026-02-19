import React from "react";

export const metadata = {
  title: "Excel Programmers Gold Coast",
  description:
    "Gold Coast's experienced Excel programmers with 25+ years expertise. Backed with a nationwide team of Microsoft experts. Contact us now for a free consultation.",

  openGraph: {
    title: "Excel Programmers Gold Coast",
    description:
      "Gold Coast's experienced Excel programmers with 25+ years expertise. Backed with a nationwide team of Microsoft experts. Contact us now for a free consultation.",
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
      "Gold Coast's experienced Excel programmers with 25+ years expertise. Backed with a nationwide team of Microsoft experts. Contact us now for a free consultation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.excelexperts.com.au/excel-programmers-gold-coast",
  },
};

export default function ExcelProgrammersGoldCoastLayout({ children }) {
  return <>{children}</>;
}
