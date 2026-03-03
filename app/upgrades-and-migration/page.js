import React from "react";
import dynamic from "next/dynamic";

import PageSegmentMain from "./(components)/PageSegmentMain";
import ServiceHero from "../../components/ServiceHero";

const Contact = dynamic(() => import("../../components/Contact"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const ServicePageCards = dynamic(
  () => import("./(components)/ServicePageCards"),
);
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const PageSegment3 = dynamic(() => import("./(components)/PageSegment3"));
const PageSegment3copy = dynamic(
  () => import("./(components)/PageSegment3copy"),
);
const PageSegmentDropdowns = dynamic(
  () => import("./(components)/PageSegmentDropdowns"),
);

import marker from "../../public/pageHeros/marker.webp";
import coffeeMob from "../../public/pageHeros/mob/coffeeMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.excelsexperts.com.au",
      "Excel Experts",
      "Australia-wide Microsoft Excel Programming, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/upgrades-and-migration",
      url: "https://www.excelexperts.com.au/upgrades-and-migration",
      name: "Excel Upgrades and Migration | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      datePublished: "2017-11-26T03:05:43+00:00",
      dateModified: "2025-03-09T01:38:27+00:00",
      description:
        "Stuck on an Old Version? Are you experiencing the cold reality or unsettling concerns that your Microsoft Office workbooks, documents. Call us 1300102810",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/upgrades-and-migration#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/upgrades-and-migration"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/upgrades-and-migration#breadcrumb",
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
          name: "Upgrades and Migration",
          item: "https://www.excelexperts.com.au/upgrades-and-migration",
        },
      ],
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
        title={"Upgrades and Migration"}
        desktopImage={marker}
        mobileImage={coffeeMob}
        altDesk={"marker"}
        altMob={"coffee on a desk"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <PageSegment4 />
      <PageSegment3 />
      <ExpertsAwait />
      <PageSegmentDropdowns />
      <PageSegment3copy />
      <Contact />
    </>
  );
};

export default Page;
