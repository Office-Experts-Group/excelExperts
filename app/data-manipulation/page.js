// app/data-manipulation/page.js

import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import DataManipulationHero from "./(components)/DataManipulationHero";

const DataManipulationProblem = dynamic(
  () => import("./(components)/DataManipulationProblem"),
);
const DataManipulationServices = dynamic(
  () => import("./(components)/DataManipulationServices"),
);
const DataManipulationProcess = dynamic(
  () => import("./(components)/DataManipulationProcess"),
);
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
const DataManipulationComparison = dynamic(
  () => import("./(components)/DataManipulationComparison"),
);
const DataManipulationCta = dynamic(
  () => import("./(components)/DataManipulationCta"),
);
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
      "https://www.excelexperts.com.au",
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
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Excel data consolidation projects"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/community-services-excel-consolidation-rebuild",
            linkText: "See how Power Query replaced linked workbooks",
            title:
              "Replacing an oversized linked spreadsheet with a one-click Power Query refresh",
            description:
              "A four-location community services provider had each site keying records into its own workbook, with a central file pulling them together through direct workbook links, and every new reporting breakdown meant hours of manual rework. We rebuilt it as a row-based entry template consolidated with Power Query, migrated all existing data into the new structure, and trained the team to build new reporting breakdowns with pivot tables.",
            image:
              "https://www.officeexperts.com.au/case-studies/community-services-excelLg.png",
            imageAlt:
              "Excel workbook rebuilt to consolidate four locations with Power Query",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/golf-supplier-sales-data-consolidation",
            linkText: "Explore the supplier file consolidation",
            title:
              "Turning a year of scattered supplier sales files into one automated summary",
            description:
              "The client received dozens of separate Excel files from each supplier throughout the year, detailing sales made to every club and member across each month and quarter. We built a Power Query and Power Pivot solution that pulls all of this raw data in automatically, categorises it, and produces year-on-year comparisons by supplier, member, month and quarter without a single manual copy and paste.",
            image:
              "https://www.officeexperts.com.au/case-studies/on-course-golf-sales-summaryLg.png",
            imageAlt:
              "Automated supplier sales summary built with Power Query and Power Pivot",
          },
        ]}
      />
      <DataManipulationComparison />
      <DataManipulationCta />
      <Contact />
    </>
  );
};

export default Page;
