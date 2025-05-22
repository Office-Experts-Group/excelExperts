import React from "react";

export const metadata = {
  // Basic metadata
  title: "Word Template Creation | Excel Experts",
  description:
    "Excel Experts create professional Word templates with seamless Excel integration capabilities. Our templates feature automated data integration, custom formatting, and comprehensive branding across your Microsoft Office documents.",

  // OpenGraph
  openGraph: {
    title: "Word Template Creation | Excel Experts",
    description:
      "Excel Experts create professional Word templates with seamless Excel integration capabilities. Our templates feature automated data integration, custom formatting, and comprehensive branding across your Microsoft Office documents.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/word-document-template-creation",
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

  // Additional metadata
  keywords: ["Word document template creation"],

                                                                    // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Word Template Creation | Excel Experts",
    description:
      "Excel Experts create professional Word templates with seamless Excel integration capabilities. Our templates feature automated data integration, custom formatting, and comprehensive branding across your Microsoft Office documents.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.wordexperts.com.au/word-document-template-creation",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-word/word-document-template-creation",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
