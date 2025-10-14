import React from "react";

export const metadata = {
  title: "About Us | Excel Experts",
  description:
    "Excel Experts is Australia's trusted team of Microsoft Excel consultants, offering custom solutions, automation, and training nationwide.",

  openGraph: {
    title: "About Us | Excel Experts",
    description:
      "Excel Experts is Australia's trusted team of Microsoft Excel consultants, offering custom solutions, automation, and training nationwide.",
    url: "https://www.excelexperts.com.au/about-us",
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
    type: "article",
  },

  keywords: ["microsoft excel consultants australia"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "About Us | Excel Experts",
    description:
      "Excel Experts is Australia's trusted team of Microsoft Excel consultants, offering custom solutions, automation, and training for both PC and Mac users nationwide.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
