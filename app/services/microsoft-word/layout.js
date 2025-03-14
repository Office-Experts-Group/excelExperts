import React from "react";

export const metadata = {
  title: "Microsoft Word Services | Excel Experts",
  description:
    "Our Excel Experts team has a dedicated wing of Word design professionals who can help you with all aspects of your company's Word documents, excel, access and power platform integrations.",

  openGraph: {
    title: "Microsoft Word Services | Excel Experts",
    description:
      "Our Excel Experts team has a dedicated wing of Word design professionals who can help you with all aspects of your company's Word documents, excel, access and power platform integrations.",
    url: "https://www.excelexperts.com.au/services/microsoft-word",
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

  keywords: ["Microsoft Word and Excel Integration"],

  alternates: {
    canonical:
      "https://www.wordexperts.com.au/word-document-template-conversions",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-word/word-document-template-conversions",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
