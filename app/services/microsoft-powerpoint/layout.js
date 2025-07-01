export const metadata = {
  title: "Presentation Design & Development Services | Excel Experts",
  description:
    "Professional PowerPoint design and VBA automation by certified experts. Custom templates and consultation to elevate your presentations. Contact 1300 10 28 10.",

  openGraph: {
    title: "Presentation Design & Development Services | Excel Experts",
    description:
      "Professional PowerPoint design and VBA automation by certified experts. Custom templates and consultation to elevate your presentations. Contact 1300 10 28 10.",
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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Presentation Design & Development Services | Excel Experts",
    description:
      "Professional PowerPoint design and VBA automation by certified experts. Custom templates and consultation to elevate your presentations. Contact 1300 10 28 10.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.excelexperts.com.au/services/microsoft-powerpoint",
  },
};

export default function PowerPointServicesLayout({ children }) {
  return <main>{children}</main>;
}
