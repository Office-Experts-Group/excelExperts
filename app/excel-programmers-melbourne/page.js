import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const ServicesSection = dynamic(() => import("./(components)/ServicesSection"));
const TeamCardGrid = dynamic(() => import("../../components/TeamCardGrid"));
const Quote = dynamic(() => import("./(components)/Quote"));
const GoodToKnow = dynamic(() => import("../../components/GoodToKnow"));
const TickSegment = dynamic(() => import("./(components)/TickSegment"));
const Testimonials = dynamic(() => import("../(components)/Testimonials"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const Contact = dynamic(() => import("../../components/Contact"));

import { testimonials } from "../../testimonials";
import { filterAndSortTestimonials } from "../../utils/filterTestimonials";

const filteredTestimonials = filterAndSortTestimonials(testimonials, "excel");

import melbourneCode from "../../public/pageHeros/melbourneCode.webp";
import melbourneCodeMob from "../../public/pageHeros/mob/melbourneCodeMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-melbourne#business",
      name: "Excel Programmers Melbourne - Excel Experts",
      image: "https://www.excelexperts.com.au/logo.png",
      "@id": "https://www.excelexperts.com.au/excel-programmers-melbourne",
      url: "https://www.excelexperts.com.au/excel-programmers-melbourne",
      telephone: "1300 10 28 10",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      areaServed: {
        "@type": "City",
        name: "Melbourne",
        "@id": "https://en.wikipedia.org/wiki/Melbourne",
      },
    },
    {
      "@type": "Service",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-melbourne#service",
      serviceType: "Excel Programming and VBA Development",
      provider: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-melbourne#business",
      },
      areaServed: {
        "@type": "City",
        name: "Melbourne",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Excel Programming Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom VBA Development",
              description:
                "Tailored VBA programming and macro solutions for Excel automation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Spreadsheet Automation",
              description:
                "Automated workflows and efficient processes for Excel workbooks",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bespoke Excel Development",
              description:
                "Custom spreadsheet design and development for specific business requirements",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Advanced Formula Solutions",
              description:
                "Complex formula development and custom function creation for Excel",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/excel-programmers-melbourne",
      url: "https://www.excelexperts.com.au/excel-programmers-melbourne",
      name: "Excel Programmers Melbourne",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      datePublished: "2026-02-10T00:00:00+00:00",
      dateModified: "2026-02-19T00:00:00+00:00",
      description:
        "Professional Excel programmers in Melbourne offering 25+ years expertise. Custom VBA solutions, spreadsheet development, macro automation and advanced formula creation.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-melbourne#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/excel-programmers-melbourne",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-melbourne#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.excelexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Excel Programmers Melbourne",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-melbourne#professional",
      name: "Excel Programmers Melbourne",
      description:
        "Expert Excel programming and custom VBA development services in Melbourne",
      provider: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-melbourne#business",
      },
      areaServed: {
        "@type": "City",
        name: "Melbourne",
      },
    },
  ],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title="Melbourne-based Excel Programming Specialists"
        desktopImage={melbourneCode}
        mobileImage={melbourneCodeMob}
        altDesk="Programming code overlaying Melbourne cityscape"
        altMob="Programming code overlaying Melbourne cityscape"
      />
      <PageSegmentMain />
      <ServicesSection />
      <TeamCardGrid location="melbourne" />
      <Quote />
      <GoodToKnow altText={true} />
      <TickSegment />
      <Testimonials testimonials={filteredTestimonials} />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
