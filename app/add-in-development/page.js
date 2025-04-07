import React from "react";

import PageSegmentMain from "./(components)/PageSegmentMain";
import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import ExpertsAwait from "../../components/ExpertsAwait";
import ServicePageCards from "./(components)/ServicePageCards";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegment3 from "./(components)/PageSegment3";
import Segment3copy from "./(components)/Segment3copy";
import Segment4Copy from "./(components)/Segment4Copy";
import FAQ from "../../components/FAQSection";

import faqs from "../../faqs/add-in-development";

import calculator from "../../public/pageHeros/calculator.webp";
import calcMob from "../../public/pageHeros/mob/calcMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/add-in-development",
      url: "https://www.excelexperts.com.au/add-in-development",
      name: "Add in Development | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      datePublished: "2018-01-02T15:23:26+00:00",
      dateModified: "2025-03-31T00:17:29+00:00",
      description:
        "What is an Excel Add-In? An Excel add-in contains code that adds additional functionality to Excel, usually in the form of new functions. Call us 1300102810",
      breadcrumb: {
        "@id": "https://www.excelexperts.com.au/add-in-development#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/add-in-development"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.excelexperts.com.au/add-in-development#breadcrumb",
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
          name: "Add-in Development",
          item: "https://www.excelexperts.com.au/add-in-development",
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
        title={"Add-in Development"}
        desktopImage={calculator}
        mobileImage={calcMob}
        altDesk={"Calculator on a table"}
        altMob={"Calculator on a table"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <PageSegment4 />
      <PageSegment3 />
      <ExpertsAwait />
      <Segment3copy />
      <Segment4Copy />
      <FAQ faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
