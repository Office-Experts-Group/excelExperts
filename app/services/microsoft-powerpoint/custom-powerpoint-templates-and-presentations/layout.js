export const metadata = {
  title: "Custom PowerPoint Templates & Presentations | Excel Experts",
  description:
    "Professional PowerPoint template design and corporate presentation services. Custom master slides, brand-aligned templates, and expert design solutions.",

  openGraph: {
    title: "Custom PowerPoint Templates & Presentations | Excel Experts",
    description:
      "Professional PowerPoint template design and corporate presentation services. Custom master slides, brand-aligned templates, and expert design solutions.",
    url: "https://www.excelexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations",
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

  keywords: ["powerpoint template creation"],

  alternates: {
    canonical:
      "https://www.excelexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations",
  },
};

export default function PowerPointTemplatesLayout({ children }) {
  return <main>{children}</main>;
}
