export const metadata = {
  title: "PowerPoint VBA Automation Services | Excel Experts",
  description:
    "Professional PowerPoint VBA automation to streamline workflows. Custom programming and data integration by certified experts.",

  openGraph: {
    title: "PowerPoint VBA Automation Services | Excel Experts",
    description:
      "Professional PowerPoint VBA automation to streamline workflows. Custom programming and data integration by certified experts.",
    url: "https://www.excelexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba",
    siteName: "Excel Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  keywords: ["powerpoint automation solutions"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "PowerPoint VBA Automation Services | Excel Experts",
    description:
      "Professional PowerPoint VBA automation to streamline workflows. Custom programming and data integration by certified experts.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.excelexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba",
  },
};

export default function PowerPointVBAServicesLayout({ children }) {
  return <main>{children}</main>;
}
