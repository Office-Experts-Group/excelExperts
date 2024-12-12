import React from "react";

import ServiceHero from "../../components/ServiceHero";
import ExpertsAwait from "../../components/ExpertsAwait";
import Promo from "../../components/Promo";
import Contact from "../../components/Contact";
import PageSegmentMain2 from "./(components)/PageSegmentMain2";

import graphic from "../../public/pageHeros/graphic.webp";
import graph from "../../public/pageHeros/mob/graph.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/data-manipulation/",
      url: "https://www.excelexperts.com.au/data-manipulation/",
      name: "Data Manipulation | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au/#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      datePublished: "2018-07-15T14:27:59+00:00",
      dateModified: "2022-11-09T00:22:11+00:00",
      description:
        "We are experts in Data import/export, parsing and processing Data formatting automation, automated data manipulation solutions using VBA. Call us 1300102810",
      breadcrumb: {
        "@id": "https://www.excelexperts.com.au/data-manipulation/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/data-manipulation/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.excelexperts.com.au/data-manipulation/#breadcrumb",
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
          name: "Data Manipulation",
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
