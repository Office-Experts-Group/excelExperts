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
  },

  keywords: [
    // Core services
    "Excel-Word template integration and conversions",
  ],

  alternates: {
    canonical: "https://wordexperts.com.au/word-template-conversions",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
