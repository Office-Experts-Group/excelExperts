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
    siteName: "Excel Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Core keywords focused on testimonials and trust
  keywords: ["Excel consultants reviews Australia"],

      // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Client Testimonials | Excel Experts",
    description:
      "Read what our clients say about their experience with Excel Experts. Discover how we've helped businesses across Australia optimise their Excel workflows and improve efficiency.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/client-testimonials",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
