import React from "react";

export const metadata = {
  // Basic metadata
  title: "Meet Our Team | Excel Experts Australia",
  description:
    "Meet our team of certified Microsoft Excel developers, consultants, and trainers. Experts in spreadsheet development, analysis, and business solutions across Australia.",

  // OpenGraph
  openGraph: {
    title: "Meet Our Team | Excel Experts Australia",
    description:
      "Meet our team of certified Microsoft Excel developers, consultants, and trainers. Experts in spreadsheet development, analysis, and business solutions across Australia.",
    url: "https://www.excelexperts.com.au/meet-the-team",
  },

  // Additional metadata
  keywords: [
    // Team expertise
    "Microsoft Excel developers Australia",
    // "Excel consultants",
    // "Spreadsheet experts",
    // "Microsoft certified Excel specialists",

    // // Technical expertise
    // "Data analysis experts",
    // "VBA programming specialists",
    // "Custom Excel solutions",
    // "Spreadsheet automation consultants",

    // // Service-related
    // "Excel training team",
    // "Data visualization specialists",
    // "Excel dashboard developers",
    // "Data migration experts",

    // // Location-specific
    // "Australian Excel consultants",
    // "Microsoft Excel experts Sydney",
    // "Excel specialists Melbourne",
    // "Excel consultants Brisbane",

    // // Skills-focused
    // "Excel macro experts",
    // "Data processing specialists",
    // "Excel UI/UX designers",
    // "Data security experts",

    // // Professional qualities
    // "Certified Excel developers",
    // "Experienced Excel consultants",
    // "Professional Excel team",
    // "Expert data analysts",
  ],

  alternates: {
    canonical: "/meet-the-team",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
