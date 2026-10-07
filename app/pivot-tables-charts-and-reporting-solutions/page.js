// app/pivot-tables-charts-and-reporting-solutions/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
// Section components — loaded statically above the fold, dynamically below
import PivotIntro from "./(components)/PivotIntro";

const PivotServices = dynamic(() => import("./(components)/PivotServices"));
const PivotCopilot = dynamic(() => import("./(components)/PivotCopilot"));
const PivotIndustries = dynamic(() => import("./(components)/PivotIndustries"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
const Contact = dynamic(() => import("../../components/Contact"));

import reports from "../../public/pageHeros/reports.webp";
import reportsMob from "../../public/pageHeros/mob/reportsMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

const PAGE_URL =
  "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions";

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
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "Excel Pivot Tables, Charts & Reporting Solutions | Excel Experts Australia",
      isPartOf: { "@id": "https://www.excelexperts.com.au#website" },
      about: { "@id": "https://www.excelexperts.com.au#organization" },
      datePublished: "2018-01-02T16:19:12+00:00",
      dateModified: "2026-05-25T00:00:00+10:00",
      description:
        "Australia's leading Excel experts build custom pivot tables, pivot charts, Power Query pipelines and Power BI dashboards. Remote & onsite support nationwide.",
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en-AU",
      potentialAction: [{ "@type": "ReadAction", target: [PAGE_URL] }],
    },
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
          name: "Pivot Tables, Charts & Reporting Solutions",
          item: PAGE_URL,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main>
        <ServiceHero
          title="Excel Pivot Tables, Charts & Custom Reporting Solutions"
          desktopImage={reports}
          mobileImage={reportsMob}
          altDesk="Excel charts and pivot table data on a screen"
          altMob="Excel charts and pivot table data on a screen"
        />
        <PivotIntro />
        <PivotServices />
        <PivotCopilot />
        <PivotIndustries />
        <RelatedLinks
          theme="light"
          eyebrow="Case Studies"
          heading="Excel reporting projects"
          links={[
            {
              href: "https://www.officeexperts.com.au/case-studies/golf-supplier-sales-data-consolidation",
              linkText: "See the year-on-year comparison views",
              title:
                "Turning scattered supplier sales files into one automated summary",
              description:
                "The client received dozens of separate Excel files from each supplier throughout the year, detailing sales made to every club and member across each month and quarter. We built a Power Query and Power Pivot solution that pulls all of this raw data in automatically, categorises it, and produces year-on-year comparisons by supplier, member, month and quarter without a single manual copy and paste.",
              image:
                "https://www.officeexperts.com.au/case-studies/on-course-golf-sales-summaryLg.png",
              imageAlt:
                "Automated supplier sales summary built with Power Query and Power Pivot",
            },
            {
              href: "https://www.officeexperts.com.au/case-studies/community-services-excel-consolidation-rebuild",
              linkText: "Our pivot table reporting approach in action",
              title:
                "Replacing an oversized linked spreadsheet with a one-click Power Query refresh",
              description:
                "A four-location community services provider had each site keying records into its own workbook, with a central file pulling them together through direct workbook links, and every new reporting breakdown meant hours of manual rework. We rebuilt it as a row-based entry template consolidated with Power Query, migrated all existing data into the new structure, and trained the team to build new reporting breakdowns with pivot tables.",
              image:
                "https://www.officeexperts.com.au/case-studies/community-services-excelLg.png",
              imageAlt:
                "Excel workbook rebuilt to consolidate four locations with Power Query",
            },
          ]}
        />
        <Contact />
      </main>
    </>
  );
};

export default Page;
