import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title:
    "Word Design Services | Excel-Integrated Templates | Data-Driven Design Solutions",
  description:
    "Excel Experts specialize in converting your existing documents into smart, data-integrated Word templates. Our solutions combine Excel's powerful data handling with Word's document capabilities for automated, professional results.",

  openGraph: {
    title: "Word Template Conversions | Excel-Integrated Design Services",
    description:
      "Transform your documents into smart, data-driven Word templates with Excel integration. Our expert team combines Excel's analytical power with Word's document capabilities for automated, professional results.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/word-template-conversions/",
    siteName: "Excel Experts Group",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Excel Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  keywords: [
    // Core services
    "Excel-Word template integration",
    "data-driven Word templates",
    "Excel-powered document design",
    "spreadsheet to Word conversion",
    "automated document templates",

    // Service-specific
    "Excel data integration services",
    "dynamic Word templates",
    "automated document solutions",
    "smart Word templates",
    "data-linked Word templates",

    // Location-based
    "Excel-Word integration Australia",
    "data template services Sydney",
    "automated document solutions Melbourne",
    "Excel-Word experts Brisbane",

    // Business focus
    "business intelligence templates",
    "automated corporate documents",
    "data-driven document design",
    "integrated template solutions",
    "Excel-Word automation",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@ExcelExpertsAU",
    title: "Word Template Conversions | Excel-Integrated Design Services",
    description:
      "Transform your documents into smart, data-driven Word templates with Excel integration. Our expert team combines Excel's analytical power with Word's document capabilities for automated, professional results.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/word-template-conversions/",

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
