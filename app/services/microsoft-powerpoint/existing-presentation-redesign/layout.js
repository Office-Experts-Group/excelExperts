export const metadata = {
  title: "PowerPoint Presentation Redesign Services | Excel Experts",
  description:
    "Professional PowerPoint presentation redesign services. Transform existing presentations into high-quality templates with master slides that meet brand guidelines.",

  openGraph: {
    title: "PowerPoint Presentation Redesign Services | Excel Experts",
    description:
      "Professional PowerPoint presentation redesign services. Transform existing presentations into high-quality templates with master slides that meet brand guidelines.",
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

  alternates: {
    canonical:
      "https://www.excelexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign",
  },
};

export default function PowerPointRedesignLayout({ children }) {
  return <main>{children}</main>;
}
