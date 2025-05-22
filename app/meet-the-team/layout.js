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
    siteName: "Excel Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    // Team expertise
    "Microsoft Excel developers Australia",
  ],

                // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Meet Our Team | Excel Experts Australia",
    description:
      "Meet our team of certified Microsoft Excel developers, consultants, and trainers. Experts in spreadsheet development, analysis, and business solutions across Australia.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/meet-the-team",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
