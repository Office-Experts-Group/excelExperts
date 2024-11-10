export const metadata = {
  title: "Excel Upgrades and Migration | Excel Experts",
  description:
    "Stuck on an Old Version? Expert help with Excel workbook upgrades, VBA migration, and version compatibility issues. Professional Excel upgrade services across Australia. Call 1300102810",

  openGraph: {
    title:
      "Excel Upgrades and Migration | Microsoft Excel Version Migration Experts",
    description:
      "Professional Excel upgrade and migration services. Resolve version compatibility issues, VBA macro updates, and workbook optimization for newer Excel versions.",
    url: "https://www.excelexperts.com.au/upgrades-and-migration/",
    siteName: "Excel Experts",
    images: [
      {
        url: "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Excel Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  keywords: [
    // Core upgrade services
    "Excel version upgrade services",
    "Excel workbook migration solutions",
    "Excel compatibility issue resolution",
    "VBA macro upgrade services",

    // Specific problems
    "Excel 32-bit to 64-bit migration",
    "Excel workbook performance optimization",
    "Excel VBA code compatibility fixes",
    "Excel ActiveX control migration",

    // Version-specific
    "Excel legacy version upgrade",
    "Excel Office 365 migration services",
    "Excel cross-version compatibility",
    "Excel version upgrade consulting",

    // Business solutions
    "Business Excel upgrade services",
    "Enterprise Excel migration",
    "Excel upgrade consultation",
    "Professional Excel migration support",

    // Technical solutions
    "Excel shape size adjustment fixes",
    "Excel crash prevention solutions",
    "Excel workbook speed optimization",
    "Excel VBA code modernization",

    // Location-specific
    "Excel upgrade services Australia",
    "Excel migration experts Sydney",
    "Excel upgrade consultation Melbourne",
    "Excel version upgrade Brisbane",
  ],

  twitter: {
    card: "summary_large_image",
    title:
      "Excel Upgrades and Migration | Microsoft Excel Version Migration Experts",
    description:
      "Professional Excel upgrade and migration services. Resolve version compatibility issues, VBA macro updates, and workbook optimization for newer Excel versions.",
    images: [
      "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  canonical: "https://www.excelexperts.com.au/upgrades-and-migration/",

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function UpgradesAndMigrationLayout({ children }) {
  return <main>{children}</main>;
}
