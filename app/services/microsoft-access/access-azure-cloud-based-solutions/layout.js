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
    // Core Azure/Access integration
    "Microsoft Access Azure integration",
  ],

                                        // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Access & Azure Cloud Based Database Solutions | Access Experts",
    description:
      "Expert Microsoft Access and Azure integration services for cloud-based database solutions. Custom Access database development with Azure SQL Server hosting for secure, scalable, and accessible data management.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.accessexperts.com.au/access-azure-cloud-based-solutions",
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
