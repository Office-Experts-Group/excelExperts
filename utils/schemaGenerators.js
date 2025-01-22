// utils/schemaGenerators.js
export const generateProfessionalServiceSchema = () => ({
  "@type": "ProfessionalService",
  "@id": `https://www.excelexperts.com.au/#business`,
  name: "Microsoft Excel Consulting Services",
  url: "https://www.excelexperts.com.au/",
  description: "Professional Microsoft Excel consulting and support services",
  priceRange: "$$",
  serviceType: "Microsoft Excel Consulting",
  availableService: [
    {
      "@type": "Service",
      name: "Remote Consulting",
      description: "Australia-wide remote Microsoft Excel consulting services",
    },
    {
      "@type": "Service",
      name: "On-site Consulting",
      description:
        "In-house Microsoft Excel consulting services available in major metropolitan areas",
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
  location: [
    // New South Wales
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Sydney",
        postalCode: "2000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Sydney Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Grafton",
        postalCode: "2460",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Grafton Region",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Newcastle",
        postalCode: "2300",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Newcastle Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Wollongong",
        postalCode: "2500",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Wollongong Metropolitan Area",
      },
    },
    // Victoria
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Melbourne",
        postalCode: "3000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Melbourne Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Richmond",
        postalCode: "3121",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Richmond Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Geelong",
        postalCode: "3220",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Geelong Metropolitan Area",
      },
    },
    // Queensland
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Brisbane",
        postalCode: "4000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Brisbane Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Gold Coast",
        postalCode: "4217",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Gold Coast Metropolitan Area",
      },
    },
    // Western Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "WA",
        addressLocality: "Perth",
        postalCode: "6000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Perth Metropolitan Area",
      },
    },
    // South Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "SA",
        addressLocality: "Adelaide",
        postalCode: "5000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Adelaide Metropolitan Area",
      },
    },
    // Northern Territory
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NT",
        addressLocality: "Darwin",
        postalCode: "0800",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Darwin Metropolitan Area",
      },
    },
    // ACT
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "ACT",
        addressLocality: "Canberra",
        postalCode: "2600",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Canberra Metropolitan Area",
      },
    },
  ],
  virtualLocation: {
    "@type": "VirtualLocation",
    name: "Remote Service Available Australia-wide",
  },
  provider: {
    "@type": "Organization",
    "@id": `https://www.excelexperts.com.au/#organization`,
  },
  telephone: "1300 102 810",
  email: "consult@excelexperts.com.au",
});

export const generateOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://www.excelexperts.com.au/#organization",
  name: "Office Experts Group",
  url: "https://www.excelexperts.com.au/",
  telephone: "1300 102 810",
  email: "consult@excelexperts.com.au",
  // Enhanced contact point information
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "1300 102 810",
      email: "consult@excelexperts.com.au",
      availableLanguage: ["en", "en-AU"],
      contactOption: "TollFree",
      hoursAvailable: "Mo,Tu,We,Th,Fr 09:00-17:00",
    },
  ],
  // Remote service availability
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Excel Consulting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Add-in Development",
          description:
            "Custom Excel add-in development for enhanced spreadsheet functionality",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Manipulation",
          description:
            "Professional data cleaning, transformation, and analysis services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pivot Tables & Reporting",
          description:
            "Advanced pivot table creation and custom reporting solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Excel Support",
          description:
            "Ongoing technical support and maintenance for Excel solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Development",
          description: "Tailored Excel solution design and implementation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Formula Development",
          description: "Complex Excel formula creation and optimisation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Upgrades & Migration",
          description: "Excel version upgrades and workbook migration services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "VBA Macro Development",
          description: "Custom VBA macro programming for Excel automation",
        },
      },
    ],
  },
  location: [
    // New South Wales
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Sydney",
        postalCode: "2000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Sydney Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Grafton",
        postalCode: "2460",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Grafton Region",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Newcastle",
        postalCode: "2300",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Newcastle Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Wollongong",
        postalCode: "2500",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Wollongong Metropolitan Area",
      },
    },
    // Victoria
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Melbourne",
        postalCode: "3000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Melbourne Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Richmond",
        postalCode: "3121",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Richmond Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Geelong",
        postalCode: "3220",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Geelong Metropolitan Area",
      },
    },
    // Queensland
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Brisbane",
        postalCode: "4000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Brisbane Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Gold Coast",
        postalCode: "4217",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Gold Coast Metropolitan Area",
      },
    },
    // Western Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "WA",
        addressLocality: "Perth",
        postalCode: "6000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Perth Metropolitan Area",
      },
    },
    // South Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "SA",
        addressLocality: "Adelaide",
        postalCode: "5000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Adelaide Metropolitan Area",
      },
    },
    // Northern Territory
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NT",
        addressLocality: "Darwin",
        postalCode: "0800",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Darwin Metropolitan Area",
      },
    },
    // ACT
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "ACT",
        addressLocality: "Canberra",
        postalCode: "2600",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Canberra Metropolitan Area",
      },
    },
  ],
  virtualLocation: {
    "@type": "VirtualLocation",
    name: "Remote Service Available Australia-wide",
  },
  logo: {
    "@type": "ImageObject",
    inLanguage: "en-AU",
    "@id": "https://www.excelexperts.com.au/logo.webp",
    url: "/logo.webp",
    contentUrl: "/logo.webp",
    width: 1200,
    height: 630,
    caption: "Office Experts Group",
  },
  image: {
    "@id": "https://www.excelexperts.com.au/logo.webp",
  },
  sameAs: [
    "https://www.facebook.com/MSOfficeExperts",
    "https://x.com/OfficeExpertsG1",
    "https://www.instagram.com/officeexpertsgroup",
    "https://www.linkedin.com/company/office-experts-group",
    "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
  ],
});
