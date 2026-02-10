import React from "react";

export const metadata = {
  title: "Excel Programmers Sydney | VBA & Macro Development Experts",
  description:
    "Expert Excel programmers in Sydney with 25+ years of experience. Specialising in VBA macro development, custom automation, spreadsheet solutions and formula development.",

  openGraph: {
    title: "Excel Programmers Sydney | VBA & Macro Development Experts",
    description:
      "Expert Excel programmers in Sydney with 25+ years of experience. Specialising in VBA macro development, custom automation, spreadsheet solutions and formula development.",
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
    title:
      "Excel Programmers Sydney | VBA & Macro Development Experts | Excel Experts",
    description:
      "Expert Excel programmers in Sydney with 25+ years of experience. Specialising in VBA macro development, custom automation, spreadsheet solutions and formula development.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.excelexperts.com.au/excel-programmers-sydney",
  },
};

export default function ExcelProgrammersSydneyLayout({ children }) {
  return <>{children}</>;
}
