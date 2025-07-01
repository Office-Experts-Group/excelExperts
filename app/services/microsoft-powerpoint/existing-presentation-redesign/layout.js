export const metadata = {
  title: "PowerPoint Presentation Redesign Services | Excel Experts",
  description:
    "Transform your PowerPoint decks with expert redesign services. Get branded templates, polished slides, and presentation-ready visuals.",

  openGraph: {
    title: "PowerPoint Presentation Redesign Services | Excel Experts",
    description:
      "Transform your PowerPoint decks with expert redesign services. Get branded templates, polished slides, and presentation-ready visuals.",
    url: "https://www.excelexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign",
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

  keywords: ["powerpoint presentation redesign"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "PowerPoint Presentation Redesign Services | Excel Experts",
    description:
      "Transform your PowerPoint decks with expert redesign services. Get branded templates, polished slides, and presentation-ready visuals.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical:
      "https://www.excelexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign",
  },
};

export default function PowerPointRedesignLayout({ children }) {
  return <main>{children}</main>;
}
