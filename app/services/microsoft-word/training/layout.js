import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Excel-Word Integration Training | Data Management Training",
  description:
    "Our Excel integration experts provide comprehensive training on managing data flow between Excel and Word. Learn to automate data transfer, create dynamic reports, and optimize your spreadsheet-to-document workflow.",

  openGraph: {
    title: "Excel-Word Integration Training | Data Management Training",
    description:
      "Our Excel integration experts provide comprehensive training on managing data flow between Excel and Word. Learn to automate data transfer, create dynamic reports, and optimize your spreadsheet-to-document workflow.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/training/",
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
    // Core training services
    "excel integration training",
    "excel data management training",
    "spreadsheet automation training",
    "excel word integration",
    "excel consulting services",

    // Service types
    "remote excel training",
    "onsite excel training",
    "individual excel training",
    "group excel training",
    "excel data management help",

    // Location-specific
    "excel training australia",
    "spreadsheet consultants sydney",
    "excel training melbourne",
    "excel experts brisbane",
    "data management perth",

    // Service features
    "custom excel solutions",
    "spreadsheet troubleshooting",
    "data automation support",
    "excel integration assistance",
    "professional excel guidance",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel-Word Integration Training | Data Management Training",
    description:
      "Our Excel integration experts provide comprehensive training on managing data flow between Excel and Word. Learn to automate data transfer, create dynamic reports, and optimize your spreadsheet-to-document workflow.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/training/",
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
