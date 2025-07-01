import React from "react";

export const metadata = {
  // Basic metadata
  title: "Request a Quote | Excel Experts",
  description:
    "Request a detailed quote for your Excel project. Custom solutions, automation, and expert consulting from experienced developers.",

  // OpenGraph
  openGraph: {
    title: "Request a Quote | Excel Experts",
    description:
      "Request a detailed quote for your Excel project. Custom solutions, automation, and expert consulting from experienced developers.",
    url: "https://www.excelexperts.com.au/contact-us/request-a-quote",
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
    // Core Services
    "Microsoft Excel development quote",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Request a Quote | Excel Experts",
    description:
      "Request a detailed quote for your Excel project. Custom solutions, automation, and expert consulting from experienced developers.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.excelexperts.com.au/contact-us/request-a-quote",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
