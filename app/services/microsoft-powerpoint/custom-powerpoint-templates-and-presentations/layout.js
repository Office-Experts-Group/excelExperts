export const metadata = {
  title: "Custom PowerPoint Templates & Corporate Presentation Design Services",
  description:
    "Professional PowerPoint template design and corporate presentation services. Custom master slides, brand-aligned templates, and expert design solutions. Contact us at 1300 10 28 10",

  openGraph: {
    title:
      "Custom PowerPoint Templates & Corporate Presentation Design Services",
    description:
      "Professional PowerPoint template design and corporate presentation services. Custom master slides, brand-aligned templates, and expert design solutions.",
    url: "https://www.excelexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations/",
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
    "custom powerpoint templates",
    "corporate presentation design",
    "powerpoint master slides",
    "brand guidelines templates",
    "professional presentation templates",
    "corporate powerpoint themes",
    "custom slide design",
    "powerpoint template creation",
    "business presentation design",
    "branded powerpoint templates",
    "professional slide layouts",
    "corporate identity templates",
    "presentation design services",
    "powerpoint theme development",
    "corporate template design australia",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@ExcelExpertsAU",
    title:
      "Custom PowerPoint Templates & Corporate Presentation Design Services",
    description:
      "Professional PowerPoint template design and corporate presentation services. Custom master slides, brand-aligned templates, and expert design solutions.",
    images: [
      "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  canonical:
    "https://www.excelexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations/",

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

export default function PowerPointTemplatesLayout({ children }) {
  return <main>{children}</main>;
}
