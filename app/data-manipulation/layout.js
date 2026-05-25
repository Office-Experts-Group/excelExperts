export const metadata = {
  title: "Data Manipulation | Excel Experts",
  description:
    "Excel data automation specialists helping businesses simplify imports, exports, formatting and complex data manipulation using VBA. Free initial assessment",

  keywords: ["Excel data manipulation experts"],

  openGraph: {
    title: "Data Manipulation | Excel Experts",
    description:
      "Excel data automation specialists helping businesses simplify imports, exports, formatting and complex data manipulation using VBA. Free initial assessment",
    url: "https://www.excelexperts.com.au/data-manipulation",
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

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Data Manipulation | Excel Experts",
    description:
      "Excel data automation specialists helping businesses simplify imports, exports, formatting and complex data manipulation using VBA. Free initial assessment",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/data-manipulation",
  },
};

export default function DataManipulationLayout({ children }) {
  return <main>{children}</main>;
}
