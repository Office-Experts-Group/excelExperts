import React from "react";

import ServiceHero from "../../components/ServiceHero";
import ExpertsAwait from "../../components/ExpertsAwait";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import FAQ from "../../components/FAQSection";

import { faqs } from "../../faqs/pivot-tables.js";

import graphTable from "../../public/pageHeros/graphTable.webp";
import graphTableMob from "../../public/pageHeros/mob/graphTableMob.webp";

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
      "@id":
        "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions",
      url: "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions",
      name: "Pivot Tables, Charts & Reporting Solutions | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      datePublished: "2018-01-02T16:19:12+00:00",
      dateModified: "2025-03-31T00:28:14+00:00",
      description:
        "We are Reporting Solution Experts! If you need help with charting, pivot charts, pivot tables or any other Excel features then our experts can help.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions#breadcrumb",
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
          name: "Pivot Tables, Charts and Reporting Solutions",
          item: "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions",
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
        title="Pivot Tables, Charts and Reporting"
        desktopImage={graphTable}
        mobileImage={graphTableMob}
        altDesk={"graphs on a table"}
        altMob={"graphs on a table"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <ExpertsAwait />
      <div style={{ marginTop: "6em" }}>
        <FAQ faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
