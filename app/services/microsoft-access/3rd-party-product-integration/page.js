import React from "react";

import PageSegmentMain from "./(components)/PageSegmentMain";
import ServiceHero from "../../../../components/ServiceHero";
import Promo from "../../../../components/Promo";
import Contact from "../../../../components/Contact";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import FAQSection from "../../../../components/FAQSection";

import faqs from "../../../../faqs/3rd-party-product-integration";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://officeexperts.com.au/services/microsoft-access/3rd-party-product-integration",
      url: "https://officeexperts.com.au/services/microsoft-access/3rd-party-product-integration",
      name: "Office Experts: For All Your Microsoft Technology Development and Consulting Services",
      isPartOf: {
        "@id": "https://officeexperts.com.au/#website",
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
              "@id": "https://officeexperts.com.au/",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://officeexperts.com.au/services/",
              name: "Services",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": "https://officeexperts.com.au/services/microsoft-access/",
              name: "Microsoft Access",
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@id":
                "https://officeexperts.com.au/services/microsoft-access/3rd-party-product-integration/",
              name: "3rd Party Product Integration",
            },
          },
        ],
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "WebSite",
      "@id": "https://officeexperts.com.au/#website",
      url: "https://officeexperts.com.au/services/microsoft-access/3rd-party-product-integration",
      name: "Office Experts: Microsoft Access Development and Consulting Services",
      description:
        "Your Microsoft Access Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://officeexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://officeexperts.com.au/?s={search_term_string}",
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
      "@id": "https://officeexperts.com.au/#organization",
      additionalType: ["https://en.wikipedia.org/wiki/Microsoft_Access"],
      name: "Office Experts",
      url: "https://officeexperts.com.au/",
      email: "consult@officeexperts.com.au",
      telephone: "1300 10 28 10",
      legalName: "Office Experts",
      alternateName: [
        "Word Experts",
        "Excel Experts",
        "Access Experts",
        "PowerPlatform Experts",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "1300 10 28 10",
          contactType: "customer service",
          email: "consult@officeexperts.com.au",
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
      description:
        "Our Australia-wide, cross-industry Microsoft Access database consultants deliver prompt, quality service with competitive pricing. Fulfilling all of your Microsoft Access consulting needs, our experts excel in Microsoft technology services from database creation to maintenance, troubleshooting, integration, data manipulation, programming, conversions, upgrades, training and support.",
      brand: {
        "@type": "Thing",
        name: [
          "Office Experts",
          "Microsoft Access",
          "Access consultant",
          "Access training",
          "Microsoft Access expert",
          "Microsoft Access consultant",
          "Microsoft Access training",
          "Microsoft Access consulting",
          "Access expert",
          "Microsoft Excel",
          "Microsoft Power BI",
          "Microsoft Office 365",
        ],
      },
      paymentAccepted: "Credit Card, Cheque, Direct Debit",
      currenciesAccepted: "AUD",
      priceRange: "$50-$5000",
      isAccessibleForFree: false,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Access Design, Development and Consulting Services",
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
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-AU",
        "@id": "https://www.officeexperts.com.au/#/schema/logo/image/",
        url: "/logo200x86.webp",
        contentUrl: "/logo200x86.webp",
        width: 200,
        height: 86,
        caption: "Office Experts",
      },
      image: {
        "@id": "https://officeexperts.com.au/#/schema/logo/image/",
      },
      sameAs: ["https://www.facebook.com/MSOfficeExperts"],
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
      <ServiceHero title="3rd Party Product Integration" />
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
