import React from "react";

export const metadata = {
  // Basic metadata
  title: "Access & Azure Cloud Based Database Solutions | Access Experts",
  description:
    "Expert Microsoft Access and Azure integration services for cloud-based database solutions. Custom Access database development with Azure SQL Server hosting for secure, scalable, and accessible data management.",

  // OpenGraph
  openGraph: {
    title: "Access & Azure Cloud Based Database Solutions | Access Experts",
    description:
      "Expert Microsoft Access and Azure integration services for cloud-based database solutions. Custom Access database development with Azure SQL Server hosting for secure, scalable, and accessible data management.",
    url: "https://www.excelexperts.com.au/services/microsoft-access/access-azure-cloud-based-solutions",
  },

  // Additional metadata
  keywords: [
    // Core Azure/Access integration
    "Microsoft Access Azure integration",
  ],
  alternates: {
    canonical:
      "https://accessexperts.com.au/access-azure-cloud-based-solutions",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-access/access-azure-cloud-based-solutions",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
