export const metadata = {
  title: "Excel Formulas and Custom Formulas",
  description:
    "Get expert help with Excel formulas, custom functions, and VBA. We optimise complex workbooks and provide professional formula troubleshooting.",

  openGraph: {
    title: "Excel Formulas and Custom Formulas",
    description:
      "Get expert help with Excel formulas, custom functions, and VBA. We optimise complex workbooks and provide professional formula troubleshooting.",
    url: "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas",
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

  keywords: ["excel custom formula development"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Formulas and Custom Formulas",
    description:
      "Get expert help with Excel formulas, custom functions, and VBA. We optimise complex workbooks and provide professional formula troubleshooting.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-formulas-and-custom-formulas",
  },
};

export default function ExcelFormulasLayout({ children }) {
  return <main>{children}</main>;
}
