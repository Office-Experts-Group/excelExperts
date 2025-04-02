import React from "react";

import ServiceHero from "../../components/ServiceHero";
import MeetTheTeam from "../../components/MeetTheTeam";
import Contact from "../../components/Contact";

import handShake from "../../public/pageHeros/handShake.webp";
import handShakeMob from "../../public/pageHeros/mob/handShakeMob.webp";

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
      "@id": "https://www.excelexperts.com.au/meet-the-team",
      url: "https://www.excelexperts.com.au/meet-the-team",
      name: "Meet Our Microsoft Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Meet our team of experienced Microsoft Excel consultants. Expert developers and consultants dedicated to delivering quality spreadsheet solutions.",
      breadcrumb: {
        "@id": "https://www.excelexperts.com.au/meet-the-team#breadcrumb",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.excelexperts.com.au/meet-the-team#breadcrumb",
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
          name: "Meet the Team",
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
        title="Meet Our Team"
        desktopImage={handShake}
        mobileImage={handShakeMob}
        altDesk={"handshake"}
        altMob={"handshake"}
        isMeetTeam={true}
      />
      <MeetTheTeam />
      <Contact />
    </>
  );
};

export default Page;
