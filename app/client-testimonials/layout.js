import React from "react";

export const metadata = {
  // Basic metadata
  title: "Client Testimonials | Excel Experts",
  description:
    "Read what our clients say about their experience with Excel Experts. Discover how we've helped businesses across Australia optimise their Excel workflows and improve efficiency.",

  // OpenGraph
  openGraph: {
    title: "Client Testimonials | Excel Experts",
    description:
      "Read what our clients say about their experience with Excel Experts. Discover how we've helped businesses across Australia optimise their Excel workflows and improve efficiency.",
    url: "https://www.excelexperts.com.au/client-testimonials",
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
  alternates: {
    canonical: "/client-testimonials",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
