export const metadata = {
  title: "Pivot Tables, Charts & Reporting Solutions | Excel Experts",
  description:
    "Professional Excel pivot table and chart solutions from certified experts. Custom reporting solutions, VBA programming, and expert consultation for all your Excel reporting needs.",

  openGraph: {
    title: "Pivot Tables, Charts & Reporting Solutions | Excel Experts",
    description:
      "Professional Excel pivot table and chart solutions from certified experts. Custom reporting solutions, VBA programming, and expert consultation for all your Excel reporting needs.",
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

  alternates: {
    canonical: "/pivot-tables-charts-and-reporting-solutions",
  },
};

export default function PivotTablesChartsReportingLayout({ children }) {
  return <main>{children}</main>;
}
