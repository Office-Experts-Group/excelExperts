// app/services/vba-macro-development/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import VbaHero from "./(components)/VbaHero";

const VbaCapabilities = dynamic(() => import("./(components)/VbaCapabilities"));
const VbaAddins = dynamic(() => import("./(components)/VbaAddins"));
const VbaProcess = dynamic(() => import("./(components)/VbaProcess"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
const Contact = dynamic(() => import("../../components/Contact"));

import vba from "../../public/pageHeros/vba.webp";
import vbaMob from "../../public/pageHeros/mob/vbaMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(
      "https://www.excelexperts.com.au",
      "Excel Experts",
      "Australia-wide Microsoft Excel Programming, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/vba-macro-development",
      url: "https://www.excelexperts.com.au/vba-macro-development",
      name: "VBA Macro Developers | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      datePublished: "2018-12-10T04:46:06+00:00",
      dateModified: "2026-05-26T23:31:33+00:00",
      description:
        "Expert VBA and macro development services for all Microsoft Office applications. Our experienced programmers create custom automated solutions including form creation, data manipulation, and task automation.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/vba-macro-development#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/vba-macro-development"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.excelexperts.com.au/vba-macro-development#breadcrumb",
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
          name: "VBA Macro Development",
          item: "https://www.excelexperts.com.au/vba-macro-development",
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
        title={"VBA and Macro Development"}
        desktopImage={vba}
        mobileImage={vbaMob}
        altDesk={"vba development on a computer"}
        altMob={"vba development on a computer"}
      />
      <VbaHero />
      <VbaCapabilities />
      <VbaAddins />
      <VbaProcess />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Custom Excel workbook projects"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/food-manufacturer-excel-costing-workbook",
            linkText: "See the forms and Admin view",
            title:
              "Merging an array of clunky Excel workbooks into one automated costing system",
            description:
              "The client manufactures packaged food products for sale in supermarkets and grocery stores, but built and costed every product using an array of disconnected, in-house Excel workbooks. Data didn't flow between them and key costing components were missing. We rebuilt it as a single Excel Costing Workbook with a forms interface, automatic cost updates, and a restricted Admin view of the core costing data.",
            image:
              "https://www.officeexperts.com.au/case-studies/food-manufacturer-excel-costing-workbookLg.png",
            imageAlt:
              "Single Excel Costing Workbook replacing disconnected costing files",
          },
        ]}
      />
      <Contact />
    </>
  );
};

export default Page;
