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

import { getHomePageSchema } from "../../utils/testimonialSchemaGenerator";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";
import { testimonials } from "../../testimonials";

import richmond from "../../public/pageHeros/richmond.webp";
import richmondMob from "../../public/pageHeros/mob/richmondMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    ...getHomePageSchema(testimonials, "excel")["@graph"],
    generateWebSiteSchema(
      "https://www.excelsexperts.com.au",
      "Excel Experts",
      "Australia-wide Microsoft Excel Programming, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/excel-consultants-richmond",
      url: "https://www.excelexperts.com.au/excel-consultants-richmond",
      name: "Excel Consultants Richmond",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-03-26T00:00:00+00:00",
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
          name: "Power Platform Consultants Richmond",
          item: "https://www.excelexperts.com.au/excel-consultants-richmond",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Richmond";

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
      <LocationSummary location={location} service="Excel" />
      <LocationPages location={location} />
      <CTAMainProps location={location} />
      <ServicesLocation location={location} />
      <MeetTheTeamSlider />
      <GoodToKnow />
      <Testimonials testimonials={testimonials} />
      <Promo
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
