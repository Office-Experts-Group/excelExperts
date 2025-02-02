import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegmentSmall from "./(components)/PageSegmentSmall";
import PageSegment4 from "./(components)/PageSegment4";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import Promo from "../../../../components/Promo";
import FAQSection from "../../../../components/FAQSection";

import faqs from "../../../../faqs/access-online.js";

import pen from "../../../../public/pageHeros/pen.webp";
import seatMob from "../../../../public/pageHeros/mob/seatMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://excelexperts.com.au/services/microsoft-access/access-online",
      url: "https://excelexperts.com.au/services/microsoft-access/access-online",
      name: "Online Microsoft Access Solutions & Remote Database Services",
      isPartOf: {
        "@id": "https://excelexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Professional online Microsoft Access database services. Remote consulting, development, and support for all your database needs.",
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://excelexperts.com.au/services/microsoft-access/access-online",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://excelexperts.com.au/services/microsoft-access/access-online#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://excelexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://excelexperts.com.au/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Access",
          item: "https://excelexperts.com.au/services/microsoft-access",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Access Online",
          item: "https://excelexperts.com.au/services/microsoft-access/access-online",
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
        title="Online Access Database Solutions"
        desktopImage={pen}
        mobileImage={seatMob}
        altDesk={"Pen held infront of graphs"}
        altMob={"office environment"}
      />
      <PageSegmentMain />
      <PageSegmentSmall />
      <PageSegment4 />
      <ExpertsAwait />
      <Promo
        h2="iPad and iPhone Solutions"
        p="We often get asked, “What about iPads and iPhones?” …and yes, it is possible to create limited solutions using these and other platforms."
      />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
