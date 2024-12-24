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
  },

  // Core keywords focused on testimonials and trust
  keywords: [
    "Excel consultants reviews Australia",
    // "Excel development testimonials",
    // "Excel experts client feedback",
    // "Excel consulting case studies",
    // "Excel automation success stories",
    // "Microsoft Excel consultant reviews",
    // "Excel development project examples",
    // "Excel solutions testimonials",
  ],
  canonical: "https://www.excelexperts.com.au/client-testimonials/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
