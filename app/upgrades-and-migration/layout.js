export const metadata = {
  title: "Excel Upgrades and Migration",
  description:
    "Stuck on an Old Version? Expert help with Excel workbook upgrades, VBA migration, and version compatibility issues. Professional Excel upgrade services across Australia.",

  openGraph: {
    title: "Excel Upgrades and Migration",
    description:
      "Stuck on an Old Version? Expert help with Excel workbook upgrades, VBA migration, and version compatibility issues. Professional Excel upgrade services across Australia.",
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

  keywords: [
    // Core upgrade services
    "Excel upgrade consultants",
    "Excel migration solutions",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Upgrades and Migration",
    description:
      "Stuck on an Old Version? Expert help with Excel workbook upgrades, VBA migration, and version compatibility issues. Professional Excel upgrade services across Australia.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.excelexperts.com.au/upgrades-and-migration",
  },
};

export default function UpgradesAndMigrationLayout({ children }) {
  return <main>{children}</main>;
}
