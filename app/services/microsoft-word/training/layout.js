import React from "react";

export const metadata = {
  title: "Excel-Word Integration Training | Excel Experts",
  description:
    "Our Excel integration experts provide comprehensive training on managing data flow between Excel and Word. Learn to automate data transfer, create dynamic reports, and optimise your spreadsheet-to-document workflow.",

  openGraph: {
    title: "Excel-Word Integration Training | Excel Experts",
    description:
      "Our Excel integration experts provide comprehensive training on managing data flow between Excel and Word. Learn to automate data transfer, create dynamic reports, and optimise your spreadsheet-to-document workflow.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/training",
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
    // Core training services
    "Microsoft Word integration training",
  ],
  alternates: {
    canonical: "https://wordexperts.com.au/training",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-word/training",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
