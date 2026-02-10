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

import brisbaneCode from "../../public/pageHeros/brisbaneCode.webp";
import brisbaneCodeMob from "../../public/pageHeros/mob/brisbaneCodeMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-brisbane#business",
      name: "Excel Programmers Brisbane - Excel Experts",
      image: "https://www.excelexperts.com.au/logo.png",
      "@id": "https://www.excelexperts.com.au/excel-programmers-brisbane",
      url: "https://www.excelexperts.com.au/excel-programmers-brisbane",
      telephone: "1300 10 28 10",
      areaServed: {
        "@type": "City",
        name: "Brisbane",
        "@id": "https://en.wikipedia.org/wiki/Brisbane",
      },
    },
    {
      "@type": "Service",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-brisbane#service",
      serviceType: "Excel Programming and VBA Development",
      provider: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-brisbane#business",
      },
      areaServed: {
        "@type": "City",
        name: "Brisbane",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Excel Programming Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VBA Development Services",
              description:
                "Professional VBA programming and automation solutions for Excel",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Spreadsheet Automation",
              description:
                "Automated processes and efficient workflows for Excel spreadsheets",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tailored Excel Applications",
              description:
                "Custom-built spreadsheet solutions designed for unique business needs",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Formula Engineering",
              description:
                "Advanced formula development and custom calculation solutions",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/excel-programmers-brisbane",
      url: "https://www.excelexperts.com.au/excel-programmers-brisbane",
      name: "Excel Programmers Brisbane | VBA Development & Automation Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      datePublished: "2026-02-10T00:00:00+00:00",
      dateModified: "2026-02-10T00:00:00+00:00",
      description:
        "Brisbane's leading Excel programmers with 25+ years expertise. Specialising in VBA development, spreadsheet automation, custom solutions and advanced formula engineering.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-brisbane#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/excel-programmers-brisbane",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-brisbane#breadcrumb",
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
          name: "Excel Programmers Brisbane",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-brisbane#professional",
      name: "Excel Programmers Brisbane",
      description:
        "Specialist Excel programming and VBA automation services in Brisbane",
      provider: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-brisbane#business",
      },
      areaServed: {
        "@type": "City",
        name: "Brisbane",
      },
      priceRange: "$$",
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
        title="Expert Excel Programmers in Brisbane"
        desktopImage={brisbaneCode}
        mobileImage={brisbaneCodeMob}
        altDesk="Programming code with Brisbane cityscape"
        altMob="Programming code with Brisbane cityscape"
      />
      <PageSegmentMain />
      <ServicesSection />
      <TeamCardGrid location="brisbane" />
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
