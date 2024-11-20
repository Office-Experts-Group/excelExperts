import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations/",
      url: "https://www.excelexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations/",
      name: "Custom PowerPoint Templates & Corporate Presentation Design Services",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au/#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      datePublished: "2018-01-02T16:19:12+00:00",
      dateModified: "2022-11-09T00:28:14+00:00",
      description:
        "Professional PowerPoint template design services including custom master slides, corporate branding, and expert presentation design solutions.",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations/#breadcrumb",
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
          item: "https://www.excelexperts.com.au/services/microsoft-powerpoint/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Custom Templates and Presentations",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-powerpoint/custom-powerpoint-templates-and-presentations/#service",
      name: "Custom PowerPoint Templates and Presentation Design",
      description:
        "Professional PowerPoint template design services including master slides, corporate branding, and custom presentation solutions.",
      provider: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "PowerPoint Template Services",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Custom Template Design",
            description: "Professional PowerPoint Templates with Master Slides",
          },
          {
            "@type": "Offer",
            name: "Corporate Identity Integration",
            description: "Brand-aligned presentation templates",
          },
          {
            "@type": "Offer",
            name: "Theme Development",
            description: "Custom corporate PowerPoint themes",
          },
          {
            "@type": "Offer",
            name: "Master Slide Creation",
            description: "Professional slide layouts and designs",
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
      <ServiceHero title="Custom PowerPoint Templates and Presentations" />
      <PageSegmentMain />
      <Segment4Repeat />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
