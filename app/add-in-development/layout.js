export const metadata = {
  title: "Add-in Development - Microsoft Excel",
  description:
    "Professional Excel Add-in Development services by certified experts. Custom add-ins to extend Excel functionality, automate tasks, and enhance productivity for your business. Get tailored solutions with our Excel Add-in Development team.",
  openGraph: {
  title: "Add-in Development - Microsoft Excel",
    description:
      "Professional Excel Add-in Development services by certified experts. Custom add-ins to extend Excel functionality, automate tasks, and enhance productivity for your business. Get tailored solutions with our Excel Add-in Development team.",
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
      "Professional Excel Add-in Development services by certified experts. Custom add-ins to extend Excel functionality, automate tasks, and enhance productivity for your business. Get tailored solutions with our Excel Add-in Development team.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/add-in-development",
  },
};

export default function AddInDevelopmentLayout({ children }) {
  return <main>{children}</main>;
}
