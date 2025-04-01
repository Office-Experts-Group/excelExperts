import React from "react";

import ServiceHero from "../../components/ServiceHero";
import ExpertsAwait from "../../components/ExpertsAwait";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegmentCenter from "./(components)/PageSegmentCenter";
import PageSegment3 from "./(components)/PageSegment3";
import Segment3Copy from "./(components)/Segment3Copy";
import Promo from "./(components)/Promo";

import graphic from "../../public/pageHeros/graphic.webp";
import graph from "../../public/pageHeros/mob/graph.webp";

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
