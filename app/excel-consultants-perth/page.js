// app/(excelConsultants)/excel-consultants-perth/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import LocationSummary from "../(components)/LocationSummary";

const LocationPages = dynamic(() => import("../(components)/LocationPages"));
const CTAMainProps = dynamic(() => import("../(components)/CTAMainProps"));
const ContactLocationSegment = dynamic(
  () => import("../../components/ContactLocationSegment"),
);
const ServicesLocation = dynamic(
  () => import("../(components)/ServicesLocation"),
);
const Promo = dynamic(() => import("../../components/Promo"));
const GoodToKnow = dynamic(() => import("../../components/GoodToKnow"));
const Testimonials = dynamic(() => import("../(components)/Testimonials"));
const MeetTheTeamSlider = dynamic(
  () => import("../../components/MeetTheTeamSlider"),
);
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));

import { getHomePageSchema } from "../../utils/testimonialSchemaGenerator";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
} from "../../utils/schemaGenerators";
import { testimonials } from "../../testimonials";
// City-specific intro paragraphs — keyed by the location prop value
import { locationIntros } from "../../utils/locationContent";

import perth from "../../public/pageHeros/perth.webp";
import perthMob from "../../public/pageHeros/mob/perthMob.webp";
import perthMain from "../../public/locations/perth.webp";

const location = "Perth";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateLocalBusinessSchema(location),
    ...getHomePageSchema(testimonials, "excel")["@graph"],
    generateWebSiteSchema(
      "https://www.excelexperts.com.au",
      "Excel Experts",
      "Australia-wide Microsoft Excel Programming, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/excel-consultants-perth",
      url: "https://www.excelexperts.com.au/excel-consultants-perth",
      name: "Excel Consultants Perth",
      description:
        "Perth businesses can access our Australia-wide Excel consultants with 25+ years of experience, our local developers are available for reporting, dashboards, automation and spreadsheet systems.",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-07-01T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/excel-consultants-perth#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/excel-consultants-perth"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/excel-consultants-perth#breadcrumb",
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
          name: "Excel Consultants Perth",
          item: "https://www.excelexperts.com.au/excel-consultants-perth",
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
        title={`Excel Consultants ${location}`}
        desktopImage={perth}
        mobileImage={perthMob}
        altDesk="Perth"
        altMob="Perth"
      />
      <LocationPages location={location} img={perthMain} />
      <CTAMainProps location={location} />
      <ServicesLocation location={location} />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Our recent Excel and data migration projects"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/community-services-excel-consolidation-rebuild",
            linkText: "See how we consolidated lost data",
            title: "Harnessing Power Query to rebuild a Excel workbooks",
            description:
              "A four-location community services provider had each site keying records into its own workbook, with a central file pulling them together through direct workbook links, and every new reporting breakdown meant hours of manual rework. We rebuilt it as a row-based entry template consolidated with Power Query, migrated all existing data into the new structure, and trained the team to build new reporting breakdowns with pivot tables.",
            image:
              "https://www.officeexperts.com.au/case-studies/community-services-excelLg.png",
            imageAlt:
              "Excel workbook rebuilt to consolidate four locations with Power Query",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/golf-supplier-sales-data-consolidation",
            linkText: "View our Power Pivot solution",
            title:
              "Turning a year of scattered supplier sales files into one automated summary",
            description:
              "The client received dozens of separate Excel files from each supplier throughout the year, detailing sales made to every club and member across each month and quarter. We built a Power Query and Power Pivot solution that pulls all of this raw data in automatically, categorises it, and produces year-on-year comparisons by supplier, member, month and quarter without a single manual copy and paste.",
            image:
              "https://www.officeexperts.com.au/case-studies/on-course-golf-sales-summaryLg.png",
            imageAlt:
              "Automated supplier sales summary built with Power Query and Power Pivot",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/food-manufacturer-excel-costing-workbook",
            linkText: "View our costing workbook rebuild",
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
      <MeetTheTeamSlider />
      <GoodToKnow />
      <LocationSummary
        location={location}
        service="Excel"
        intro={locationIntros[location]}
      />
      <Testimonials testimonials={testimonials} />
      <Promo
        margin={true}
        h2={"Let's transform your data management!"}
        p={
          "Unlock the full potential of Microsoft Excel with our expert consultant solutions, designed to enhance data analysis, create powerful reporting dashboards, and optimise your spreadsheet functionality."
        }
      />
      <ContactLocationSegment location={location} />
    </>
  );
};

export default Page;
