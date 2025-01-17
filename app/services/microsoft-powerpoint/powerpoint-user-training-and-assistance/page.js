import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Promo from "../../../../components/Promo";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";
import PageSegment4 from "./(components)/PageSegment4";

import handShake from "../../../../public/pageHeros/handShake.webp";
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
        "https://www.excelexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance/",
      url: "https://www.excelexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance/",
      name: "PowerPoint Training & Expert Assistance Services | Professional Support",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au/#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      datePublished: "2018-01-02T16:19:12+00:00",
      dateModified: "2022-11-09T00:28:14+00:00",
      description:
        "Professional PowerPoint training and assistance services including remote support, custom training sessions, and expert troubleshooting.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance/#breadcrumb",
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
          name: "Training and Assistance",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance/#service",
      name: "PowerPoint Training and Assistance Services",
      description:
        "Professional PowerPoint training and support services including remote assistance, custom training programs, and expert troubleshooting.",
      provider: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "PowerPoint Training Services",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Custom Training Programs",
            description: "Task-specific training for groups or individuals",
          },
          {
            "@type": "Offer",
            name: "Remote Support",
            description: "Instant help and advice via remote access",
          },
          {
            "@type": "Offer",
            name: "Onsite Training",
            description: "Professional training at your location",
          },
          {
            "@type": "Offer",
            name: "Troubleshooting Services",
            description: "Expert assistance with PowerPoint issues",
          },
          {
            "@type": "Offer",
            name: "How-To Videos",
            description: "Custom instructional video content",
          },
          {
            "@type": "Offer",
            name: "Upgrade Assistance",
            description: "Help with PowerPoint upgrades and migrations",
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
        title="PowerPoint User Training and Assistance"
        desktopImage={handShake}
        mobileImage={glassesMob}
        altDesk={"handshake between two persons"}
        altMob={"glasses on a table"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <ExpertsAwait />
      <Promo
        h2={"Get Trained By Experts!"}
        p={
          "Our PowerPoint experts can instruct users on the best ways to create presentations giving guidance and helpful hints."
        }
      />
      <PageSegment4 />
      <Contact />
    </>
  );
};

export default Page;
