import React from "react";

export const metadata = {
  title: "Word Accessibility Solutions | Excel Experts",
  description:
    "Professional accessible Word document creation and template services. WCAG compliant documents, accessibility audits, and remediation services for government and enterprise.",

  openGraph: {
    title: "Word Accessibility Solutions | Excel Experts",
    description:
      "Professional accessible Word document creation and template services. WCAG compliant documents, accessibility audits, and remediation services for government and enterprise.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/accessibility",
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

  keywords: [
    // Core accessibility services with Excel focus
    "excel to word accessibility",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Accessibility Solutions | Excel Experts",
    description:
      "Professional accessible Word document creation and template services. WCAG compliant documents, accessibility audits, and remediation services for government and enterprise.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.wordexperts.com.au/accessibility",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/services/microsoft-word/accessibility",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
