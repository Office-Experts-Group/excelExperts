export const metadata = {
  title: "Pivot Tables, Charts & Reporting Solutions | Excel Experts",
  description:
    "Professional Excel pivot table and chart solutions from certified experts. Custom reporting solutions, VBA programming, and expert consultation for all your Excel reporting needs. Contact us at 1300 10 28 10",

  openGraph: {
    title: "Pivot Tables, Charts & Reporting Solutions | Excel Experts",
    description:
      "Professional Excel pivot table and chart solutions from certified experts. Custom reporting solutions, VBA programming, and expert consultation for all your Excel reporting needs.",
    url: "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions/",
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
    "excel pivot table consulting services",
    "custom excel chart development",
    "professional excel reporting solutions",
    "excel vba reporting automation",
    "advanced pivot table training australia",
    "custom excel dashboard creation",
    "excel data visualization services",
    "powerquery reporting solutions",
    "powerpivot custom development",
    "excel business intelligence reporting",
    "professional pivot chart creation",
    "excel reporting automation services",
    "custom excel reporting consultancy",
    "power bi integration excel reports",
    "excel data analysis solutions australia",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@ExcelExpertsAU",
    title: "Pivot Tables, Charts & Reporting Solutions | Excel Experts",
    description:
      "Professional Excel pivot table and chart solutions from certified experts. Custom reporting solutions, VBA programming, and expert consultation for all your Excel reporting needs.",
    images: [
      "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  canonical:
    "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions/",

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

export default function PivotTablesChartsReportingLayout({ children }) {
  return <main>{children}</main>;
}
