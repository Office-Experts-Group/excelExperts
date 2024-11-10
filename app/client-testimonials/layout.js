import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Client Testimonials | Excel Experts Australia",
  description:
    "Read what our clients say about their experience with Excel Experts. Discover how we've helped businesses across Australia optimize their Excel workflows and improve efficiency.",

  // OpenGraph
  openGraph: {
    title: "Client Testimonials | Excel Experts Australia",
    description:
      "Read trusted reviews and success stories from businesses we've helped with Excel solutions across Australia. Professional Excel consulting and development services.",
    url: "https://www.excelexperts.com.au/client-testimonials/",
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
    type: "article",
  },

  // Core keywords focused on testimonials and trust
  keywords: [
    "Excel consultants reviews Australia",
    "Excel development testimonials",
    "Excel experts client feedback",
    "Excel consulting case studies",
    "Excel automation success stories",
    "Microsoft Excel consultant reviews",
    "Excel development project examples",
    "Excel solutions testimonials",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | Excel Experts Australia",
    description:
      "Read trusted reviews and success stories from businesses we've helped with Excel solutions across Australia.",
    images: [
      "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.excelexperts.com.au/client-testimonials/",
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
