import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Services | Access Experts",
  description:
    "Professional Microsoft Access database consulting and development services across Australia. Specialising in custom database solutions, cloud integration, and business automation.",

  keywords: [, "Access database migration", "Access database upgrade"],

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Solutions",
    description:
      "Professional Microsoft Access database consulting and development services across Australia. Specialising in custom database solutions, cloud integration, and business automation.",
    url: "https://www.accessexperts.com.au/upgrades-and-migration",
    siteName: "Access Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Access Solutions",
    description:
      "Professional Microsoft Access database consulting and development services across Australia. Specialising in custom database solutions, cloud integration, and business automation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.accessexperts.com.au",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-accessn",
        url: "https://www.excelexperts.com.au/services/microsoft-access",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
