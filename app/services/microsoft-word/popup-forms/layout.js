import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title:
    "Excel-Integrated Popup Forms | Data-Driven Form Solutions | Excel Experts",
  description:
    "Our Excel integration experts deliver popup forms that seamlessly connect with your spreadsheet data, enhancing data entry processes, improving accuracy, and streamlining Excel-to-Word workflows while saving your business money.",

  openGraph: {
    title: "Excel-Integrated Popup Forms | Data-Driven Form Solutions",
    description:
      "Our Excel integration experts deliver popup forms that seamlessly connect with your spreadsheet data, enhancing data entry processes, improving accuracy, and streamlining Excel-to-Word workflows while saving your business money.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/popup-forms/",
    siteName: "Excel Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Excel Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  keywords: [
    // Core popup form services
    "excel integrated forms",
    "data-driven popup forms",
    "excel form automation",
    "spreadsheet data forms",
    "excel popup integration",

    // Features and benefits
    "spreadsheet data validation",
    "excel automation tools",
    "automated data entry",
    "excel workflow solutions",
    "spreadsheet productivity tools",

    // Service-specific
    "excel form integration",
    "data automation consulting",
    "excel popup development",
    "spreadsheet automation",
    "data template design",

    // Business focus
    "business data solutions",
    "excel template automation",
    "spreadsheet efficiency",
    "data entry optimization",
    "excel quality control",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel-Integrated Popup Forms | Data-Driven Form Solutions",
    description:
      "Our Excel integration experts deliver popup forms that seamlessly connect with your spreadsheet data, enhancing data entry processes, improving accuracy, and streamlining Excel-to-Word workflows while saving your business money.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/popup-forms/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

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
