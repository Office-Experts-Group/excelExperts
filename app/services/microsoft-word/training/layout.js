import React from "react";

export const metadata = {
  title: "Excel-Word Integration Training | Excel Experts",
  description:
    "Our Excel integration experts provide comprehensive training on managing data flow between Excel and Word. Learn to automate data transfer, create dynamic reports, and optimise your spreadsheet-to-document workflow.",

  openGraph: {
    title: "Excel-Word Integration Training | Excel Experts",
    description:
      "Our Excel integration experts provide comprehensive training on managing data flow between Excel and Word. Learn to automate data transfer, create dynamic reports, and optimise your spreadsheet-to-document workflow.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/training/",
  },

  keywords: [
    // Core training services
    "Microsoft Word integration training",
    // "excel data management training",
    // "spreadsheet automation training",
    // "excel word integration",
    // "excel consulting services",

    // // Service types
    // "remote excel training",
    // "onsite excel training",
    // "individual excel training",
    // "group excel training",
    // "excel data management help",

    // // Location-specific
    // "excel training australia",
    // "spreadsheet consultants sydney",
    // "excel training melbourne",
    // "excel experts brisbane",
    // "data management perth",

    // // Service features
    // "custom excel solutions",
    // "spreadsheet troubleshooting",
    // "data automation support",
    // "excel integration assistance",
    // "professional excel guidance",
  ],

  metadataBase: new URL("https://www.excelexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-word/training",
    languages: {
      "en-AU": "/services/microsoft-word/training",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
