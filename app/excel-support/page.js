import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const Promo = dynamic(() => import("../../components/Promo"));
const Contact = dynamic(() => import("../../components/Contact"));
const PageSegmentCenter = dynamic(
  () => import("./(components)/PageSegmentCenter"),
);
const PageSegment3 = dynamic(() => import("./(components)/PageSegment3"));

import handShake from "../../public/pageHeros/handShake.webp";
import graphTableMob from "../../public/pageHeros/mob/graphTableMob.webp";

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
      "@id": "https://www.excelexperts.com.au/excel-support",
      url: "https://www.excelexperts.com.au/excel-support",
      name: "Help Support & Training | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      datePublished: "2018-01-02T16:30:22+00:00",
      dateModified: "2025-03-09T00:29:31+00:00",
      description:
        "Professional Support and training from Highly Experienced Consultants. Excel Experts Help Resolve Your Issues Onsite or via Remote Access. Australia Wide. Call 1300 102 810",
      breadcrumb: {
        "@id": "https://www.excelexperts.com.au/excel-support#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/excel-support"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.excelexperts.com.au/excel-support#breadcrumb",
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
          name: "Microsoft Excel: Help and Training",
          item: "https://www.excelexperts.com.au/excel-support",
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
        title="Excel Support & Training"
        desktopImage={handShake}
        mobileImage={graphTableMob}
        altDesk={"hands shaking"}
        altMob={"graphs on a table"}
      />
      <PageSegmentMain />
      <PageSegmentCenter />
      <PageSegment3 />
      <ExpertsAwait />
      <Promo
        h2="Master Excel with Expert Training"
        p="Gain the skills you need with task-specific, cost-effective training. Whether remote or onsite, our experienced trainers are here to help you succeed."
      />
      <Contact />
    </>
  );
};

export default Page;
