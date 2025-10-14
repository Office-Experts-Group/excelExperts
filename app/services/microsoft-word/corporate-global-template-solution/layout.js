import React from "react";

export const metadata = {
  title: "Excel-Integrated Corporate Word Solutions | Excel Experts",
  description:
    "In partnership with Word Experts, we create professional documents that automatically pull from your Excel data while maintaining consistent formatting and branding.",

  openGraph: {
    title: "Excel-Integrated Corporate Word Solutions | Excel Experts",
    description:
      "In partnership with Word Experts, we create professional documents that automatically pull from your Excel data while maintaining consistent formatting and branding.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/corporate-global-template-solution",
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

  keywords: ["corporate Microsoft word templates"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel-Integrated Corporate Word Solutions | Excel Experts",
    description:
      "In partnership with Word Experts, we create professional documents that automatically pull from your Excel data while maintaining consistent formatting and branding.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.wordexperts.com.au/corporate-global-template-solution",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/services/microsoft-word/corporate-global-template-solution",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
