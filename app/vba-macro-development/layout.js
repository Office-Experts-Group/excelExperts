export const metadata = {
  // Basic metadata
  title: "VBA Macro Developers | Excel VBA Programming Experts",
  description:
    "Expert VBA developers for custom Excel macros, Office automation, and add-in development. Streamline your business with tailored VBA solutions.",

  // OpenGraph
  openGraph: {
    title: "VBA Macro Development & Programming Services | Excel Experts",
    description:
      "Expert VBA developers for custom Excel macros, Office automation, and add-in development. Streamline your business with tailored VBA solutions.",
    url: "https://www.excelexperts.com.au/vba-macro-development",
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

  // Keywords
  keywords: [
    // Core VBA services
    "VBA macro development services",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "VBA Macro Development & Programming Services | Excel Experts",
    description:
      "Expert VBA developers for custom Excel macros, Office automation, and add-in development. Streamline your business with tailored VBA solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.wordexperts.com.au/vba-macro-development",
  },
  alternate: [
    {
      url: "https://www.excelexperts.com.au/services/microsoft-word/vba-macro-development",
    },
  ],
};

export default function VbaMacroDevelopmentLayout({ children }) {
  return <main>{children}</main>;
}
