import React from "react";

export const metadata = {
  // Basic metadata
  title: "Contact Us | Excel Experts",
  description:
    "Contact our Microsoft Excel experts for consulting, development, and support services. Available for projects across Australia with competitive pricing and prompt service.",

  // OpenGraph
  openGraph: {
    title: "Contact Us | Excel Experts",
    description:
      "Get in touch with our Microsoft Excel specialists for custom solutions, automation, support, and consulting services across Australia.",
    url: "https://www.excelexperts.com.au/contact-us",
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
    // Core Excel services
    "Microsoft Excel consultant contact",
  ],

        // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Contact Us | Excel Experts",
    description:
      "Get in touch with our Microsoft Excel specialists for custom solutions, automation, support, and consulting services across Australia.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/contact-us",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
