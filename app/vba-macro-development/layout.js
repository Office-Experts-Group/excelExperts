export const metadata = {
  // Basic metadata
  title: "VBA Macro Developers | Excel VBA Programming Experts",
  description:
    "Expert VBA macro developers for Microsoft Office automation. Custom Excel VBA programming, Office add-in development, and macro solutions for business process automation. Professional consultants across Australia.",

  // OpenGraph
  openGraph: {
    title: "VBA Macro Development & Programming Services | Excel Experts",
    description:
      "Professional VBA macro development services for Microsoft Office. Custom automation solutions, add-in development, and expert programming for Excel, Access, Word, and Office 365.",
    url: "https://www.excelexperts.com.au/vba-macro-development/",
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

  // Keywords
  keywords: [
    // Core VBA services
    "VBA macro development services",
    "Excel VBA programming",
    "Office automation solutions",
    "Custom macro development",

    // Specific solutions
    "Office add-in development",
    "VBA code automation",
    "Custom Excel macros",
    "Office 365 VBA solutions",

    // Technical specifications
    "Microsoft Office VBA programming",
    "Excel macro automation",
    "VBA code development",
    "Office macro integration",

    // Service-specific
    "VBA consulting services",
    "Macro upgrade services",
    "Excel automation experts",
    "Office VBA developers",

    // Business solutions
    "Business process automation",
    "Custom office solutions",
    "Enterprise VBA development",
    "Automated workflow solutions",

    // Location-specific
    "VBA developers Australia",
    "Excel macro experts Sydney",
    "Office automation specialists Melbourne",
    "VBA consultants Brisbane",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "VBA Macro Development & Programming Services | Excel Experts",
    description:
      "Professional VBA macro development services for Microsoft Office. Custom automation solutions, add-in development, and expert programming for Excel, Access, Word, and Office 365.",
    images: [
      "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.excelexperts.com.au/vba-macro-development/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function VbaMacroDevelopmentLayout({ children }) {
  return <main>{children}</main>;
}
