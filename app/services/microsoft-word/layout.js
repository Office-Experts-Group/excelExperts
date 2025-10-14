import React from "react";

export const metadata = {
  title: "Microsoft Word Services | Excel Experts",
  description:
    "Our Excel Experts team has a dedicated wing of Word design professionals who can help you with all aspects of your company's Word documents",

  openGraph: {
    title: "Microsoft Word Services | Excel Experts",
    description:
      "Our Excel Experts team has a dedicated wing of Word design professionals who can help you with all aspects of your company's Word documents.",
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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Word Services | Excel Experts",
    description:
      "Our Excel Experts team has a dedicated wing of Word design professionals who can help you with all aspects of your company's Word documents, excel, access and power platform integrations.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.wordexperts.com.au",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/services/microsoft-word",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
