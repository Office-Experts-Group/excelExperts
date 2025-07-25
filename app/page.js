import React from "react";
import dynamic from "next/dynamic";

// Keep Hero static as it's above fold
import Hero from "./(components)/Hero";

// Dynamically import everything else
const Services = dynamic(() => import("./(components)/Services"));
const CTAMain = dynamic(() => import("./(components)/CTAMain"));
const IsRight = dynamic(() => import("./(components)/IsRight"));
const SolutionsCarousel = dynamic(() =>
  import("./(components)/SolutionsCarousel")
);
const CTAFull = dynamic(() => import("./(components)/CTAFull"));
const Testimonials = dynamic(() => import("./(components)/Testimonials"));
const Brands = dynamic(() => import("../components/Brands"));
const Promo = dynamic(() => import("../components/Promo"));
const Contact = dynamic(() => import("../components/Contact"));

import { getHomePageSchema } from "../utils/testimonialSchemaGenerator";
import { testimonials } from "../testimonials";

import {
  generateOrganizationSchema,
  generateProfessionalServiceSchema,
} from "../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getHomePageSchema(testimonials, "excel")["@graph"],
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au",
      url: "https://www.excelexperts.com.au",
      name: "Excel Help Australia - Expert Excel Programmer & Consultant",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-06-27T00:00:00+00:00",
      description:
        "Excel Experts is the Leading Excel Help Service Provider in Australia. Highly Experienced Excel Programmers & Developers. Call 1300 102 810",
      breadcrumb: {
        "@id": "https://www.excelexperts.com.au#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.excelexperts.com.au#website",
      url: "https://www.excelexperts.com.au",
      name: "Excel Experts - Microsoft Excel Design, Development and Consulting, Office Experts Group",
      description:
        "Your Microsoft Technology Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.excelexperts.com.au?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.excelexperts.com.au#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.excelexperts.com.au",
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
      <Hero />
      <Services />
      <CTAMain />
      <IsRight />
      <SolutionsCarousel />
      <Testimonials testimonials={testimonials} />
      <Brands />
      <CTAFull />
      <Promo
        h2="We Deliver the Best Quality"
        p="We are a team of highly skilled and experienced professionals who are passionate about what we do. We are committed to providing our clients with the best possible service and results."
      />
      <Contact />
    </>
  );
};

export default Page;
