import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Excel Consultants Locations",
  description:
    "Excel consulting across Australia. Remote or on-site support in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, and more.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Excel Consultants Locations",
    description:
      "Excel consulting across Australia. Remote or on-site support in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, and more.",
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
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Excel Consultants Locations",
    description:
      "Excel consulting across Australia. Remote or on-site support in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, and more.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/locations",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
