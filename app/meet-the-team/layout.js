import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Meet Our Microsoft Excel Experts | Excel Specialists Australia",
  description:
    "Meet our team of certified Microsoft Excel developers, consultants, and trainers. Experts in spreadsheet development, analysis, and business solutions across Australia.",

  // OpenGraph
  openGraph: {
    title: "Meet Our Expert Excel Team | Excel Experts Australia",
    description:
      "Connect with our skilled team of Microsoft Excel specialists. Experts in spreadsheet development, data analysis, VBA programming, and business solutions.",
    url: "https://www.excelexperts.com.au/meet-the-team/",
    siteName: "Excel Experts",
    images: [
      {
        url: "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Excel Experts Team",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    // Team expertise
    "Microsoft Excel developers Australia",
    "Excel consultants",
    "Spreadsheet experts",
    "Microsoft certified Excel specialists",

    // Technical expertise
    "Data analysis experts",
    "VBA programming specialists",
    "Custom Excel solutions",
    "Spreadsheet automation consultants",

    // Service-related
    "Excel training team",
    "Data visualization specialists",
    "Excel dashboard developers",
    "Data migration experts",

    // Location-specific
    "Australian Excel consultants",
    "Microsoft Excel experts Sydney",
    "Excel specialists Melbourne",
    "Excel consultants Brisbane",

    // Skills-focused
    "Excel macro experts",
    "Data processing specialists",
    "Excel UI/UX designers",
    "Data security experts",

    // Professional qualities
    "Certified Excel developers",
    "Experienced Excel consultants",
    "Professional Excel team",
    "Expert data analysts",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Expert Excel Team | Excel Experts Australia",
    description:
      "Connect with our skilled team of Microsoft Excel specialists. Experts in spreadsheet development, data analysis, VBA programming, and business solutions.",
    images: [
      "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.excelexperts.com.au/meet-the-team/",
  robots: {
    index: true,
    follow: true,
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
