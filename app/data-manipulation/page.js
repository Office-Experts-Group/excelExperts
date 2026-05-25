// app/data-manipulation/page.js

import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import DataManipulationHero from "./(components)/DataManipulationHero";
import DataManipulationProblem from "./(components)/DataManipulationProblem";
import DataManipulationServices from "./(components)/DataManipulationServices";
import DataManipulationProcess from "./(components)/DataManipulationProcess";
import DataManipulationComparison from "./(components)/DataManipulationComparison";
import DataManipulationCta from "./(components)/DataManipulationCta";
const Contact = dynamic(() => import("../../components/Contact"));

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

import dataManipulation from "../../public/pageHeros/dataManipulation.webp";
import dataManipulationMob from "../../public/pageHeros/mob/dataManipulationMob.webp";

const PAGE_URL = "https://www.excelexperts.com.au/data-manipulation";

// ── Structured data ────────────────────────────────────────
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(
      "https://www.excelsexperts.com.au",
      "Excel Experts",
      "Australia-wide Microsoft Excel Programming, Development and Consulting Experts",
    ),

    // WebPage
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Excel Data Manipulation Services Australia | Power Query & VBA Experts",
      description:
        "Excel data automation specialists helping businesses simplify imports, exports, formatting and complex data manipulation using VBA. Free initial assessment",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      datePublished: "2026-05-25T00:00:00+10:00",
      dateModified: "2026-05-25T00:00:00+10:00",
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [PAGE_URL],
        },
      ],
    },

    // BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
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
          name: "Data Manipulation",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// ── Page component ─────────────────────────────────────────
const Page = () => {
  return (
    <>
      {/* Structured data scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <ServiceHero
        title="Excel Data Manipulation & Automation Services"
        desktopImage={dataManipulation}
        mobileImage={dataManipulationMob}
        altDesk={"Data Manipulation with Excel"}
        altMob={"Data Manipulation with Excel"}
      />
      <DataManipulationHero />
      <DataManipulationProblem />
      <DataManipulationServices />
      <DataManipulationProcess />
      <DataManipulationComparison />
      <DataManipulationCta />
      <Contact />
    </>
  );
};

export default Page;
