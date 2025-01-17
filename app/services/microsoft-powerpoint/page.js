import React from "react";

import ServiceHero from "../../../components/ServiceHero";
import ExpertsAwait from "../../../components/ExpertsAwait";
import Contact from "../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import SolutionsCarousel from "./(components)/SolutionsCarousel";
import Testimonials from "../microsoft-word/(components)/Testimonials";

import { getHomePageSchema } from "../../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../../testimonials";

import twoComputers from "../../../public/pageHeros/twoComputers.webp";
import meetingMob from "../../../public/pageHeros/mob/meetingMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getHomePageSchema(testimonials)["@graph"],
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/services/microsoft-powerpoint/",
      url: "https://www.excelexperts.com.au/services/microsoft-powerpoint/",
      name: "PowerPoint Experts | Presentation Design & Development Services",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au/#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      datePublished: "2018-01-02T16:19:12+00:00",
      dateModified: "2022-11-09T00:28:14+00:00",
      description:
        "Professional PowerPoint experts delivering presentation design, custom templates, VBA automation and training services across Australia.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/services/microsoft-powerpoint/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/services/microsoft-powerpoint/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-powerpoint/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.excelexperts.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.excelexperts.com.au/services/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft PowerPoint Services",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-powerpoint/#service",
      name: "PowerPoint Consulting Services",
      description:
        "Professional PowerPoint presentation design and development services including custom templates, VBA automation, and expert training.",
      provider: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "PowerPoint Services",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Custom Templates",
            description:
              "Professional PowerPoint Templates with Master Slides that meet brand guidelines",
          },
          {
            "@type": "Offer",
            name: "Presentation Redesign",
            description:
              "Transform existing presentations into professional templates",
          },
          {
            "@type": "Offer",
            name: "VBA Automation",
            description:
              "Automate presentations with data integration using VBA",
          },
          {
            "@type": "Offer",
            name: "Training Services",
            description: "Expert PowerPoint training and user assistance",
          },
        ],
      },
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
        title="PowerPoint Consulting Services"
        desktopImage={twoComputers}
        mobileImage={meetingMob}
        altDesk={"Two computers at an office"}
        altMob={"Meeting with office people"}
      />
      <PageSegmentMain />
      <SolutionsCarousel />
      <Testimonials testimonials={testimonials} />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
