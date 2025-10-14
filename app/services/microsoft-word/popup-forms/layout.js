import React from "react";

export const metadata = {
  title: "Excel-Integrated Popup Forms | Excel Experts",
  description:
    "Our Excel integration experts deliver popup forms that seamlessly connect with your spreadsheet data, enhancing data entry processes, improving accuracy, and streamlining Excel-to-Word workflows.",
  openGraph: {
    title: "Excel-Integrated Popup Forms | Excel Experts",
    description:
      "Our Excel integration experts deliver popup forms that seamlessly connect with your spreadsheet data, enhancing data entry processes, improving accuracy, and streamlining Excel-to-Word workflows.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/popup-forms",
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

  keywords: ["microsoft word popup forms"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel-Integrated Popup Forms | Excel Experts",
    description:
      "Our Excel integration experts deliver popup forms that seamlessly connect with your spreadsheet data, enhancing data entry processes, improving accuracy, and streamlining Excel-to-Word workflows while saving your business money.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.wordexperts.com.au/popup-forms",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/services/microsoft-word/popup-forms",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
