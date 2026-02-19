import React from "react";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import ServicesSection from "./(components)/ServicesSection";
import TeamCardGrid from "../../components/TeamCardGrid";
import Quote from "./(components)/Quote";
import GoodToKnow from "../../components/GoodToKnow";
import TickSegment from "./(components)/TickSegment";
import Testimonials from "../(components)/Testimonials";
import ExpertsAwait from "../../components/ExpertsAwait";
import Contact from "../../components/Contact";

import { testimonials } from "../../testimonials";
import { filterAndSortTestimonials } from "../../utils/filterTestimonials";

const filteredTestimonials = filterAndSortTestimonials(testimonials, "excel");

import northernRiversCode from "../../public/pageHeros/northernRiversCode.webp";
import northernRiversCodeMob from "../../public/pageHeros/mob/northernRiversCodeMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-northern-rivers-nsw#business",
      name: "Excel Programmers Northern Rivers NSW - Excel Experts",
      image: "https://www.excelexperts.com.au/logo.png",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-northern-rivers-nsw",
      url: "https://www.excelexperts.com.au/excel-programmers-northern-rivers-nsw",
      telephone: "1300 10 28 10",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Northern Rivers NSW",
        "@id": "https://en.wikipedia.org/wiki/Northern_Rivers_NSW",
      },
    },
    {
      "@type": "Service",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-northern-rivers-nsw#service",
      serviceType: "Excel Programming and VBA Development",
      provider: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-northern-rivers-nsw#business",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Northern Rivers NSW",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Excel Programming Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VBA Macro Solutions",
              description:
                "Tailored VBA programming and macro automation for Excel workbooks",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Workflow Automation",
              description:
                "Automated business processes and streamlined workflows for Excel",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Spreadsheet Development",
              description:
                "Bespoke Excel applications designed for specific business requirements",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Advanced Formula Engineering",
              description:
                "Complex formula development and custom function creation for Excel",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-northern-rivers-nsw",
      url: "https://www.excelexperts.com.au/excel-programmers-northern-rivers-nsw",
      name: "Excel Programmers Northern Rivers NSW",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      datePublished: "2026-02-19T00:00:00+00:00",
      dateModified: "2026-02-19T00:00:00+00:00",
      description:
        "Established in the Northern Rivers in 2000, Excel Experts has grown to become a nationwide leader in developing Excel solutions for businesses of all sizes.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-northern-rivers-nsw#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/excel-programmers-northern-rivers-nsw",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-northern-rivers-nsw#breadcrumb",
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
          name: "Excel Programmers Northern Rivers NSW",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-northern-rivers-nsw#professional",
      name: "Excel Programmers Northern Rivers NSW",
      description:
        "Specialist Excel programming and VBA automation services for the Northern Rivers region of NSW",
      provider: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-northern-rivers-nsw#business",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Northern Rivers NSW",
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
        title="Excel Programming Specialists for Northern Rivers NSW"
        desktopImage={northernRiversCode}
        mobileImage={northernRiversCodeMob}
        altDesk="Programming code with Northern Rivers landscape"
        altMob="Programming code with Northern Rivers landscape"
      />
      <PageSegmentMain />
      <ServicesSection />
      <TeamCardGrid location="northernRivers" />
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
