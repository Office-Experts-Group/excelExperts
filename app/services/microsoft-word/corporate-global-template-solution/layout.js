import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Excel-Integrated Corporate Word Solutions",
  description:
    "Advanced Corporate Template Solution combining Excel data automation with Word templates. Create professional documents that automatically pull from your Excel data while maintaining consistent formatting and branding.",

  openGraph: {
    title: "Excel-Integrated Corporate Word Solutions",
    description:
      "Advanced Corporate Template Solution combining Excel data automation with Word templates. Create professional documents that automatically pull from your Excel data while maintaining consistent formatting and branding.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/corporate-global-template-solution/",
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
    // Core services
    "excel word integration",
    "excel data automation",
    "corporate excel templates",
    "excel reporting solutions",
    "integrated template design",

    // Features
    "excel data extraction",
    "automated report generation",
    "spreadsheet integration",
    "data consistency control",
    "excel word synchronization",

    // Benefits
    "improved reporting efficiency",
    "automated data updates",
    "excel report standardization",
    "data formatting consistency",
    "integrated document workflow",

    // Use cases
    "financial report automation",
    "excel data management",
    "automated document creation",
    "spreadsheet reporting",
    "excel template integration",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel-Integrated Corporate Word Solutions",
    description:
      "Advanced Corporate Template Solution combining Excel data automation with Word templates. Create professional documents that automatically pull from your Excel data while maintaining consistent formatting and branding.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/corporate-global-template-solution/",
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
