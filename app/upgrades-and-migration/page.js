// app/services/excel/upgrades-and-migration/page.js

import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import UpgradeProblem from "./(components)/UpgradeProblem";

const Contact = dynamic(() => import("../../components/Contact"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
const UpgradePathways = dynamic(() => import("./(components)/UpgradePathways"));
const UpgradeIssues = dynamic(() => import("./(components)/UpgradeIssues"));
const MigrateAway = dynamic(() => import("./(components)/MigrateAway"));
const SmoothTransition = dynamic(
  () => import("./(components)/SmoothTransition"),
);

import upgrade from "../../public/pageHeros/upgrade.webp";
import upgradeMob from "../../public/pageHeros/mob/upgradeMob.webp";

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
      "@id": "https://www.excelexperts.com.au/upgrades-and-migration",
      url: "https://www.excelexperts.com.au/upgrades-and-migration",
      name: "Excel Upgrades and Migration | Excel Experts",
      isPartOf: { "@id": "https://www.excelexperts.com.au#website" },
      about: { "@id": "https://www.excelexperts.com.au#organization" },
      datePublished: "2017-11-26T03:05:43+00:00",
      dateModified: "2026-05-28T01:38:27+00:00",
      description:
        "Stop working around broken spreadsheets. We upgrade, migrate and modernise Excel workbooks and legacy systems for Australian businesses. Free Consultation.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/upgrades-and-migration#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/upgrades-and-migration"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/upgrades-and-migration#breadcrumb",
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
          name: "Upgrades and Migration",
          item: "https://www.excelexperts.com.au/upgrades-and-migration",
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
        title={"Upgrades and Migration"}
        desktopImage={upgrade}
        mobileImage={upgradeMob}
        altDesk={"Broken excel spreadsheet being fixed"}
        altMob={"Broken excel spreadsheet being fixed"}
      />
      <UpgradeProblem />
      <UpgradePathways />
      <UpgradeIssues />
      <MigrateAway />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Excel rebuild and data migration projects"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/community-services-excel-consolidation-rebuild",
            linkText: "Read the full workbook rebuild",
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
            href: "https://www.officeexperts.com.au/case-studies/food-manufacturer-excel-costing-workbook",
            linkText: "Learn how we connected data between platforms",
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
            href: "https://www.officeexperts.com.au/case-studies/golf-supplier-sales-data-consolidation",
            linkText: "See how to level up Excel with Power Platform",
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
      <SmoothTransition />
      <Contact />
    </>
  );
};

export default Page;
