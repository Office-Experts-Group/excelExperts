import React from "react";

export const metadata = {
  title: "Government Excel-Word Integration Solutions | Excel Experts",
  description:
    "Expert Excel and Word integration services for government departments. specialising in data automation, spreadsheet integration, and accessible reporting solutions for state and federal agencies.",

  openGraph: {
    title: "Government Excel-Word Integration Solutions | Excel Experts",
    description:
      "Expert Excel and Word integration services for government departments. specialising in data automation, spreadsheet integration, and accessible reporting solutions for state and federal agencies.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/government-departments",
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

  keywords: ["government department data solutions"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Government Excel-Word Integration Solutions | Excel Experts",
    description:
      "Expert Excel and Word integration services for government departments. specialising in data automation, spreadsheet integration, and accessible reporting solutions for state and federal agencies.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.wordexperts.com.au/government-departments",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/services/microsoft-word/government-departments",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
