import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const Contact = dynamic(() => import("../../components/Contact"));
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const VideoSegment = dynamic(() => import("./(components)/VideoSegment"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const FAQ = dynamic(() => import("../../components/FAQSection"));
const PageSegmentCenter = dynamic(
  () => import("./(components)/PageSegmentCenter"),
);

import faqs from "../../faqs/custom-formulas";

import notes from "../../public/pageHeros/notes.webp";
import codeMob from "../../public/pageHeros/mob/codeMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(
      "https://www.excelsexperts.com.au",
      "Excel Experts",
      "Australia-wide Microsoft Excel Programming, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id":
        "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas",
      url: "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas",
      name: "Excel Formulas and Custom Formulas",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      datePublished: "2018-08-31T22:15:28+00:00",
      dateModified: "2025-03-09T01:37:16+00:00",
      description:
        "Get expert help with complex Excel formulas and custom formula solutions. Our specialists simplify calculations, improve workbook performance, and implement unique business logic. Remote or onsite support available across Australia.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas#breadcrumb",
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
          name: "Excel Formulas and Custom Formulas",
          item: "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas",
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
        title={"Excel Formulas and Custom Formulas"}
        desktopImage={notes}
        mobileImage={codeMob}
        altDesk={"notes on a table"}
        altMob={"code on a laptop"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <VideoSegment />
      <ExpertsAwait />
      <PageSegmentCenter />
      <div style={{ marginTop: "6rem" }}>
        <FAQ faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
