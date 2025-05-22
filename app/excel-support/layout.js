export const metadata = {
    title: "Excel Support & Training Services - Excel Experts",
  description:
    "Professional Excel support and training services via remote access or phone. Our expert consultants provide instant guidance, troubleshooting, and dedicated support for individuals and teams.",

  openGraph: {
    title: "Excel Support & Training Services - Excel Experts",
    description:
      "Professional Excel support and training services via remote access or phone. Our expert consultants provide instant guidance, troubleshooting, and dedicated support for individuals and teams.",
    url: "https://www.excelexperts.com.au/excel-support",
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

  keywords: ["remote excel support and training"],

              // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel Support & Training Services - Excel Experts",
    description:
      "Professional Excel support and training services via remote access or phone. Our expert consultants provide instant guidance, troubleshooting, and dedicated support for individuals and teams.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-support",
  },
};

export default function ExcelSupportLayout({ children }) {
  return <main>{children}</main>;
}
