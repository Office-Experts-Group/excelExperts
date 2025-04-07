import React from "react";

import ExpertsAwait from "../../../../components/ExpertsAwait";
import FAQSection from "../../../../components/FAQSection";
import ServiceHero from "../../../../components/ServiceHero";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";

import faqs from "../../../../faqs/custom-toolbars";

import puzzle from "../../../../public/pageHeros/puzzle.webp";
import puzzleMob from "../../../../public/pageHeros/mob/puzzleMob.webp";

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
        "https://www.excelexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons",
      url: "https://www.excelexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons",
      name: "Excel-Integrated Toolbars | Excel-Word Integration Tools | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons#breadcrumb",
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
          name: "Our Microsoft Word Services",
          item: "https://www.excelexperts.com.au/services/microsoft-word",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Custom Toolbars and Ribbons",
          item: "https://www.excelexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons",
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
        title="Custom Toolbars and Ribbons"
        desktopImage={puzzle}
        mobileImage={puzzleMob}
        altDesk={"people holding large puzzle pieces"}
        altMob={"people holding large puzzle pieces"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <ExpertsAwait />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
