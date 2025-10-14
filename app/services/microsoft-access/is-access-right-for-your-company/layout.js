import React from "react";

export const metadata = {
  // Basic metadata
  title: "Is Microsoft Access Right for your Company? |  Access Experts",
  description:
    "Expert guidance on whether Microsoft Access is the right database solution for your business needs. We specialise in data management, structuring, multi-user systems, and reporting solutions.",

  // OpenGraph
  openGraph: {
    title: "Is Microsoft Access Right for Your Business? | Access Experts",
    description:
      "Expert guidance on whether Microsoft Access is the right database solution for your business needs. We specialise in data management, structuring, multi-user systems, and reporting solutions.",
    url: "https://www.excelexperts.com.au/services/microsoft-access/is-access-right-for-your-company",
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
    // Core Access database services
    "Access database compatibility assessment",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Is Microsoft Access Right for Your Business? | Access Experts",
    description:
      "Expert guidance on whether Microsoft Access is the right database solution for your business needs. We specialise in data management, structuring, multi-user systems, and reporting solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.accessexperts.com.au/is-access-right-for-your-company",
    alternate: [
      {
        url: "https://www.excelxperts.com.au/services/microsoft-access/is-access-right-for-your-company",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
