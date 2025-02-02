import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";

import whiteBoard from "../../../../public/pageHeros/whiteBoard.webp";
import calcMob from "../../../../public/pageHeros/mob/calcMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba",
      url: "https://www.excelexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba",
      name: "PowerPoint VBA Automation Services | Expert Presentation Development",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      datePublished: "2018-01-02T16:19:12+00:00",
      dateModified: "2022-11-09T00:28:14+00:00",
      description:
        "Professional PowerPoint VBA automation services including custom programming, data integration, and workflow automation solutions.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba#breadcrumb",
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
          name: "Services",
          item: "https://www.excelexperts.com.au/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft PowerPoint Services",
          item: "https://www.excelexperts.com.au/services/microsoft-powerpoint",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "VBA Automation Services",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-powerpoint/automate-presentations-with-vba#service",
      name: "PowerPoint VBA Automation Services",
      description:
        "Custom VBA programming and automation services for Microsoft PowerPoint presentations, including data integration and workflow optimization.",
      provider: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "PowerPoint VBA Services",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Custom VBA Programming",
            description: "Tailored VBA solutions for PowerPoint automation",
          },
          {
            "@type": "Offer",
            name: "Data Integration",
            description: "Direct data linking to PowerPoint presentations",
          },
          {
            "@type": "Offer",
            name: "Workflow Automation",
            description: "Streamlined presentation creation and updates",
          },
          {
            "@type": "Offer",
            name: "Training Services",
            description: "Expert guidance on automated presentation systems",
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
        title="Automate Presentations with VBA"
        desktopImage={whiteBoard}
        mobileImage={calcMob}
        altDesk={"Whiteboard in a presentation"}
        altMob={"Calculator on a desk"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
