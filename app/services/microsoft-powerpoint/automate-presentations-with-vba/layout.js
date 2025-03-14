export const metadata = {
  title: "PowerPoint VBA Automation Services | Excel Experts",
  description:
    "Professional PowerPoint VBA automation services from certified experts. Automate data integration, custom programming, and streamline your presentation workflow.",

  openGraph: {
    title: "PowerPoint VBA Automation Services | Excel Experts",
    description:
      "Professional PowerPoint VBA automation services from certified experts. Automate data integration, custom programming, and streamline your presentation workflow.",
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

  alternates: {
    canonical:
      "https://www.excelexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba",
  },
};

export default function PowerPointVBAServicesLayout({ children }) {
  return <main>{children}</main>;
}
