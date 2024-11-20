export const metadata = {
  title:
    "PowerPoint Training & Expert Assistance Services | Professional Support",
  description:
    "Expert PowerPoint training and assistance services. Remote or onsite support, custom training sessions, troubleshooting, and professional guidance. Contact us at 1300 10 28 10",

  openGraph: {
    title:
      "PowerPoint Training & Expert Assistance Services | Professional Support",
    description:
      "Expert PowerPoint training and assistance services. Remote or onsite support, custom training sessions, troubleshooting, and professional guidance.",
    url: "https://www.excelexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance/",
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
    "powerpoint training services",
    "powerpoint expert assistance",
    "remote powerpoint support",
    "onsite powerpoint training",
    "powerpoint troubleshooting help",
    "presentation skills training",
    "powerpoint consultancy services",
    "custom powerpoint training",
    "group powerpoint training",
    "individual powerpoint coaching",
    "powerpoint upgrade assistance",
    "presentation conversion help",
    "powerpoint how-to videos",
    "professional powerpoint guidance",
    "powerpoint training australia",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@ExcelExpertsAU",
    title:
      "PowerPoint Training & Expert Assistance Services | Professional Support",
    description:
      "Expert PowerPoint training and assistance services. Remote or onsite support, custom training sessions, troubleshooting, and professional guidance.",
    images: [
      "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  canonical:
    "https://www.excelexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance/",

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

export default function PowerPointTrainingLayout({ children }) {
  return <main>{children}</main>;
}
