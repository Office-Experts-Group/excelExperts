import React from "react";

export const metadata = {
  // Basic metadata
  title: "Contact Us | Excel Experts",
  description:
    "Australia-wide Excel consulting, development, and support from expert professionals. Prompt, affordable service tailored to your needs.",

  // OpenGraph
  openGraph: {
    title: "Contact Us | Excel Experts",
    description:
      "Australia-wide Excel consulting, development, and support from expert professionals. Prompt, affordable service tailored to your needs.",
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
      "Australia-wide Excel consulting, development, and support from expert professionals. Prompt, affordable service tailored to your needs.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/contact-us",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
