// app/services/excel/upgrades-and-migration/page.js

import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import UpgradeProblem from "./(components)/UpgradeProblem";

const Contact = dynamic(() => import("../../components/Contact"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
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
      <ExpertsAwait />
      <SmoothTransition />
      <Contact />
    </>
  );
};

export default Page;
