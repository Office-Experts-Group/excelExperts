import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Excel Consultants Locations",
  description:
    "Microsoft Excel consulting services available across Australia. Remote support and on-site consultants in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra and more locations.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Excel Consultants Locations",
    description:
      "Microsoft Excel consulting services available across Australia. Remote support and on-site consultants in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra and more locations.",
    url: "https://www.excelexperts.com.au/locations",
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
    // Location-based
    "Microsoft Excel consultant locations Australia",
    "Excel VBA developers Australia",
    "Excel dashboard specialists",
    "Data analysis consultants Australia",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Excel Consultants Locations",
    description:
      "Microsoft Excel consulting services available across Australia. Remote support and on-site consultants in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra and more locations.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/locations",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
