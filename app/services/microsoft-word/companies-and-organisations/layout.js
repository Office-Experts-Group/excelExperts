import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Companies and Organizations | Excel-Integrated Word Solutions",
  description:
    "Leverage our Excel expertise to create integrated Word templates that seamlessly connect with your spreadsheet data. Our solutions combine Excel automation with Word document generation for streamlined corporate reporting.",

  openGraph: {
    title: "Companies and Organizations | Excel-Integrated Word Solutions",
    description:
      "Expert team delivering Excel-integrated Word templates for companies. Automate document generation from Excel data while maintaining corporate identity standards.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/companies-and-organisations/",
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
    type: "article",
  },

  keywords: [
    "excel word integration",
    "excel data automation",
    "spreadsheet document generation",
    "excel reporting templates",
    "automated financial reports",
    "excel word template design",
    "data-driven documents",
    "corporate reporting automation",
    "excel document formatting",
    "spreadsheet integration",
    "excel template consulting",
    "financial document automation",
    "excel reporting solutions",
    "spreadsheet document control",
    "excel data management",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Companies and Organizations | Excel-Integrated Word Solutions",
    description:
      "Expert team delivering Excel-integrated Word templates for companies. Automate document generation from Excel data while maintaining corporate identity standards.",
    images: ["/logo.png"],
  },

  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/companies-and-organisations/",
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
