// app/custom-design-and-development/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";

import CustomDesignHero from "./(components)/CustomDesignHero";

const CustomDesignIntegrations = dynamic(
  () => import("./(components)/CustomDesignIntegrations"),
);
const CustomDesignIndustries = dynamic(
  () => import("./(components)/CustomDesignIndustries"),
);
const CustomDesignServices = dynamic(
  () => import("./(components)/CustomDesignServices"),
);
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const Contact = dynamic(() => import("../../components/Contact"));

import custom from "../../public/pageHeros/custom.webp";
import customMob from "../../public/pageHeros/mob/customMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(
      "https://www.excelexperts.com.au",
      "Excel Experts",
      "Australia-wide Microsoft Excel Programming, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/custom-design-and-development",
      url: "https://www.excelexperts.com.au/custom-design-and-development",
      name: "Custom Design and Development | Excel Experts",
      isPartOf: { "@id": "https://www.excelexperts.com.au#website" },
      about: { "@id": "https://www.excelexperts.com.au#organization" },
      datePublished: "2018-01-02T13:09:44+00:00",
      dateModified: "2026-06-03T00:30:41+00:00",
      description:
        "Struggling with manual Excel processes or complex spreadsheets? We design and develop custom Excel solutions that automate work, improve accuracy, and streamline reporting.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/custom-design-and-development#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/custom-design-and-development",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/custom-design-and-development#breadcrumb",
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
          name: "Custom Design and Development",
          item: "https://www.excelexperts.com.au/custom-design-and-development",
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
        title="Custom Design and Development"
        desktopImage={custom}
        mobileImage={customMob}
        altDesk={"futuristic graphic"}
        altMob={"futuristic graphic"}
      />
      <CustomDesignHero />
      <CustomDesignServices />
      <CustomDesignIntegrations />
      <CustomDesignIndustries />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
