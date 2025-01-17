import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain2 from "./(components)/PageSegmentMain2";
import PageSegment3 from "./(components)/PageSegment3";
import PageSegment4New from "./(components)/PageSegment4New";
import PageSegment5 from "./(components)/PageSegment5";
import PageSegment6 from "./(components)/PageSegment6";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import PageSegment7 from "./(components)/PageSegment7";
import PageSegment8 from "./(components)/PageSegment8";
import Contact from "../../../../components/Contact";
import Promo from "../../../../components/Promo";

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
        "https://www.excelexperts.com.au/services/microsoft-access/access-azure-cloud-solutions/",
      url: "https://www.excelexperts.com.au/services/microsoft-access/access-azure-cloud-solutions/",
      name: "Microsoft Access Azure Cloud Solutions & Integration Services",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Professional Microsoft Access Azure cloud integration services. Our experts deliver seamless database migration, cloud optimization, and Azure integration solutions.",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/services/microsoft-access/access-azure-cloud-solutions/",
          ],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.excelexperts.com.au/#website",
      url: "https://www.excelexperts.com.au/",
      name: "Excel Experts: Azure Cloud Integration Services",
      description:
        "Expert Microsoft Excel, Access and Azure Cloud Integration Solutions",
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
      "@type": "BreadcrumbList",
      "@id":
        "https://excelexperts.com.au/services/microsoft-access/access-azure-cloud-based-solutions/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://excelexperts.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://excelexperts.com.au/services/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Access",
          item: "https://excelexperts.com.au/services/microsoft-access/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Access azure cloud based solutions",
          item: "https://excelexperts.com.au/services/microsoft-access/access-azure-cloud-based-solutions/",
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
      <ServiceHero title="Azure Cloud Based Solutions" />
      <PageSegmentMain2 />
      <PageSegment3 />
      <PageSegment4New />
      <PageSegment5 />
      <PageSegment6 />
      <ExpertsAwait />
      <PageSegment7 />
      <PageSegment8 />
      <Promo
        h2="Want Your Access Database in the Cloud?"
        p="Transform your existing Access database into a cloud-based solution accessible from anywhere. We can help migrate your data to Azure and create custom web solutions for your team."
      />
      <Contact />
    </>
  );
};

export default Page;
