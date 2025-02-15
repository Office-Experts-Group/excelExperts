import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Database Upgrades and Migration - Excel Experts",
  description:
    "Expert Microsoft Access database upgrade and migration services. Our specialists ensure smooth transitions, resolve compatibility issues, and optimize database performance with minimal disruption.",

  // OpenGraph
  openGraph: {
    title:
      "Microsoft Access Database Upgrades & Migration Services | Excel Experts",
    description:
      "Professional Microsoft Access database upgrade and migration services. Specialising in version upgrades, SQL Server migrations, cloud transitions, and performance optimization.",
    url: "https://www.excelexperts.com.au/services/microsoft-access/upgrades-and-migration/",
  },

  // Additional metadata
  keywords: [
    // Core upgrade/migration services
    "Microsoft Access database migration services",
    "Microsoft Access upgrade solutions",
  ],
  alternates: {
    canonical: "https://accessexperts.com.au/upgrades-and-migration",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
