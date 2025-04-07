import React from "react";

import ServiceHero from "../../components/ServiceHero";
import LocationGroups from "./(components)/LocationGroups";
import Promo from "../../components/Promo";
import Contact from "../../components/Contact";

import australia from "../../public/pageHeros/australia.webp";
import australiaMob from "../../public/pageHeros/mob/australiaMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

// Import location images
import sydney from "../../public/pageHeros/sydney.webp";
import melbourne from "../../public/pageHeros/mob/melbourneMob.webp";
import brisbane from "../../public/pageHeros/mob/brisbaneMob.webp";
import perth from "../../public/pageHeros/mob/perthMob.webp";
import adelaide from "../../public/pageHeros/mob/adelaideMob.webp";
import canberra from "../../public/pageHeros/mob/canberraMob.webp";
import northernRivers from "../../public/pageHeros/mob/northernRiversMob.webp";
import wollongong from "../../public/pageHeros/mob/wollongongMob.webp";
import richmond from "../../public/pageHeros/mob/richmondMob.webp";
import darwin from "../../public/pageHeros/mob/darwinMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/locations",
      url: "https://www.excelexperts.com.au/locations",
      name: "Microsoft Excel Experts Locations",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au#website",
      },
      datePublished: "2023-03-26T00:00:00+00:00",
      dateModified: "2025-03-26T00:00:00+00:00",
      breadcrumb: {
        "@id": "https://www.excelexperts.com.au/locations#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/locations"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.excelexperts.com.au/locations#breadcrumb",
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
          name: "Locations",
          item: "https://www.excelexperts.com.au/locations",
        },
      ],
    },
  ],
};

const Page = () => {
  // Define the location data
  const locationData = [
    {
      id: "nsw",
      sectionTitle: "New South Wales",
      locations: [
        {
          name: "Sydney, NSW",
          image: sydney,
          alt: "Sydney skyline",
          description:
            "Our Sydney specialists develop advanced Microsoft Excel solutions throughout the Greater Sydney metropolitan area. Developing custom formulas, data analysis tools, custom spreadsheets, and interactive dashboards, our team provides comprehensive training and support for all Microsoft Excel functionality.",
          serviceLinks: {
            excel: "/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
        {
          name: "Northern Rivers, NSW",
          image: northernRivers,
          alt: "Northern Rivers region",
          description:
            "Serving the Northern Rivers region of NSW, our team builds sophisticated Microsoft Excel solutions for businesses across various sectors. We deliver both remote and on-site implementation of data analysis tools, automated reporting systems, VBA macros, and customised spreadsheet applications.",
          serviceLinks: {
            excel: "/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
        {
          name: "Wollongong, NSW",
          image: wollongong,
          alt: "Wollongong coastline",
          description:
            "Our Wollongong team serves the Illawarra region with specialised data analysis and spreadsheet optimisation services. We develop custom Excel solutions for organisations looking to enhance their data management capabilities.",
          serviceLinks: {
            excel: "/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "vic",
      sectionTitle: "Victoria",
      locations: [
        {
          name: "Melbourne, VIC",
          image: melbourne,
          alt: "Melbourne cityscape",
          description:
            "Our Melbourne team designs Microsoft Excel solutions across the Greater Melbourne region. Office Experts Group excels in add-in development, complex formulas, custom forms, and reporting dashboards using the full Microsoft Excel toolkit. Our dedicated Excel consultants are certified specialists in spreadsheet optimisation and data analysis.",
          serviceLinks: {
            excel: "/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
        {
          name: "Richmond, VIC",
          image: richmond,
          alt: "Richmond area",
          description:
            "Located in the heart of Richmond, our Excel experts deliver tailored spreadsheet and data analysis solutions for local enterprises. We specialise in developing automated reporting systems and calculation frameworks that significantly enhance productivity and analytical capabilities.",
          serviceLinks: {
            excel: "/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "qld",
      sectionTitle: "Queensland",
      locations: [
        {
          name: "Brisbane, QLD",
          image: brisbane,
          alt: "Brisbane river and skyline",
          description:
            "Our Brisbane team creates Microsoft Excel solutions throughout Southeast Queensland. We develop data models, custom formulas, and interactive reporting dashboards to transform how organisations analyse information. Our Excel specialists have been optimising spreadsheet functionality for over two decades.",
          serviceLinks: {
            excel: "/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "wa",
      sectionTitle: "Western Australia",
      locations: [
        {
          name: "Perth, WA",
          image: perth,
          alt: "Perth skyline",
          description:
            "Our Perth consultants design Excel solutions for businesses throughout Western Australia. We create custom spreadsheet applications, custom formulas, automated reporting tools, and interactive dashboards to enhance your data analysis capabilities and support better decision-making.",
          serviceLinks: {
            excel: "/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "sa",
      sectionTitle: "South Australia",
      locations: [
        {
          name: "Adelaide, SA",
          image: adelaide,
          alt: "Adelaide city view",
          description:
            "Serving South Australian organisations, our Adelaide team develops Microsoft Excel solutions tailored to diverse business requirements. We build comprehensive spreadsheet systems, calculation models, and data visualisation tools that address complex analytical challenges and support strategic planning.",
          serviceLinks: {
            excel: "/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "act",
      sectionTitle: "Australian Capital Territory",
      locations: [
        {
          name: "Canberra, ACT",
          image: canberra,
          alt: "Canberra parliament house",
          description:
            "Our Canberra team specialises in Microsoft Excel solutions for government departments and local organisations. Within the Office Experts Group, our Excel specialists focus on developing secure, compliant data analysis tools and reporting systems that meet the unique requirements of government and regulated industries.",
          serviceLinks: {
            excel: "/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "nt",
      sectionTitle: "Northern Territory",
      locations: [
        {
          name: "Darwin, NT",
          image: darwin,
          alt: "Darwin harbor",
          description:
            "Our Northern Territory team delivers Microsoft Excel solutions to Darwin businesses and organisations. We implement custom spreadsheets, formulas, and data analysis frameworks that work effectively in remote environments, with both on-site and cloud-based support options.",
          serviceLinks: {
            excel: "/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title="Our Locations"
        desktopImage={australia}
        mobileImage={australiaMob}
        altDesk="Australia map"
        altMob="man holding Australia flag"
      />

      {locationData.map((section) => (
        <LocationGroups
          key={section.id}
          sectionTitle={section.sectionTitle}
          locations={section.locations}
        />
      ))}

      <Promo
        h2={"Need spreadsheet and data analysis solutions in your area?"}
        p={
          "Contact us today to discover how our local and remote services can help your organisation leverage the full capabilities of Microsoft Excel."
        }
      />
      <Contact />
    </>
  );
};

export default Page;
