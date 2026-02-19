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

import centralCoastCode from "../../public/pageHeros/centralCoastCode.webp";
import centralCoastCodeMob from "../../public/pageHeros/mob/centralCoastCodeMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-central-coast-nsw#business",
      name: "Excel Programmers Central Coast NSW - Excel Experts",
      image: "https://www.excelexperts.com.au/logo.png",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-central-coast-nsw",
      url: "https://www.excelexperts.com.au/excel-programmers-central-coast-nsw",
      telephone: "1300 10 28 10",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Central Coast NSW",
        "@id": "https://en.wikipedia.org/wiki/Central_Coast_(New_South_Wales)",
      },
    },
    {
      "@type": "Service",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-central-coast-nsw#service",
      serviceType: "Excel Programming and VBA Development",
      provider: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-central-coast-nsw#business",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Central Coast NSW",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Excel Programming Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VBA Macro Development",
              description:
                "Professional VBA programming and macro automation for Excel workbooks",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Workflow Automation",
              description:
                "Automated business processes and efficient workflows for Excel applications",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Spreadsheet Solutions",
              description:
                "Bespoke Excel applications tailored to specific business requirements",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Formula Engineering",
              description:
                "Advanced formula development and custom calculation solutions for Excel",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-central-coast-nsw",
      url: "https://www.excelexperts.com.au/excel-programmers-central-coast-nsw",
      name: "Excel Programmers Central Coast NSW",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      datePublished: "2026-02-19T00:00:00+00:00",
      dateModified: "2026-02-19T00:00:00+00:00",
      description:
        "Central Coast's dedicated Excel programmers with 25+ years experience. Get a free consultation today and learn how we can help fix spreadsheet errors and automate your business processes.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-central-coast-nsw#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/excel-programmers-central-coast-nsw",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-central-coast-nsw#breadcrumb",
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
          name: "Excel Programmers Central Coast NSW",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-central-coast-nsw#professional",
      name: "Excel Programmers Central Coast NSW",
      description:
        "Specialist Excel programming and VBA automation services for the Central Coast region of NSW",
      provider: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-central-coast-nsw#business",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Central Coast NSW",
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
        title="Central Coast NSW Excel Programmers"
        desktopImage={centralCoastCode}
        mobileImage={centralCoastCodeMob}
        altDesk="Programming code with Central Coast landscape"
        altMob="Programming code with Central Coast landscape"
      />
      <PageSegmentMain />
      <ServicesSection />
      <TeamCardGrid location="centralCoast" />
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
