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

import sydneyCode from "../../public/pageHeros/sydneyCode.webp";
import sydneyCodeMob from "../../public/pageHeros/mob/sydneyCodeMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-sydney#business",
      name: "Excel Programmers Sydney - Excel Experts",
      image: "https://www.excelexperts.com.au/logo.png",
      "@id": "https://www.excelexperts.com.au/excel-programmers-sydney",
      url: "https://www.excelexperts.com.au/excel-programmers-sydney",
      telephone: "1300 10 28 10",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      areaServed: {
        "@type": "City",
        name: "Sydney",
        "@id": "https://en.wikipedia.org/wiki/Sydney",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.excelexperts.com.au/excel-programmers-sydney#service",
      serviceType: "Excel Programming and VBA Development",
      provider: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-sydney#business",
      },
      areaServed: {
        "@type": "City",
        name: "Sydney",
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
                "Custom VBA programming and macro automation for Excel spreadsheets",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Excel Automation",
              description:
                "Automated workflows and processes for Excel spreadsheets",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Excel Solutions",
              description:
                "Bespoke spreadsheet design and development tailored to business needs",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Formula Development",
              description:
                "Complex Excel formulas and custom function development",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/excel-programmers-sydney",
      url: "https://www.excelexperts.com.au/excel-programmers-sydney",
      name: "Excel Programmers Sydney",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      datePublished: "2026-02-10T00:00:00+00:00",
      dateModified: "2026-02-19T00:00:00+00:00",
      description:
        "Expert Excel programmers in Sydney with 25+ years of experience. Get a free consultation today from Australia's leading Excel experts.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-sydney#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/excel-programmers-sydney"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-sydney#breadcrumb",
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
          name: "Excel Programmers Sydney",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-sydney#professional",
      name: "Excel Programmers Sydney",
      description:
        "Professional Excel programming and VBA development services in Sydney",
      provider: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-sydney#business",
      },
      areaServed: {
        "@type": "City",
        name: "Sydney",
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
        title="Our Sydney-based Excel Programmers"
        desktopImage={sydneyCode}
        mobileImage={sydneyCodeMob}
        altDesk="Computer code over the Sydney Opera House"
        altMob="Computer code over the Sydney Opera House"
      />
      <PageSegmentMain />
      <ServicesSection />
      <TeamCardGrid location="sydney" />
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
