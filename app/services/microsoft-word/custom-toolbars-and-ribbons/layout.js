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
  },

  keywords: ["data automation interfaces"],
  alternates: {
    canonical: "https://wordexperts.com.au/custom-toolbars-and-ribbons",
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
