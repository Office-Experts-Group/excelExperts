import React from "react";
import PropTypes from "prop-types";

import { Roboto } from "next/font/google";

import HeadTop from "../components/HeadTop";
import Header from "./(components)/Header";
import CookieConsent from "../components/CookieConsent";
import Footer from "./(components)/Footer";
import Copyright from "../components/Copyright";
import ScrollBtn from "../components/ScrollBtn";

import "./global.css";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Excel Help Australia - Expert Excel Programmer & Consultant",
  description:
    "Excel Experts is the Leading Excel Help Service Provider in Australia. Highly Experienced Excel Programmers & Developers. Call 1300 102 810",

  openGraph: {
    title: "Excel Help Australia - Expert Excel Programmer & Consultant",
    description:
      "Excel Experts is the Leading Excel Help Service Provider in Australia. Highly Experienced Excel Programmers & Developers. Call 1300 102 810",
    url: "https://www.excelexperts.com.au/",
    siteName: "Excel Experts",
    images: [
      {
        url: "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Excel Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  keywords: [
    "Excel consulting Australia",
    "Excel macro programming services",
    "Excel VBA experts",
    "Custom Excel solutions",
    "Excel data analysis Australia",
    "Excel help Sydney Melbourne Brisbane",
    "Excel reporting tools",
    "Excel dashboard creation",
    "Excel API and SQL integration",
    "Excel automation services",
    "Excel formulas troubleshooting",
    "Excel 3rd party integration",
    "Excel data manipulation",
    "Microsoft Office integration with Excel",
    "Excel charting and pivot tables",
    "Excel VBA and macro training",
    "Automated Excel reports Australia",
    "Custom Excel add-in development",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@ExcelExpertsAU",
    title: "Excel Help Australia - Expert Excel Programmer & Consultant",
    description:
      "Excel Experts is the Leading Excel Help Service Provider in Australia. Highly Experienced Excel Programmers & Developers. Call 1300 102 810",
    images: [
      "https://www.excelexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  canonical: "https://www.excelexperts.com.au/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body className={roboto.className}>
        <HeadTop />
        <Header />
        {children}
        <CookieConsent />
        <Footer />
        <Copyright />
        <ScrollBtn />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
