import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Contact from "../../../../components/Contact";
import Segment4Repeat from "./(components)/Segment4Repeat";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import FAQSection from "../../../../components/FAQSection";

import faqs from "../../../../faqs/fill-in-forms";

import penPoint from "../../../../public/pageHeros/penPoint.webp";
import glassesMob from "../../../../public/pageHeros/mob/glassesMob.webp";

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
        "https://www.excelexperts.com.au/services/microsoft-word/fill-in-forms",
      url: "https://www.excelexperts.com.au/services/microsoft-word/fill-in-forms",
      name: "Excel-Integrated Word Forms | Data-Driven Form Solutions | Excel Experts",
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
          "https://www.excelexperts.com.au/services/microsoft-word/fill-in-forms#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/services/microsoft-word/fill-in-forms",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-word/fill-in-forms#breadcrumb",
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
          name: "Fill In Forms",
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
        title="Fill In Forms"
        desktopImage={penPoint}
        mobileImage={glassesMob}
        altDesk={"pointing a pen at a computer screen"}
        altMob={"reading glasses on a table"}
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
