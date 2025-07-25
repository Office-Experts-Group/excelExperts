export const metadata = {
  title: "Excel Upgrades and Migration",
  description:
    "Stuck on an Old Version? Expert help with Excel workbook upgrades, VBA migration, and version compatibility issues. Professional Excel upgrade services across Australia. Call 1300 102 810",

  openGraph: {
    title: "Excel Upgrades and Migration",
    description:
      "Stuck on an Old Version? Expert help with Excel workbook upgrades, VBA migration, and version compatibility issues. Professional Excel upgrade services across Australia. Call 1300 102 810",
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
      "Stuck on an Old Version? Expert help with Excel workbook upgrades, VBA migration, and version compatibility issues. Professional Excel upgrade services across Australia. Call 1300 102 810",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.wordexperts.com.au/upgrades-and-migration",
    alternate: [
      {
        url: "https://www.excelexperts.com.au/services/microsoft-word/upgrades-and-migration",
      },
    ],
  },
};

export default function UpgradesAndMigrationLayout({ children }) {
  return <main>{children}</main>;
}
