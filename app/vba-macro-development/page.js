import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const Contact = dynamic(() => import("../../components/Contact"));
const PageSegmentCenter = dynamic(
  () => import("./(components)/PageSegmentCenter"),
);
const PageSegment3 = dynamic(() => import("./(components)/PageSegment3"));
const Segment3Copy = dynamic(() => import("./(components)/Segment3Copy"));
const Promo = dynamic(() => import("./(components)/Promo"));

import graphic from "../../public/pageHeros/graphic.webp";
import graph from "../../public/pageHeros/mob/graph.webp";

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
      "@id": "https://www.excelexperts.com.au/vba-macro-development",
      url: "https://www.excelexperts.com.au/vba-macro-development",
      name: "VBA Macro Developers | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      datePublished: "2018-12-10T04:46:06+00:00",
      dateModified: "2025-03-04T23:31:33+00:00",
      description:
        "Expert VBA and macro development services for all Microsoft Office applications. Our experienced programmers create custom automated solutions including form creation, data manipulation, and task automation. ",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/vba-macro-development#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/vba-macro-development"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.excelexperts.com.au/vba-macro-development#breadcrumb",
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
          name: "VBA Macro Development",
          item: "https://www.excelexperts.com.au/vba-macro-development",
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
        title="VBA and Macro Development"
        desktopImage={graphic}
        mobileImage={graph}
        altDesk={"graphic design"}
        altMob={"graphs on a table"}
      />
      <PageSegmentMain />
      <PageSegment3 />
      <PageSegmentCenter />
      <Segment3Copy />
      <Promo />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
