export const metadata = {
  // Basic metadata
  title: "VBA Macro Developers | Excel VBA Programming Experts",
  description:
    "Expert VBA macro developers for Microsoft Office automation. Custom Excel VBA programming, Office add-in development, and macro solutions for business process automation.",

  // OpenGraph
  openGraph: {
    title: "VBA Macro Development & Programming Services | Excel Experts",
    description:
      "Expert VBA macro developers for Microsoft Office automation. Custom Excel VBA programming, Office add-in development, and macro solutions for business process automation.",
    url: "https://www.excelexperts.com.au/vba-macro-development",
    siteName: "Excel Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Keywords
  keywords: [
    // Core VBA services
    "VBA macro development services",
  ],
  alternates: {
    canonical: "https://www.excelexperts.com.au/vba-macro-development",
  },
};

export default function VbaMacroDevelopmentLayout({ children }) {
  return <main>{children}</main>;
}
