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

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/vba-macro-development/",
      url: "https://www.excelexperts.com.au/vba-macro-development/",
      name: "VBA Macro Developers | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au/#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      datePublished: "2018-12-10T04:46:06+00:00",
      dateModified: "2022-12-04T23:31:33+00:00",
      description:
        "Meet our expert team and know about their special skills. Get in touch for more information.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/vba-macro-development/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/vba-macro-development/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/vba-macro-development/#breadcrumb",
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
          name: "VBA Macro Development",
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
