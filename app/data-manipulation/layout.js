export const metadata = {
  title: "Data Manipulation | Excel Experts",
  description:
    "We are experts in Data import/export, parsing and processing Data formatting automation, automated data manipulation solutions using VBA. Call us 1300 102 810",

  keywords: ["Excel data manipulation experts"],

  openGraph: {
    title: "Data Manipulation | Excel Experts",
    description:
      "We are experts in Data import/export, parsing and processing Data formatting automation, automated data manipulation solutions using VBA. Call us 1300 102 810",
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

            // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
        title: "Data Manipulation | Excel Experts",
    description:
      "We are experts in Data import/export, parsing and processing Data formatting automation, automated data manipulation solutions using VBA. Call us 1300 102 810",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/data-manipulation",
  },
};

export default function DataManipulationLayout({ children }) {
  return <main>{children}</main>;
}
