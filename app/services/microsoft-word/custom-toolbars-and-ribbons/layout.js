import React from "react";

export const metadata = {
  title: "Custom Toolbars & Ribbon Design | Excel Experts",
  description:
    "Expert customisation of integrated Excel-Word toolbars and ribbons to streamline data transfer and automate report generation. Our team delivers efficient solutions for seamless spreadsheet-to-document workflow.",

  openGraph: {
    title: "Custom Toolbars & Ribbon Design | Excel Experts",
    description:
      "Expert customisation of integrated Excel-Word toolbars and ribbons to streamline data transfer and automate report generation. Our team delivers efficient solutions for seamless spreadsheet-to-document workflow.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons",
    siteName: "Excel Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  keywords: ["data automation interfaces"],

                                                    // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Custom Toolbars & Ribbon Design | Excel Experts",
    description:
      "Expert customisation of integrated Excel-Word toolbars and ribbons to streamline data transfer and automate report generation. Our team delivers efficient solutions for seamless spreadsheet-to-document workflow.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.wordexperts.com.au/custom-toolbars-and-ribbons",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
