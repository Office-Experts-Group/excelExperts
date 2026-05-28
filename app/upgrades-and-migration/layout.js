export const metadata = {
  title: "Excel Upgrades and Migration",
  description:
    "Stop working around broken spreadsheets. We upgrade, migrate and modernise Excel workbooks and legacy systems for Australian businesses. Free Consultation.",

  openGraph: {
    title: "Excel Upgrades and Migration",
    description:
      "Stop working around broken spreadsheets. We upgrade, migrate and modernise Excel workbooks and legacy systems for Australian businesses. Free Consultation.",
    url: "https://www.excelexperts.com.au/upgrades-and-migration",
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

  keywords: ["Excel upgrade consultants", "Excel migration solutions"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Upgrades and Migration",
    description:
      "Stop working around broken spreadsheets. We upgrade, migrate and modernise Excel workbooks and legacy systems for Australian businesses. Free Consultation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/upgrades-and-migration",
  },
};

export default function UpgradesAndMigrationLayout({ children }) {
  return <main>{children}</main>;
}
