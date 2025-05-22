import React from "react";

export const metadata = {
  // Basic metadata
    title:
      "Microsoft Access Database Upgrades & Migration Services | Excel Experts",
    description:
      "Professional Microsoft Access database upgrade and migration services. Specialising in version upgrades, SQL Server migrations, cloud transitions, and performance optimisation.",

  // OpenGraph
  openGraph: {
    title:
      "Microsoft Access Database Upgrades & Migration Services | Excel Experts",
    description:
      "Professional Microsoft Access database upgrade and migration services. Specialising in version upgrades, SQL Server migrations, cloud transitions, and performance optimisation.",
    url: "https://www.excelexperts.com.au/services/microsoft-access/upgrades-and-migration/",
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
    // Core upgrade/migration services
    "Microsoft Access database migration services",
    "Microsoft Access upgrade solutions",
  ],

                                  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Microsoft Access Database Upgrades & Migration Services | Excel Experts",
    description:
      "Professional Microsoft Access database upgrade and migration services. Specialising in version upgrades, SQL Server migrations, cloud transitions, and performance optimisation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.accessexperts.com.au/upgrades-and-migration",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
