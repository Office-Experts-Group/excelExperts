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
import { locationIntros } from "../../utils/locationContent";

import richmond from "../../public/pageHeros/richmond.webp";
import richmondMob from "../../public/pageHeros/mob/richmondMob.webp";
import richmondMain from "../../public/locations/richmond.webp";

const location = "Richmond";

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
      "@id": "https://www.excelexperts.com.au/excel-consultants-richmond",
      url: "https://www.excelexperts.com.au/excel-consultants-richmond",
      name: "Excel Consultants Richmond",
      description:
        "Excel Experts operates across Australia with local Richmond-based developers available, helping businesses streamline reporting, dashboards and automation since 2000.",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-07-01T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/excel-consultants-richmond#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/excel-consultants-richmond",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/excel-consultants-richmond#breadcrumb",
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
          name: "Excel Consultants Richmond",
          item: "https://www.excelexperts.com.au/excel-consultants-richmond",
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
        desktopImage={richmond}
        mobileImage={richmondMob}
        altDesk="Richmond"
        altMob="Richmond"
      />
      <LocationPages location={location} img={richmondMain} />
      <CTAMainProps location={location} />
      <ServicesLocation location={location} />
      <MeetTheTeamSlider />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Excel and Office 365 solutions for our clients"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/community-services-excel-consolidation-rebuild",
            linkText: "Read how reporting was simplified",
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
            href: "https://www.officeexperts.com.au/case-studies/private-client-cashflow-forecasting-tool",
            linkText: "Learn how monthly income is calculated",
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
            href: "https://www.officeexperts.com.au/case-studies/golf-supplier-sales-data-consolidation",
            linkText: "See how Power Query automated sales summary",
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
