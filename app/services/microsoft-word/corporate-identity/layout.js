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
  },

  keywords: [
    // Core services
    "microsoft word corporate templates",
  ],

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
