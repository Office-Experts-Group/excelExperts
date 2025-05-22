import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Services | Access Experts",
  description:
    "Professional Microsoft Access database consulting and development services across Australia. Specialising in custom database solutions, cloud integration, and business automation.",

  keywords: [, "Access database migration", "Access database upgrade"],

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Database Upgrades & Migration Services",
    description:
      "Expert Microsoft Access database upgrade and migration services. Our specialists ensure smooth transitions, resolve compatibility issues, and optimise database performance with minimal disruption.",
    url: "https://www.excelexperts.com.au/services/microsoft-access/upgrades-and-migration",
    siteName: "Excel Experts",
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
        title: "Microsoft Access Database Upgrades & Migration Services",
    description:
      "Expert Microsoft Access database upgrade and migration services. Our specialists ensure smooth transitions, resolve compatibility issues, and optimise database performance with minimal disruption.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.excelexperts.com.au/services/microsoft-access/upgrades-and-migration",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-access/upgrades-and-migration",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
