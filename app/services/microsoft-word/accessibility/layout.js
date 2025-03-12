import React from "react";

export const metadata = {
  title: "Word Accessibility Solutions | Excel Experts",
  description:
    "As Excel specialists, our Word accessibility solutions seamlessly integrate with your Excel-based workflows. Our experts ensure your documents maintain accessibility standards while working harmoniously with your Excel data exports and reporting processes.",

  openGraph: {
    title: "Word Accessibility Solutions | Excel Experts",
    description:
      "As Excel specialists, our Word accessibility solutions seamlessly integrate with your Excel-based workflows. Our experts ensure your documents maintain accessibility standards while working harmoniously with your Excel data exports and reporting processes.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/accessibility",
  },

  keywords: [
    // Core accessibility services with Excel focus
    "excel to word accessibility",
  ],
  alternates: {
    canonical: "https://www.wordexperts.com.au/accessibility",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-word/accessibility",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
