import React from "react";

export const metadata = {
  title: "Excel-Integrated Corporate Word Solutions | Excel Experts",
  description:
    "Advanced Corporate Template Solution combining Excel data automation with Word templates. Create professional documents that automatically pull from your Excel data while maintaining consistent formatting and branding.",

  openGraph: {
    title: "Excel-Integrated Corporate Word Solutions | Excel Experts",
    description:
      "Advanced Corporate Template Solution combining Excel data automation with Word templates. Create professional documents that automatically pull from your Excel data while maintaining consistent formatting and branding.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/corporate-global-template-solution",
  },

  keywords: ["corporate Microsoft word templates"],

  alternates: {
    canonical:
      "https://www.wordexperts.com.au/corporate-global-template-solution",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-word/corporate-global-template-solution",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
