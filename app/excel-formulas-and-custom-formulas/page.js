// app/services/excel/excel-formulas-and-custom-formulas/page.js

import React from "react";
import dynamic from "next/dynamic";

// ServiceHero and first component are above the fold — import directly
import ServiceHero from "../../components/ServiceHero";
import FormulasIntro from "./(components)/FormulasIntro";

// Below-the-fold components loaded dynamically
const FormulasDark = dynamic(() => import("./(components)/FormulasDark"));
const VideoSegment = dynamic(() => import("./(components)/VideoSegment"));
const FormulasWhyChoose = dynamic(
  () => import("./(components)/FormulasWhyChoose"),
);
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
const Contact = dynamic(() => import("../../components/Contact"));

import formulas from "../../public/pageHeros/formulas.webp";
import formulasMob from "../../public/pageHeros/mob/formulasMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

/* ─── Schema ─────────────────────────────────────────────────────────────── */
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
      "@id":
        "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas",
      url: "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas",
      name: "Excel Formulas and Custom Formulas | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      datePublished: "2018-08-31T22:15:28+00:00",
      dateModified: "2025-06-06T00:00:00+00:00",
      description:
        "Get expert help with complex Excel formulas and custom formula solutions. Our specialists simplify calculations, improve workbook performance, and implement unique business logic. Remote or onsite support available across Australia.",
      inLanguage: "en-AU",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas#breadcrumb",
      },
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas#breadcrumb",
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
          name: "Excel Formulas and Custom Formulas",
          item: "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas",
        },
      ],
    },
    {
      // Describes the specific service offered on this page
      "@type": "Service",
      "@id":
        "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas#service",
      name: "Excel Formulas and Custom Formula Development",
      description:
        "Professional Excel formula writing, troubleshooting, and custom formula development. Services include VLOOKUP/XLOOKUP, INDEX/MATCH, SUMIF/SUMPRODUCT, array formulas, and fully bespoke UDF development to extend Excel's native functionality.",
      provider: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      serviceType: "Excel Consulting",
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "Remote and On-site",
        availableLanguage: "English",
      },
    },
  ],
};

/* ─── Page ───────────────────────────────────────────────────────────────── */
const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={"Excel Custom Formulas"}
        desktopImage={formulas}
        mobileImage={formulasMob}
        altDesk={"excel formulas digital design"}
        altMob={"excel formulas digital design"}
      />
      <FormulasIntro />
      <FormulasDark />
      <VideoSegment />
      <FormulasWhyChoose />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Costing and forecasting models we have built"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/private-client-cashflow-forecasting-tool",
            linkText: "See the break-even income model",
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
            href: "https://www.officeexperts.com.au/case-studies/food-manufacturer-excel-costing-workbook",
            linkText: "Read how costs flow through the workbook",
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
