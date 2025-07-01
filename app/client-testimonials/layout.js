import React from "react";

export const metadata = {
  // Basic metadata
  title: "Client Testimonials | Excel Experts",
  description:
    "Read client testimonials about Excel Experts. Discover how we've helped Australian businesses streamline workflows and boost productivity with Excel.",

  // OpenGraph
  openGraph: {
    title: "Client Testimonials | Excel Experts",
    description:
      "Read client testimonials about Excel Experts. Discover how we've helped Australian businesses streamline workflows and boost productivity with Excel.",
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
      "Read client testimonials about Excel Experts. Discover how we've helped Australian businesses streamline workflows and boost productivity with Excel.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/client-testimonials",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
