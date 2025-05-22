import React from "react";

export const metadata = {
  title: "Excel-Integrated Corporate Templates | Excel Experts",
  description:
    "Our Excel integration experts deliver Word templates that automatically populate with your spreadsheet data while maintaining consistent formatting and protecting your corporate identity.",

  openGraph: {
    title: "Excel-Integrated Corporate Identity Solutions | Excel Experts",
    description:
      "Professional template solutions combining Excel data integration with Word formatting protection. Automate document creation while maintaining corporate identity.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/corporate-identity",
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

  keywords: [
    // Core services
    "microsoft word corporate templates",
  ],

                                                  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel-Integrated Corporate Identity Solutions | Excel Experts",
    description:
      "Professional template solutions combining Excel data integration with Word formatting protection. Automate document creation while maintaining corporate identity.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.wordexperts.com.au/corporate-identity",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-word/corporate-identity",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
