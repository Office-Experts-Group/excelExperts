import React from "react";

export const metadata = {
  title: "Data Automation Solutions | Excel Experts",
  description:
    "Our Excel-Word integration solutions automate data transfer between spreadsheets and documents. We streamline your workflow by eliminating repetitive data entry and ensuring consistent data flow across platforms.",

  openGraph: {
    title: "Data Automation Solutions | Excel Experts",
    description:
      "Our Excel-Word integration solutions automate data transfer between spreadsheets and documents. We streamline your workflow by eliminating repetitive data entry and ensuring consistent data flow across platforms.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity",
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

  keywords: ["Miocrosoft Word automation"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Data Automation Solutions | Excel Experts",
    description:
      "Our Excel-Word integration solutions automate data transfer between spreadsheets and documents. We streamline your workflow by eliminating repetitive data entry and ensuring consistent data flow across platforms.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.wordexperts.com.au/remove-repetition-and-increase-productivity",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/services/microsoft-word/remove-repetition-and-increase-productivity",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
