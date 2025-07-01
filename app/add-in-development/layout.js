export const metadata = {
  title: "Add-in Development - Microsoft Excel",
  description:
    "Custom Excel Add-in development by certified experts. Automate tasks, boost productivity, and extend Excel’s functionality for your business.",
  openGraph: {
    title: "Add-in Development - Microsoft Excel",
    description:
      "Custom Excel Add-in development by certified experts. Automate tasks, boost productivity, and extend Excel’s functionality for your business.",
    url: "https://www.excelexperts.com.au/add-in-development",
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

  keywords: ["Excel add-in development"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Office Experts Group Client Testimonials",
    description:
      "Custom Excel Add-in development by certified experts. Automate tasks, boost productivity, and extend Excel’s functionality for your business.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/add-in-development",
  },
};

export default function AddInDevelopmentLayout({ children }) {
  return <main>{children}</main>;
}
