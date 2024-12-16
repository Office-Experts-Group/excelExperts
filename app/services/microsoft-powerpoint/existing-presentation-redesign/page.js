import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";

import tableGraph from "../../../../public/pageHeros/tableGraph.webp";
import graphTableMob from "../../../../public/pageHeros/mob/graphTableMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign/",
      url: "https://www.excelexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign/",
      name: "PowerPoint Presentation Redesign Services | Expert Template Transformation",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au/#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      datePublished: "2018-01-02T16:19:12+00:00",
      dateModified: "2022-11-09T00:28:14+00:00",
      description:
        "Professional PowerPoint presentation redesign services including template transformation, master slide creation, and brand guideline implementation.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign/#breadcrumb",
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
          name: "Services",
          item: "https://www.excelexperts.com.au/services/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft PowerPoint Services",
          item: "https://www.excelexperts.com.au/services/microsoft-powerpoint/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Presentation Redesign Services",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-powerpoint/existing-presentation-redesign/#service",
      name: "PowerPoint Presentation Redesign Services",
      description:
        "Professional presentation transformation services including template redesign, master slide creation, and brand alignment.",
      provider: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Presentation Redesign Services",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Presentation Transformation",
            description:
              "Convert existing presentations into professional templates",
          },
          {
            "@type": "Offer",
            name: "Master Slide Creation",
            description: "Professional slide layouts and designs",
          },
          {
            "@type": "Offer",
            name: "Brand Alignment",
            description: "Update presentations to meet brand guidelines",
          },
          {
            "@type": "Offer",
            name: "Template Modernization",
            description: "Refresh and update existing presentation designs",
          },
        ],
      },
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
        title="Existing Presentation Redesign"
        desktopImage={tableGraph}
        mobileImage={graphTableMob}
        altDesk={"Graphs on a table"}
        altMob={"Graphs on a table"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
