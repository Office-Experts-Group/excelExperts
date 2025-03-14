export const metadata = {
  title: "Custom Design and Development | Excel Experts",
  description:
    "We can build What You Need! We have extensive experience in all aspects of Excel custom design and development. Call us 1300102810",
  openGraph: {
    title: "Custom Design and Development | Excel Experts",
    description:
      "We can build What You Need! We have extensive experience in all aspects of Excel custom design and development. Call us 1300102810",
    url: "https://www.excelexperts.com.au/custom-design-and-development",
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
  keywords: ["custom excel workbook design"],
  alternates: {
    canonical: "/custom-design-and-development",
  },
};

export default function CustomDesignDevelopmentLayout({ children }) {
  return <main>{children}</main>;
}
