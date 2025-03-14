import React from "react";

export const metadata = {
  title: "Excel-Integrated Word Solutions | Excel Experts",
  description:
    "Leverage our Excel expertise to create integrated Word templates that seamlessly connect with your spreadsheet data. Our solutions combine Excel automation with Word document generation for streamlined corporate reporting.",

  openGraph: {
    title: "Excel-Integrated Word Solutions | Excel Experts",
    description:
      "Expert team delivering Excel-integrated Word templates for companies. Automate document generation from Excel data while maintaining corporate identity standards.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/companies-and-organisations",
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

  keywords: ["corporate reporting automation"],

  alternates: {
    canonical: "https://www.wordexperts.com.au/companies-and-organisations",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-word/companies-and-organisations",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
