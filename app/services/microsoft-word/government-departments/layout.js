import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Government Excel-Word Integration Solutions",
  description:
    "Expert Excel and Word integration services for government departments. Specializing in data automation, spreadsheet integration, and accessible reporting solutions for state and federal agencies.",

  openGraph: {
    title: "Government Excel-Word Integration Solutions",
    description:
      "Expert Excel and Word integration services for government departments. Specializing in data automation, spreadsheet integration, and accessible reporting solutions for state and federal agencies.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/government-departments/",
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
    // Core government services
    "government excel integration",
    "government data automation",
    "federal data management",
    "state government excel solutions",
    "government spreadsheet automation",

    // Service-specific
    "government data analysis",
    "excel reporting automation",
    "government data compliance",
    "automated government reports",
    "excel data integration",

    // Location-based
    "australian government excel services",
    "federal department data solutions",
    "state department excel automation",

    // Technical aspects
    "government data accessibility",
    "spreadsheet management",
    "government data standards",
    "compliant data processing",
    "automated report formatting",

    // Specific solutions
    "government excel templates",
    "data automation systems",
    "excel reporting controls",
    "automated data extraction",
    "government spreadsheet consistency",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Government Excel-Word Integration Solutions",
    description:
      "Expert Excel and Word integration services for government departments. Specializing in data automation, spreadsheet integration, and accessible reporting solutions for state and federal agencies.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/government-departments/",
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
