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
  },

  // Additional metadata
  keywords: [
    // Core Access database services
    "Access database compatibility assessment",
    // "Microsoft Access database consultation",
    // "Custom Access database development",
    // "Multi-user Access database solutions",

    // // Specific solution keywords
    // "Access data management systems",
    // "Access database structure optimization",
    // "Microsoft Access reporting tools",
    // "Access database user management",

    // // Integration-focused
    // "Access SQL Server integration solutions",
    // "Access SharePoint connectivity",
    // "Access Azure cloud integration",
    // "Access Office 365 integration",

    // // Business-specific long tail
    // "Access database migration assessment",
    // "Access business process automation",
    // "Access inventory management systems",
    // "Access customer database solutions",

    // // Technical specifics
    // "Access VBA development consulting",
    // "Access database performance optimization",
    // "Access multi-location data access",
    // "Access database security solutions",

    // // Industry-focused
    // "Access financial reporting systems",
    // "Access project management databases",
    // "Access CRM database solutions",
    // "Access workflow automation systems",
  ],
  alternates: {
    canonical: "https://accessexperts.com.au/is-access-right-for-your-company",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-access/is-access-right-for-your-company",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
