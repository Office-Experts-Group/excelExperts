export const metadata = {
  title: "Presentation Design & Development Services",
  description:
    "Professional PowerPoint presentation design and development services from certified experts. Custom templates, VBA automation, and expert consultation for all your presentation needs. Contact us at 1300 10 28 10",

  openGraph: {
    title: "Presentation Design & Development Services",
    description:
      "Professional PowerPoint presentation design and development services from certified experts. Custom templates, VBA automation, and expert consultation for all your presentation needs.",
    url: "https://www.excelexperts.com.au/services/microsoft-powerpoint",
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

  keywords: ["powerpoint training australia"],

  alternates: {
    canonical: "https://www.excelexperts.com.au/services/microsoft-powerpoint",
  },
};

export default function PowerPointServicesLayout({ children }) {
  return <main>{children}</main>;
}
