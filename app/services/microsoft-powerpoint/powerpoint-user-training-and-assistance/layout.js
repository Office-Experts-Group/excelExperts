export const metadata = {
  title:
    "PowerPoint Training & Expert Assistance Services | Professional Support",
  description:
    "Expert PowerPoint training and assistance services. Remote or onsite support, custom training sessions, troubleshooting, and professional guidance.",

  openGraph: {
    title:
      "PowerPoint Training & Expert Assistance Services | Professional Support",
    description:
      "Expert PowerPoint training and assistance services. Remote or onsite support, custom training sessions, troubleshooting, and professional guidance.",
    url: "https://www.excelexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance/",
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

  keywords: ["powerpoint training services", "powerpoint expert assistance"],

  alternates: {
    canonical:
      "https://www.excelexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
  },
};

export default function PowerPointTrainingLayout({ children }) {
  return <main>{children}</main>;
}
