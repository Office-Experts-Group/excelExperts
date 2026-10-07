// app/custom-design-and-development/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";

import CustomDesignHero from "./(components)/CustomDesignHero";

const CustomDesignIntegrations = dynamic(
  () => import("./(components)/CustomDesignIntegrations"),
);
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
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
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Custom design and development projects, we delivered to happy clients"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/food-manufacturer-excel-costing-workbook",
            linkText: "See the connected costing workbook",
            title:
              "Merging an array of clunky Excel workbooks into one automated costing system",
            description:
              "The client manufactures packaged food products for sale in supermarkets and grocery stores, but built and costed every product using an array of disconnected, in-house Excel workbooks. Data didn't flow between them and key costing components were missing. We rebuilt it as a single Excel Costing Workbook with a forms interface, automatic cost updates, and a restricted Admin view of the core costing data.",
            image:
              "https://www.officeexperts.com.au/case-studies/food-manufacturer-excel-costing-workbookLg.png",
            imageAlt:
              "Single Excel Costing Workbook replacing disconnected costing files",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/private-client-cashflow-forecasting-tool",
            linkText: "Explore the cash flow planning tool",
            title:
              "Turning uneven investment income into one clear monthly figure to plan against",
            description:
              "A private client's investment and business income arrived in seasonal, periodic lumps, while monthly commitments fell steadily regardless, and distribution and tax decisions were being made without a full forward view of cash flow. We built a private planning tool that forecasts cash flow across personal, investment and business, smooths uneven income against steady commitments, and solves for the exact income needed each month.",
            image:
              "https://www.officeexperts.com.au/case-studies/private-client-cashflow-plannerLg.png",
            imageAlt:
              "Private cash flow planning tool forecasting personal, investment and business income",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/custom-quoting-tool",
            linkText: "See how we embedded React into a WordPress site",
            title:
              "Replacing manual quote requests with an instant online tax depreciation calculator",
            description:
              "The client helps property investors understand what they can claim in tax depreciation, but every estimate meant a staff member manually looking up figures and working through the calculation by hand before emailing a quote back. We built a custom React-based calculator, embedded into their WordPress site as a plugin, that gives a property investor an instant, branded estimate by email, with the same result sent straight to the client's team.",
            image:
              "https://www.officeexperts.com.au/case-studies/custom-quoting-tool.png",
            imageAlt:
              "Online tax depreciation calculator giving property investors an instant estimate",
          },
        ]}
      />
      <CustomDesignIndustries />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
