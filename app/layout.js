import React from "react";
import dynamic from "next/dynamic";

import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";

import HeadTop from "../components/HeadTop";
import Header from "./(components)/Header";

const CookieConsent = dynamic(() => import("../components/CookieConsent"), {
  ssr: false, // Client-side only
});

const Footer = dynamic(() => import("./(components)/Footer"), {
  ssr: true, // We want this server rendered but loaded dynamically
});

const Copyright = dynamic(() => import("../components/Copyright"));
const ScrollBtn = dynamic(() => import("../components/ScrollBtn"), {
  ssr: false, // Client-side only as it depends on scroll
});

import "./global.css";
import ScrollIndicator from "../components/ScrollIndicator";

const aptos = localFont({
  src: [
    {
      path: "../public/fonts/aptos/Aptos.ttf",

      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aptos",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-garamond",
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
        url: "/logo.png",
        width: 1200,
        height: 620,
        alt: "Excel Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  keywords: [
    "excel consultant",
    "excel consulting",
    "excel contractor",
    "excel developer",
    "excel expert",
    "excel professional",
    "excel programmer",
    "excel specialist",
    "excel support",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@ExcelExpertsAU",
    title: "Excel Help Australia - Expert Excel Programmer & Consultant",
    description:
      "Excel Experts is the Leading Excel Help Service Provider in Australia. Highly Experienced Excel Programmers & Developers. Call 1300 102 810",
    images: ["/logo.png"],
  },

  metadataBase: new URL("https://www.excelexperts.com.au"),
  alternates: {
    languages: {
      "en-AU": "/",
      en: "/",
      "x-default": "/",
    },
  },

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
      <body className={`${aptos.variable} ${garamond.variable}`}>
        <HeadTop />
        <Header />
        {children}
        <CookieConsent />
        <Footer />
        <Copyright />
        <ScrollBtn />
        <ScrollIndicator />
      </body>
    </html>
  );
}
