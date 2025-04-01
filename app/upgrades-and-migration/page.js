import React from "react";

import PageSegmentMain from "./(components)/PageSegmentMain";
import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import ExpertsAwait from "../../components/ExpertsAwait";
import ServicePageCards from "./(components)/ServicePageCards";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment3 from "./(components)/PageSegment3";
import PageSegment3copy from "./(components)/PageSegment3copy";
import PageSegmentDropdowns from "./(components)/PageSegmentDropdowns";

import marker from "../../public/pageHeros/marker.webp";
import coffeeMob from "../../public/pageHeros/mob/coffeeMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
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
