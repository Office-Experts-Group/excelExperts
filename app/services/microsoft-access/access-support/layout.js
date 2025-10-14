import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Support and Training | Excel Experts",
  description:
    "Expert Microsoft Access database consultants providing remote and onsite support, troubleshooting, training, and maintenance services. Available Australia-wide.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Support and Training | Excel Experts",
    description:
      "Expert Microsoft Access database consultants providing remote and onsite support, troubleshooting, training, and maintenance services. Available Australia-wide.",
    url: "https://www.excelexperts.com.au/services/microsoft-access/access-support",
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
    // Core Access support services
    "Access database remote support services",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Access Support and Training | Excel Experts",
    description:
      "Expert Microsoft Access database consultants providing remote and onsite support, troubleshooting, training, and maintenance services. Available Australia-wide with competitive rates.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.accessexperts.com.au/access-support",
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
