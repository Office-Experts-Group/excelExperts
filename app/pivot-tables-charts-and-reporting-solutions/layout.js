// app/pivot-tables-charts-and-reporting-solutions/layout.js
import React from "react";

export const metadata = {
  title:
    "Excel Pivot Tables, Charts & Reporting Solutions | Excel Experts Australia",
  description:
    "Australia's leading Excel experts build custom pivot tables, pivot charts, Power Query pipelines and Power BI dashboards. Remote & onsite support nationwide. Call 1300 102 810.",

  openGraph: {
    title:
      "Excel Pivot Tables, Charts & Reporting Solutions | Excel Experts Australia",
    description:
      "Australia's leading Excel experts build custom pivot tables, pivot charts, Power Query pipelines and Power BI dashboards. Remote & onsite support nationwide. Call 1300 102 810.",
    url: "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions",
    siteName: "Excel Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Excel Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  keywords: ["Excel pivot tables", "Excel reporting solutions"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Excel Pivot Tables, Charts & Reporting Solutions | Excel Experts Australia",
    description:
      "Australia's leading Excel experts build custom pivot tables, pivot charts, Power Query pipelines and Power BI dashboards. Remote & onsite support nationwide. Call 1300 102 810.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/pivot-tables-charts-and-reporting-solutions",
  },
};

export default function PivotTablesChartsReportingLayout({ children }) {
  return <>{children}</>;
}
