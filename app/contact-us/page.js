import React from "react";

import Contact from "../../components/Contact";
import ServiceHero from "../../components/ServiceHero";
import CTAMain from "./(components)/CTAMain";
import ContactDetails from "../../components/ContactDetails";

import contactUs from "../../public/pageHeros/contactUs.webp";
import contactUsMob from "../../public/pageHeros/mob/contactUsMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/contact-us/",
      url: "https://www.excelexperts.com.au/contact-us/",
      name: "Contact Us | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au/#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      datePublished: "2017-11-19T03:48:14+00:00",
      dateModified: "2022-11-09T01:35:34+00:00",
      description:
        "We have expert consultants across Australia and can provide services onsite or by remote access. Contact us Today Consult@officeexperts.com.au",
      breadcrumb: {
        "@id": "https://www.excelexperts.com.au/contact-us/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.excelexperts.com.au/contact-us/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.excelexperts.com.au/contact-us/#breadcrumb",
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
          name: "Contact Us",
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
        title="Contact Us"
        desktopImage={contactUs}
        mobileImage={contactUsMob}
        altDesk={"contact method icons on wooden blocks"}
        altMob={"contact method icons on wooden blocks"}
      />
      <CTAMain />
      <Contact />
      <ContactDetails />
    </>
  );
};

export default Page;
