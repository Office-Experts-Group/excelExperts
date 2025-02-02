import React from "react";

export const metadata = {
  // Basic metadata
  title: "Contact Us | Excel Experts",
  description:
    "Contact our Microsoft Excel experts for consulting, development, and support services. Available for projects across Australia with competitive pricing and prompt service.",

  // OpenGraph
  openGraph: {
    title: "Contact Us | Excel Experts",
    description:
      "Get in touch with our Microsoft Excel specialists for custom solutions, automation, support, and consulting services across Australia.",
    url: "https://www.excelexperts.com.au/contact-us",
  },

  // Additional metadata
  keywords: [
    // Core Excel services
    "Microsoft Excel consultant contact",
    // "Excel VBA expert inquiry",
    // "Spreadsheet development quote",

    // // Service-specific long tail
    // "Microsoft Excel automation consulting",
    // "Custom dashboard development quote",
    // "Spreadsheet optimization specialist contact",
    // "Excel macro programming consultation",
    // "Workbook upgrade assessment request",

    // // Specific solutions
    // "Excel Power Query integration quote",
    // "Spreadsheet repair inquiry",
    // "Excel cloud solution contact",
    // "Multi-user workbook setup consultation",
    // "Excel SharePoint integration quote",

    // // Support-specific
    // "Excel spreadsheet emergency support",
    // "Formula optimization contact",
    // "Excel troubleshooting consultation",
    // "Spreadsheet maintenance quote request",
    // "Excel version upgrade assessment",

    // // Business process
    // "Excel workflow automation quote",
    // "Custom reporting solutions inquiry",
    // "Spreadsheet security audit request",
    // "Excel data migration consultation",
    // "Legacy workbook modernization quote",
  ],
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
