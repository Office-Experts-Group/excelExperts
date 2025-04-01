import React from "react";

import ServiceHero from "../../components/ServiceHero";
import ExpertsAwait from "../../components/ExpertsAwait";
import Promo from "../../components/Promo";
import Contact from "../../components/Contact";
import PageSegmentMain2 from "./(components)/PageSegmentMain2";

import graphic from "../../public/pageHeros/graphic.webp";
import graph from "../../public/pageHeros/mob/graph.webp";

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
      "@id": "https://www.excelexperts.com.au/data-manipulation",
      url: "https://www.excelexperts.com.au/data-manipulation",
      name: "Data Manipulation | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      datePublished: "2018-07-15T14:27:59+00:00",
      dateModified: "2025-03-31T00:22:11+00:00",
      description:
        "We are experts in Data import/export, parsing and processing Data formatting automation, automated data manipulation solutions using VBA. Call us 1300102810",
      breadcrumb: {
        "@id": "https://www.excelexperts.com.au/data-manipulation#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/data-manipulation"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.excelexperts.com.au/data-manipulation#breadcrumb",
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
          name: "Data Manipulation",
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
        title="Data Manipulation"
        desktopImage={graphic}
        mobileImage={graph}
        altDesk={"graphic design"}
        altMob={"graphs on a table"}
      />
      <PageSegmentMain2 />

      <ExpertsAwait />
      <Promo
        h2="Data Automation Made Simple"
        p="Transform tedious data tasks into automated, efficient workflows. From formatting to bulk conversions, we handle it all with precision and speed."
      />
      <Contact />
    </>
  );
};

export default Page;
