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

import perthCode from "../../public/pageHeros/perthCode.webp";
import perthCodeMob from "../../public/pageHeros/mob/perthCodeMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.excelexperts.com.au/excel-programmers-perth#business",
      name: "Excel Programmers Perth - Excel Experts",
      image: "https://www.excelexperts.com.au/logo.png",
      "@id": "https://www.excelexperts.com.au/excel-programmers-perth",
      url: "https://www.excelexperts.com.au/excel-programmers-perth",
      telephone: "1300 10 28 10",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      areaServed: {
        "@type": "City",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.excelexperts.com.au/excel-programmers-perth#service",
      serviceType: "Excel Programming and VBA Development",
      provider: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-perth#business",
      },
      areaServed: {
        "@type": "City",
        name: "Perth",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Excel Programming Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VBA Programming Services",
              description:
                "Expert VBA development and macro automation for Excel workbooks",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Spreadsheet Automation",
              description:
                "Automated business workflows and processes for Excel applications",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Excel Applications",
              description:
                "Bespoke spreadsheet solutions tailored to specific business needs",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Formula Development",
              description:
                "Advanced formula engineering and custom calculation solutions",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/excel-programmers-perth",
      url: "https://www.excelexperts.com.au/excel-programmers-perth",
      name: "Excel Programmers Perth",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      datePublished: "2026-02-19T00:00:00+00:00",
      dateModified: "2026-02-19T00:00:00+00:00",
      description:
        "Perth's trusted Excel programmers with 25+ years experience. Get in touch for a free consultation and find out how we can help fix spreadsheet errors and automate your business processes.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-perth#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/excel-programmers-perth"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-perth#breadcrumb",
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
          name: "Excel Programmers Perth",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id":
        "https://www.excelexperts.com.au/excel-programmers-perth#professional",
      name: "Excel Programmers Perth",
      description:
        "Professional Excel programming and VBA development services in Perth, Western Australia",
      provider: {
        "@id":
          "https://www.excelexperts.com.au/excel-programmers-perth#business",
      },
      areaServed: {
        "@type": "City",
        name: "Perth",
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
        title="Perth's Excel Programming Team"
        desktopImage={perthCode}
        mobileImage={perthCodeMob}
        altDesk="Programming code with Perth cityscape"
        altMob="Programming code with Perth cityscape"
      />
      <PageSegmentMain />
      <ServicesSection />
      <TeamCardGrid location="perth" />
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
