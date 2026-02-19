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

import goldCoastCode from "../../public/pageHeros/goldCoastCode.webp";
import goldCoastCodeMob from "../../public/pageHeros/mob/goldCoastCodeMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-gold-coast#business",
      name: "Excel Programmers Gold Coast - Excel Experts",
      image: "https://www.excelexperts.com.au/logo.png",
      "@id": "https://www.excelexperts.com.au/excel-programmers-gold-coast",
      url: "https://www.excelexperts.com.au/excel-programmers-gold-coast",
      telephone: "1300 10 28 10",
      areaServed: {
        "@type": "City",
        name: "Gold Coast",
        "@id": "https://en.wikipedia.org/wiki/Gold_Coast,_Queensland",
      },
    },
    {
      "@type": "Service",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-gold-coast#service",
      serviceType: "Excel Programming and VBA Development",
      provider: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-gold-coast#business",
      },
      areaServed: {
        "@type": "City",
        name: "Gold Coast",
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
                "Custom VBA programming and macro automation solutions for Excel workbooks",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Spreadsheet Automation",
              description:
                "Automated business processes and streamlined workflows for Excel applications",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Excel Solutions",
              description:
                "Bespoke spreadsheet applications designed for specific business requirements",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Advanced Formula Development",
              description:
                "Complex formula engineering and custom calculation solutions for Excel",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/excel-programmers-gold-coast",
      url: "https://www.excelexperts.com.au/excel-programmers-gold-coast",
      name: "Excel Programmers Gold Coast | VBA Macro Automation & Custom Development",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      datePublished: "2026-02-19T00:00:00+00:00",
      dateModified: "2026-02-19T00:00:00+00:00",
      description:
        "Gold Coast's experienced Excel programmers with 25+ years expertise. Backed with a nationwide team of Microsoft experts. Contact us now for a free consultation.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-gold-coast#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/excel-programmers-gold-coast",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-gold-coast#breadcrumb",
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
          name: "Excel Programmers Gold Coast",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-gold-coast#professional",
      name: "Excel Programmers Gold Coast",
      description:
        "Expert Excel programming and VBA automation services for the Gold Coast region",
      provider: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-gold-coast#business",
      },
      areaServed: {
        "@type": "City",
        name: "Gold Coast",
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
        title="Gold Coast Excel Programming Professionals"
        desktopImage={goldCoastCode}
        mobileImage={goldCoastCodeMob}
        altDesk="Programming code with Gold Coast skyline"
        altMob="Programming code with Gold Coast skyline"
      />
      <PageSegmentMain />
      <ServicesSection />
      <TeamCardGrid location="goldCoast" />
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
