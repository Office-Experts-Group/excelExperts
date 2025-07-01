export const metadata = {
  title: "Pivot Tables, Charts & Reporting Solutions | Excel Experts",
  description:
    "Professional Excel reporting solutions. Custom pivot tables, charts, and VBA tools designed by experts to simplify and enhance your data insights.",

  openGraph: {
    title: "Pivot Tables, Charts & Reporting Solutions | Excel Experts",
    description:
      "Professional Excel reporting solutions. Custom pivot tables, charts, and VBA tools designed by experts to simplify and enhance your data insights.",

    url: "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions",
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

  keywords: ["excel pivot table consulting services"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Pivot Tables, Charts & Reporting Solutions | Excel Experts",
    description:
      "Professional Excel reporting solutions. Custom pivot tables, charts, and VBA tools designed by experts to simplify and enhance your data insights.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/pivot-tables-charts-and-reporting-solutions",
  },
};

export default function PivotTablesChartsReportingLayout({ children }) {
  return <main>{children}</main>;
}
