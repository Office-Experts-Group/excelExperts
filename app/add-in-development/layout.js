export const metadata = {
  title: "Add in Development | Excel Experts",
  description:
    "What is an Excel Add-In? An Excel add-in contains code that adds additional functionality to Excel, usually in the form of new functions. Call us 1300102810",
  openGraph: {
    title: "Add in Development | Excel Experts",
    description:
      "What is an Excel Add-In? An Excel add-in contains code that adds additional functionality to Excel, usually in the form of new functions. Call us 1300102810",
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

  keywords: ["Excel add-in development Australia"],

  alternates: {
    canonical: "/add-in-development",
  },
};

export default function AddInDevelopmentLayout({ children }) {
  return <main>{children}</main>;
}
