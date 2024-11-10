export const metadata = {
  title: "Excel Support & Training Services | Excel Expert",
  description:
    "Professional Excel support and training services via remote access or phone. Our expert consultants provide instant guidance, troubleshooting, and dedicated support for individuals and teams. Contact us at 1300 102 810",

  openGraph: {
    title: "Excel Support & Training Services | Excel Expert",
    description:
      "Professional Excel support and training services via remote access or phone. Our expert consultants provide instant guidance, troubleshooting, and dedicated support for individuals and teams.",
    url: "https://www.excelexperts.com.au/excel-support/",
    siteName: "Excel Experts",
    images: [
      {
        url: "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Excel Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  keywords: [
    "remote excel support and training australia",
    "excel consultant skype support services",
    "professional excel troubleshooting assistance",
    "instant excel support for teams",
    "dedicated excel consultant remote access",
    "excel expert phone consultation services",
    "microsoft excel team training support",
    "excel workbook troubleshooting services",
    "remote excel consulting australia",
    "excel expert guidance and support",
    "professional excel help and training",
    "virtual excel consultant services",
    "excel remote support solutions australia",
    "expert excel problem solving assistance",
    "online excel consultant support services",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@ExcelExpertsAU",
    title: "Excel Support & Training Services | Excel Expert",
    description:
      "Professional Excel support and training services via remote access or phone. Our expert consultants provide instant guidance, troubleshooting, and dedicated support for individuals and teams.",
    images: [
      "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  canonical: "https://www.excelexperts.com.au/excel-support/",

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function ExcelSupportLayout({ children }) {
  return <main>{children}</main>;
}
