export const metadata = {
  title: "Excel Add in Development",
  description:
    "Professional Excel Add-in Development services by certified experts. Custom add-ins to extend Excel functionality, automate tasks, and enhance productivity for your business. Get tailored solutions with our Excel Add-in Development team.",
  openGraph: {
    title: "Excel Add in Development",
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

  alternates: {
    canonical: "/add-in-development",
  },
};

export default function AddInDevelopmentLayout({ children }) {
  return <main>{children}</main>;
}
