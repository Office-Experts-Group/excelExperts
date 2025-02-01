import React from "react";

export const metadata = {
  // Basic metadata
  title: "Request a Quote | Excel Experts",
  description:
    "Submit your Microsoft Excel project requirements, specifications, and files for a detailed quote. Our experienced Excel developers provide custom solutions, automation services, and spreadsheet consulting.",

  // OpenGraph
  openGraph: {
    title: "Request a Quote | Excel Experts",
    description:
      "Submit your Microsoft Excel project requirements, specifications, and files for a detailed quote. Our experienced Excel developers provide custom solutions, automation services, and spreadsheet consulting.",
    url: "https://www.excelexperts.com.au/contact-us/request-a-quote/",
  },

  // Additional metadata
  keywords: [
    // Core Services
    "Microsoft Excel development quote",
    // "Custom Excel solution development",

    // // Specific Solutions
    // "Excel Power Query integration quote",
    // "Excel workbook migration estimate",
    // "Excel cloud solution cost",
    // "VBA macro development pricing",

    // // Service-specific long tail
    // "Excel workbook upgrade consultation",
    // "Legacy spreadsheet migration quote",
    // "Excel SharePoint integration pricing",

    // // Support Services
    // "Excel workbook maintenance quote",
    // "Spreadsheet backup solution pricing",
  ],

  metadataBase: new URL("https://www.excelexperts.com.au"),
  alternates: {
    canonical: "/contact-us/request-a-quote",
    languages: {
      "en-AU": "/contact-us/request-a-quote",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
