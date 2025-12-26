import React from "react";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import ServicesSection from "./(components)/ServicesSection";
import WhyChooseUs from "../../app/about-us/(components)/WhyChooseUs";
import IndustrySection from "./(components)/IndustrySection";
import HowWeWork from "./(components)/HowWeWork";
import AustraliaWide from "./(components)/AustraliaWide";
import Testimonials from "../../app/(components)/Testimonials";
import ExpertsAwait from "../../components/ExpertsAwait";
import Contact from "../../components/Contact";

import { testimonials } from "../../testimonials";

import services from "../../public/pageHeros/services.webp";
import servicesMob from "../../public/pageHeros/mob/servicesMob.webp";

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
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/services",
      url: "https://www.excelexperts.com.au/services",
      name: "Microsoft Excel Services | Excel Consultants Australia",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      datePublished: "2025-12-26T00:00:00+00:00",
      dateModified: "2025-12-26T00:00:00+00:00",
      description:
        "Comprehensive Microsoft Excel services including custom development, VBA automation, data analysis, reporting solutions, formula development and training.",
      breadcrumb: {
        "@id": "https://www.excelexperts.com.au/services#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/services"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.excelexperts.com.au/services#breadcrumb",
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
          name: "Services",
          item: "https://www.excelexperts.com.au/services",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.excelexperts.com.au/services#service",
      serviceType: "Microsoft Excel Consulting Services",
      provider: {
        "@id": "https://www.excelexperts.com.au#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Excel Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VBA & Macro Development",
              description:
                "Custom VBA programming and macro development for Excel automation and workflow optimisation",
              url: "https://www.excelexperts.com.au/vba-macro-development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Design & Development",
              description:
                "Bespoke Excel workbook creation, custom solutions and professional spreadsheet design",
              url: "https://www.excelexperts.com.au/custom-design-and-development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Formula Development",
              description:
                "Complex formula coding, custom functions and formula troubleshooting services",
              url: "https://www.excelexperts.com.au/excel-formulas-and-custom-formulas",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pivot Tables, Charts & Reporting",
              description:
                "Advanced pivot tables, data visualisation and automated reporting solutions",
              url: "https://www.excelexperts.com.au/pivot-tables-charts-and-reporting-solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data Manipulation & Analysis",
              description:
                "Data import/export, parsing, processing and automated data manipulation solutions",
              url: "https://www.excelexperts.com.au/data-manipulation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Training & Support",
              description:
                "Professional Excel training, ongoing support and consulting services",
              url: "https://www.excelexperts.com.au/excel-support",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Add-In Development",
              description:
                "Custom Excel add-in development for enhanced functionality and distribution",
              url: "https://www.excelexperts.com.au/add-in-development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Upgrades & Migration",
              description:
                "Excel version upgrades, legacy system modernisation and migration services",
              url: "https://www.excelexperts.com.au/upgrades-and-migration",
            },
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.excelexperts.com.au/services#industries",
      name: "Industries We Serve",
      description:
        "Excel Experts provides specialised services across diverse Australian industries",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Financial Services & Accounting",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Manufacturing & Logistics",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Healthcare & Medical",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Education & Training",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Professional Services",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Government & Public Sector",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Retail & E-commerce",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Construction & Engineering",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Not-for-Profit Organisations",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Property & Real Estate",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.excelexperts.com.au/services#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What Microsoft Excel services do you provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide comprehensive Excel services including VBA macro development, custom spreadsheet design, formula development, data analysis, pivot tables and reporting, training and support, add-in development, and upgrades and migration services. Our experienced consultants work across all Excel versions and integrate with other Microsoft Office applications.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide services Australia-wide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide Excel consulting services across all Australian states and territories. We have consultants in major cities including Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra and more. We offer both remote consulting and on-site services depending on your requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How experienced are your Excel consultants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All our Excel consultants have a minimum of 15 years of professional experience. Our team includes senior developers and VBA programmers who specialise in creating custom Excel solutions for Australian businesses. We have over 25 years of combined experience serving businesses across all industries.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate Excel with other systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we specialise in Excel integration with other Microsoft Office applications, databases, CRM systems, accounting packages, and third-party software. We can create automated data flows between Excel and your existing business systems using VBA, APIs, and various integration technologies.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide ongoing support after project completion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer ongoing support and maintenance services. This includes troubleshooting, updates, enhancements, training, and technical assistance. We can provide support on an as-needed basis or through structured support agreements depending on your requirements.",
          },
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
        title="Microsoft Excel Services"
        desktopImage={services}
        mobileImage={servicesMob}
        altDesk="Microsoft Excel services and solutions"
        altMob="Excel consulting services"
      />
      <PageSegmentMain />
      <ServicesSection />
      <WhyChooseUs />
      <IndustrySection />
      <HowWeWork />
      <AustraliaWide />
      <Testimonials testimonials={testimonials} />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
