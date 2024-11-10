import React from "react";

import ServiceHero from "../../components/ServiceHero";
import ExpertsAwait from "../../components/ExpertsAwait";
import Promo from "../../components/Promo";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegmentCenter from "./(components)/PageSegmentCenter";
import PageSegment3 from "./(components)/PageSegment3";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/excel-support/",
      url: "https://www.excelexperts.com.au/excel-support/",
      name: "Help Support & Training | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au/#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      datePublished: "2018-01-02T16:30:22+00:00",
      dateModified: "2022-11-09T00:29:31+00:00",
      description:
        "Excel Help Resolve Your Issues Onsite or Remote Access Professional Guidance Highly Experienced Consultants Competitive Rates. Call us to get more info",
      breadcrumb: {
        "@id": "https://www.excelexperts.com.au/excel-support/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/excel-support/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.excelexperts.com.au/excel-support/#breadcrumb",
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
          name: "Microsoft Excel: Help and Training",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.excelexperts.com.au/#website",
      url: "https://www.excelexperts.com.au/",
      name: "Excel Experts - Microsoft Excel Design, Development and Consulting, Office Experts Group",
      description:
        "Your Microsoft Technology Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.excelexperts.com.au/?s={search_term_string}",
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
      "@type": "Organization",
      "@id": "https://www.excelexperts.com.au/#organization",
      name: "Office Experts Group",
      url: "https://www.excelexperts.com.au/",
      telephone: "1300 10 28 10",
      email: "consult@exceleexperts.com.au",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "1300 10 28 10",
          contactType: "customer service",
          email: "consult@excelexperts.com.au",
          availableLanguage: ["en", "en-AU"],
        },
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "New South Wales",
        },
        {
          "@type": "AdministrativeArea",
          name: "Victoria",
        },
        {
          "@type": "AdministrativeArea",
          name: "Queensland",
        },
        {
          "@type": "AdministrativeArea",
          name: "Western Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "South Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tasmania",
        },
        {
          "@type": "AdministrativeArea",
          name: "Australian Capital Territory",
        },
        {
          "@type": "AdministrativeArea",
          name: "Northern Territory",
        },
      ],
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-AU",
        "@id": "https://www.excelexperts.com.au/#/schema/logo/image/",
        url: "/logo.png",
        contentUrl: "/logo.png",
        width: 1181,
        height: 1181,
        caption: "Office Experts Group",
      },
      image: {
        "@id": "https://www.excelexperts.com.au/#/schema/logo/image",
      },
      sameAs: [
        "https://www.facebook.com/MSOfficeExperts",
        "https://x.com/OfficeExpertsG1",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "112",
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
      <ServiceHero title="Excel Support" />
      <PageSegmentMain />
      <PageSegmentCenter />
      <PageSegment3 />
      <ExpertsAwait />
      <Promo
        h2="Master Excel with Expert Training"
        p="Gain the skills you need with task-specific, cost-effective training. Whether remote or onsite, our experienced trainers are here to help you succeed."
      />
      <Contact />
    </>
  );
};

export default Page;
