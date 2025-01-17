import React from "react";

import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import VideoSegment from "./(components)/VideoSegment";
import ExpertsAwait from "../../components/ExpertsAwait";
import FAQ from "../../components/FAQSection";

import faqs from "../../faqs/custom-formulas";

import notes from "../../public/pageHeros/notes.webp";
import codeMob from "../../public/pageHeros/mob/codeMob.webp";

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
        "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas/",
      url: "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas/",
      name: "Excel Formulas and Custom Formulas | Excel Expert",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au/#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      datePublished: "2018-08-31T22:15:28+00:00",
      dateModified: "2022-11-09T01:37:16+00:00",
      description:
        "We provide Office Microsoft Excel Help Support and Training in Australia. Visit www.officeexperts.com.au to get more info",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.excelexperts.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Excel Formulas and Custom Formulas",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.excelexperts.com.au/#website",
      url: "https://www.excelexperts.com.au/",
      name: "Excel Experts - Microsoft Excel Design, Development and Consulting, Office Experts Group",
      description:
        "Your Microsoft Technology Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.excelexperts.com.au/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-AU",
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
      <div style={{ marginTop: "6rem" }}>
        <FAQ faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
