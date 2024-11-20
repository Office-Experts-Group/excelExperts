export const metadata = {
  title: "PowerPoint Experts | Presentation Design & Development Services",
  description:
    "Professional PowerPoint presentation design and development services from certified experts. Custom templates, VBA automation, and expert consultation for all your presentation needs. Contact us at 1300 10 28 10",

  openGraph: {
    title: "PowerPoint Experts | Presentation Design & Development Services",
    description:
      "Professional PowerPoint presentation design and development services from certified experts. Custom templates, VBA automation, and expert consultation for all your presentation needs.",
    url: "https://www.excelexperts.com.au/services/microsoft-powerpoint/",
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
    "powerpoint presentation design services",
    "custom powerpoint template development",
    "professional presentation solutions",
    "powerpoint vba automation",
    "powerpoint master slides australia",
    "corporate presentation design",
    "powerpoint consulting services",
    "presentation template creation",
    "powerpoint automation services",
    "presentation redesign services",
    "professional powerpoint training",
    "corporate template development",
    "powerpoint expert consultation",
    "presentation branding solutions",
    "powerpoint training australia",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@ExcelExpertsAU",
    title: "PowerPoint Experts | Presentation Design & Development Services",
    description:
      "Professional PowerPoint presentation design and development services from certified experts. Custom templates, VBA automation, and expert consultation for all your presentation needs.",
    images: [
      "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  canonical: "https://www.excelexperts.com.au/services/microsoft-powerpoint/",

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

export default function PowerPointServicesLayout({ children }) {
  return <main>{children}</main>;
}
