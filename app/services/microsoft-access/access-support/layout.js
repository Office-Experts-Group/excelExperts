import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Support and Training | Excel Experts",
  description:
    "Expert Microsoft Access database consultants providing remote and onsite support, troubleshooting, training, and maintenance services. Available Australia-wide with competitive rates.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Support & Training | Excel Experts",
    description:
      "Professional Microsoft Access database support and training services. Remote or onsite assistance for database issues, custom training, and expert consultancy.",
    url: "https://www.excelexperts.com.au/services/microsoft-access/access-support",
  },

  // Additional metadata
  keywords: [
    // Core Access support services
    "Access database remote support services",
  ],
  alternates: {
    canonical: "https://accessexperts.com.au/access-support",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-access/access-support",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
