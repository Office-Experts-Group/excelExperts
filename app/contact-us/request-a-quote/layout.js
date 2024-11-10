import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Request a Quote – Excel Experts – Microsoft Excel Development",
  description:
    "Submit your Microsoft Excel project requirements, specifications, and files for a detailed quote. Our experienced Excel developers provide custom solutions, automation services, and spreadsheet consulting.",

  // OpenGraph
  openGraph: {
    title: "Request a Quote for Microsoft Excel Services",
    description:
      "Get a customized quote for your Microsoft Excel needs. From development and automation to troubleshooting and upgrades - our experts deliver tailored solutions with competitive pricing.",
    url: "https://www.excelexperts.com.au/contact-us/request-a-quote/",
    siteName: "Excel Experts",
    images: [
      {
        url: "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Excel Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    // Core Services
    "Microsoft Excel development quote",
    "Custom Excel solution development",

    // Specific Solutions
    "Excel Power Query integration quote",
    "Excel workbook migration estimate",
    "Excel cloud solution cost",
    "VBA macro development pricing",

    // Service-specific long tail
    "Excel workbook upgrade consultation",
    "Legacy spreadsheet migration quote",
    "Excel SharePoint integration pricing",

    // Support Services
    "Excel workbook maintenance quote",
    "Spreadsheet backup solution pricing",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote for Microsoft Excel Services",
    description:
      "Get a customized quote for your Microsoft Excel needs. From development and automation to troubleshooting and upgrades - our experts deliver tailored solutions with competitive pricing.",
    images: [
      "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.excelexperts.com.au/contact-us/request-a-quote/",
  robots: {
    index: false,
    follow: false,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
