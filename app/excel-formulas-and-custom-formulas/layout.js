export const metadata = {
  title: "Excel Formulas and Custom Formulas - Excel Experts",
  description:
    "Expert help with Excel formulas and custom formula development. Our specialists optimise formula-intensive workbooks, create VBA functions, and provide professional formula troubleshooting services.",

  openGraph: {
  title: "Excel Formulas and Custom Formulas - Excel Experts",
    description:
      "Expert help with Excel formulas and custom formula development. Our specialists optimise formula-intensive workbooks, create VBA functions, and provide professional formula troubleshooting services.",
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
  title: "Excel Formulas and Custom Formulas - Excel Experts",
    description:
      "Expert help with Excel formulas and custom formula development. Our specialists optimise formula-intensive workbooks, create VBA functions, and provide professional formula troubleshooting services.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-formulas-and-custom-formulas",
  },
};

export default function ExcelFormulasLayout({ children }) {
  return <main>{children}</main>;
}
