import React from "react";

export const metadata = {
  title:
    "Word Design Services | Excel-Integrated Templates | Data-Driven Design Solutions",
  description:
    "Excel Experts specialise in converting your existing documents into smart, data-integrated Word templates. Our solutions combine Excel's powerful data handling with Word's document capabilities for automated, professional results.",

  openGraph: {
    title: "Word Template Conversions | Excel-Integrated Design Services",
    description:
      "Transform your documents into smart, data-driven Word templates with Excel integration. Our expert team combines Excel's analytical power with Word's document capabilities for automated, professional results.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/word-template-conversions/",
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
    "Excel-Word template integration and conversions",
  ],

                                                                      // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Template Conversions | Excel-Integrated Design Services",
    description:
      "Transform your documents into smart, data-driven Word templates with Excel integration. Our expert team combines Excel's analytical power with Word's document capabilities for automated, professional results.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.wordexperts.com.au/word-template-conversions",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
