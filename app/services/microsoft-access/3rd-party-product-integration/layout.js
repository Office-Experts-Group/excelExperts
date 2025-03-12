import React from "react";

export const metadata = {
  // Basic metadata
  title: "3rd Party Product Integration | Access Experts",
  description:
    "Professional Microsoft Access integration services connecting your databases with CRMs, accounting software, and third-party applications. Competitive pricing and expert consultation.",

  // OpenGraph
  openGraph: {
    title: "3rd Party Product Integration | Access Experts",
    description:
      "Professional Microsoft Access integration services connecting your databases with CRMs, accounting software, and third-party applications. Competitive pricing and expert consultation.",
    url: "https://www.excelexperts.com.au/services/microsoft-access/3rd-party-product-integration",
  },

  // Additional metadata
  keywords: [
    // Integration-specific long tail
    "Microsoft Access CRM integration solutions",
  ],
  alternates: {
    canonical: "https://www.accessexperts.com.au/3rd-party-product-integration",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-access/3rd-party-product-integration",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
