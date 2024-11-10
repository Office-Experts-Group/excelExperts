export const metadata = {
  title: "Excel Formulas and Custom Formulas | Excel Expert",
  description:
    "Expert help with Excel formulas and custom formula development. Our specialists optimize formula-intensive workbooks, create VBA functions, and provide professional formula troubleshooting services. Call 1300 102 810",

  openGraph: {
    title: "Excel Formulas and Custom Formulas | Excel Expert",
    description:
      "Expert help with Excel formulas and custom formula development. Our specialists optimize formula-intensive workbooks, create VBA functions, and provide professional formula troubleshooting services.",
    url: "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas/",
    siteName: "Excel Experts",
    images: [
      {
        url: "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Excel Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  keywords: [
    "excel custom formula development services",
    "complex excel formula troubleshooting",
    "vba custom formula creation",
    "excel formula optimization services",
    "custom excel function development",
    "excel formula performance improvement",
    "formula intensive workbook optimization",
    "excel formula maintenance solutions",
    "custom vba functions in excel",
    "professional excel formula consulting",
    "Excel formula help Australia",
    "Custom Excel formulas development",
    "Excel VBA function creation",
    "Excel workbook optimization",
    "Formula performance solutions",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@ExcelExpertsAU",
    title: "Excel Formulas and Custom Formulas | Excel Expert",
    description:
      "Expert help with Excel formulas and custom formula development. Our specialists optimize formula-intensive workbooks, create VBA functions, and provide professional formula troubleshooting services.",
    images: [
      "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  canonical:
    "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas/",

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function ExcelFormulasLayout({ children }) {
  return <main>{children}</main>;
}
