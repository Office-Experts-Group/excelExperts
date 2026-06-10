// app/services/excel-support/page.js

import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import ExcelSupportMain from "./(components)/ExcelSupportMain";

// Lazy-load below-the-fold sections for performance
const ExcelSupportServices = dynamic(
  () => import("./(components)/ExcelSupportServices"),
);
const ExcelSupportTraining = dynamic(
  () => import("./(components)/ExcelSupportTraining"),
);
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const Promo = dynamic(() => import("../../components/Promo"));
const Contact = dynamic(() => import("../../components/Contact"));

import handShake from "../../public/pageHeros/handShake.webp";
import graphTableMob from "../../public/pageHeros/mob/graphTableMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

// ── Schema ───────────────────────────────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(
      "https://www.excelexperts.com.au",
      "Excel Experts",
      "Australia-wide Microsoft Excel Programming, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/excel-support",
      url: "https://www.excelexperts.com.au/excel-support",
      name: "Help Support & Training | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      datePublished: "2018-01-02T16:30:22+00:00",
      dateModified: "2025-06-10T00:00:00+00:00",
      description:
        "Professional Excel support and training from highly experienced consultants. Excel Experts help resolve your issues onsite or via remote access. Australia Wide. Call 1300 102 810.",
      breadcrumb: {
        "@id": "https://www.excelexperts.com.au/excel-support#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/excel-support"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.excelexperts.com.au/excel-support#breadcrumb",
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
          name: "Microsoft Excel: Help and Training",
          item: "https://www.excelexperts.com.au/excel-support",
        },
      ],
    },
    {
      // Detailed service schema covering all support offerings on this page
      "@type": "Service",
      "@id": "https://www.excelexperts.com.au/excel-support#service",
      name: "Excel Support & Training",
      serviceType: "Microsoft Excel Consulting, Support and Training",
      description:
        "Comprehensive Excel support and training services including on-demand technical assistance, custom solution development, code reviews, troubleshooting, migration support, data conversion, solution documentation, and flexible remote or onsite training.",
      provider: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Excel Support Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "On-Demand Technical Assistance",
              description:
                "Immediate help with urgent Excel issues through responsive support channels. Technical experts diagnose and resolve problems efficiently.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Excel Solution Development",
              description:
                "Tailored Excel solutions to automate repetitive tasks, streamline data processes, and enhance productivity.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Code Reviews & Optimisation",
              description:
                "Review of existing Excel solutions to identify inefficiencies and implement performance improvements.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Troubleshooting & Problem Resolution",
              description:
                "Diagnostic expertise to quickly identify root causes of spreadsheet errors and implement effective remedies.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Migration & Upgrade Support",
              url: "https://www.excelexperts.com.au/upgrades-and-migration",
              description:
                "Guided support to seamlessly transition between Excel versions or migrate to new platforms.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data Conversion & Integration",
              url: "https://www.excelexperts.com.au/data-manipulation",
              description:
                "Transform, clean, and integrate data from various sources into your Excel environment.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Solution Documentation",
              description:
                "Comprehensive documentation of existing Excel workflows for knowledge retention and team onboarding.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Excel Training",
              description:
                "Task-specific Excel training for individuals or groups, delivered onsite or remotely. Includes custom how-to video resources.",
            },
          },
        ],
      },
    },
    {
      // FAQPage schema built from the implicit Q&A on this page
      "@type": "FAQPage",
      "@id": "https://www.excelexperts.com.au/excel-support#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you offer remote Excel support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our Excel experts provide support through remote access, over the phone, or in-house. We service clients Australia-wide.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help with Excel automation and VBA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We develop tailored Excel solutions including VBA automation to streamline repetitive tasks and enhance productivity.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide Excel training for teams?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We offer group and individual training sessions onsite or remotely, with customised how-to videos as ongoing learning resources.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help migrate Excel solutions to a new version?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We provide full migration and upgrade support to seamlessly transition between Excel versions or migrate solutions to new platforms.",
          },
        },
      ],
    },
  ],
};

// ── Page ─────────────────────────────────────────────────────────────────────
const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title="Excel Support & Training"
        desktopImage={handShake}
        mobileImage={graphTableMob}
        altDesk={"hands shaking"}
        altMob={"graphs on a table"}
      />
      <ExcelSupportMain />
      <ExcelSupportServices />
      <ExcelSupportTraining />
      <ExpertsAwait />
      <Promo
        h2="Master Excel with Expert Training"
        p="Gain the skills you need with task-specific, cost-effective training. Whether remote or onsite, our experienced trainers are here to help you succeed."
        margin="true"
      />
      <Contact />
    </>
  );
};

export default Page;
