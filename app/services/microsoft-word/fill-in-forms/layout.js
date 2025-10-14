import React from "react";

export const metadata = {
  title: "Excel-Integrated Form Solutions | Excel Experts",
  description:
    "Expert form design services combining Excel data management with Word forms. Specialising in creating data-driven forms with automated Excel integration.",
  openGraph: {
    title: "Excel-Integrated Form Solutions | Excel Experts",
    description:
      "Expert form design services combining Excel data management with Word forms. Specialising in creating data-driven forms with automated Excel integration.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/fill-in-forms",
    siteName: "Excel Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  keywords: ["word fill in forms"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel-Integrated Form Solutions | Excel Experts",
    description:
      "Expert form design services combining Excel data management with Word forms. Specialising in creating data-driven forms with automated Excel integration, spreadsheet synchronization, and advanced VBA solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.wordexperts.com.au/fill-in-forms",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/services/microsoft-word/fill-in-forms",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
