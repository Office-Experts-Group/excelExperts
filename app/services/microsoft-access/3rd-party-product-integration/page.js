import React from "react";

import PageSegmentMain from "./(components)/PageSegmentMain";
import ServiceHero from "../../../../components/ServiceHero";
import Promo from "../../../../components/Promo";
import Contact from "../../../../components/Contact";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import FAQSection from "../../../../components/FAQSection";

import faqs from "../../../../faqs/3rd-party-product-integration";

import thirdParty from "../../../../public/pageHeros/3rdParty.webp";
import calcMob from "../../../../public/pageHeros/mob/calcMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.excelexperts.com.au/services/microsoft-access/3rd-party-product-integration",
      url: "https://www.excelexperts.com.au/services/microsoft-access/3rd-party-product-integration",
      name: "Excel Experts: For All Your Microsoft Technology Development and Consulting Services",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Our Australia-wide, cross-industry Microsoft Access database consultants deliver prompt, quality service with competitive pricing. Fulfilling all of your Microsoft Access consulting needs, our experts excel in Microsoft technology services from database creation to maintenance, troubleshooting, integration, data manipulation, programming, conversions, upgrades, training and support.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://www.excelexperts.com.au",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://www.excelexperts.com.au/services",
              name: "Services",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": "https://www.excelexperts.com.au/services/microsoft-access",
              name: "Microsoft Access",
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@id":
                "https://www.excelexperts.com.au/services/microsoft-access/3rd-party-product-integration",
              name: "3rd Party Product Integration",
            },
          },
        ],
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "Organization",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Excel and Access Design, Development and Consulting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data Manipulation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VBA Macro development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Microsoft SQL Server integration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Microsoft .NET solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud backups, backups",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dashboards, reporting solutions, charts, graphs",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Microsoft SharePoint integration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Microsoft Azure integration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Integrate financial systems",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Review code and fix defects",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automation and upgrades",
            },
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
        title="3rd Party Product Integration"
        desktopImage={thirdParty}
        mobileImage={calcMob}
        altDesk={"lady in an office environment "}
        altMob={"Calculator on an office desk"}
      />
      <PageSegmentMain />
      <ExpertsAwait />
      <Promo
        h2="Need An Integration Solution?"
        p="Do you have another Office application, CRM, accounting package or other 3rd party product that you want linked to Access?
        
        Do you want to extend a 3rd party product's functionality using Access?"
      />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
