export const metadata = {
  title: "Excel Support & Training Services",
  description:
    "Expert Excel support and training for individuals and teams. Remote or onsite help with troubleshooting, guidance, and skill development.",

  openGraph: {
    title: "Excel Support & Training Services",
    description:
      "Expert Excel support and training for individuals and teams. Remote or onsite help with troubleshooting, guidance, and skill development.",
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
    title: "Excel Support & Training Services",
    description:
      "Expert Excel support and training for individuals and teams. Remote or onsite help with troubleshooting, guidance, and skill development.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-support",
  },
};

export default function ExcelSupportLayout({ children }) {
  return <main>{children}</main>;
}
