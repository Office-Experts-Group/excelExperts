import React from "react";

import Contact from "../../components/Contact";
import TestimonialPage from "./(components)/TestimonialPage";
import ServiceHero from "../../components/ServiceHero";

import { getTestimonialsPageSchema } from "../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../testimonials";
import { filterAndSortTestimonials } from "../../utils/filterTestimonials";
const serviceTestimonials =
  filterAndSortTestimonials(testimonials, "excel") || testimonials;
import testimonialsPic from "../../public/pageHeros/testimonials.webp";
import testimonialsMob from "../../public/pageHeros/mob/testimonialsMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      ...getTestimonialsPageSchema(serviceTestimonials, "excel")["@graph"],
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/client-testimonials",
      url: "https://www.excelexperts.com.au/client-testimonials",
      name: "Testimonials | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      datePublished: "2019-08-06T08:12:54+00:00",
      dateModified: "2025-03-31T00:24:40+00:00",
      description:
        "Are you struggling with some of the features in Excel? Do you need some guidance from time to time? Call us on 1300102810",
      breadcrumb: {
        "@id": "https://www.excelexperts.com.au/client-testimonials#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/client-testimonials"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.excelexperts.com.au/client-testimonials#breadcrumb",
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
          name: "Testimonials",
          item: "https://www.excelexperts.com.au/client-testimonials",
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
        title="Client Testimonials"
        desktopImage={testimonialsPic}
        mobileImage={testimonialsMob}
        altDesk={"Wooden block with smiley face"}
        altMob={"five stars"}
      />
      <TestimonialPage testimonials={serviceTestimonials} />
      <Contact />
    </>
  );
};

export default Page;
