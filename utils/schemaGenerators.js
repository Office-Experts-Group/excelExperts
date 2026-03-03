// utils/schemaGenerators.js
// Generates reusable Organization, LocalBusiness, and WebSite schemas for Excel Experts
// Part of the Office Experts Group network — excelexperts.com.au

// Shared service area used by both Organization and ProfessionalService schemas
const SERVICE_AREAS = [
  { "@type": "Country", name: "Australia" },
  { "@type": "AdministrativeArea", name: "New South Wales" },
  { "@type": "AdministrativeArea", name: "Victoria" },
  { "@type": "AdministrativeArea", name: "Queensland" },
  { "@type": "AdministrativeArea", name: "Western Australia" },
  { "@type": "AdministrativeArea", name: "South Australia" },
  { "@type": "AdministrativeArea", name: "Tasmania" },
  { "@type": "AdministrativeArea", name: "Australian Capital Territory" },
  { "@type": "AdministrativeArea", name: "Northern Territory" },
];

// Physical/operational locations for the business
const LOCATIONS = [
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NSW",
      addressLocality: "Sydney",
      postalCode: "2000",
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
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "VIC",
      addressLocality: "Melbourne",
      postalCode: "3000",
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
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "QLD",
      addressLocality: "Brisbane",
      postalCode: "4000",
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
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "WA",
      addressLocality: "Perth",
      postalCode: "6000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "SA",
      addressLocality: "Adelaide",
      postalCode: "5000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NT",
      addressLocality: "Darwin",
      postalCode: "0800",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "ACT",
      addressLocality: "Canberra",
      postalCode: "2600",
    },
  },
];

// Excel-specific services — using valid schema.org Service type with serviceType string
const SERVICES = [
  // Dashboards & Reporting
  { name: "Excel Dashboard Creation", serviceType: "Excel Consulting" },
  { name: "Pivot Tables & Reporting", serviceType: "Excel Consulting" },
  { name: "KPI Reporting Solutions", serviceType: "Excel Consulting" },
  // Data & Analysis
  { name: "Data Manipulation & Cleaning", serviceType: "Excel Consulting" },
  { name: "Data Analysis & Visualisation", serviceType: "Excel Consulting" },
  {
    name: "Financial Modelling and Forecasting",
    serviceType: "Excel Consulting",
  },
  // Power Tools
  { name: "Power Pivot & Power Query", serviceType: "Excel Consulting" },
  { name: "Power BI Integration", serviceType: "Excel Consulting" },
  // Formulas & Development
  { name: "Formula Development", serviceType: "Excel Consulting" },
  { name: "VBA Macro Development", serviceType: "Excel Consulting" },
  { name: "Add-in Development", serviceType: "Excel Consulting" },
  { name: "Custom Excel Development", serviceType: "Excel Consulting" },
  // Integration
  {
    name: "SharePoint & OneDrive Integration",
    serviceType: "Excel Consulting",
  },
  {
    name: "Third-party Application Integration",
    serviceType: "Excel Consulting",
  },
  {
    name: "SQL Server & Database Integration",
    serviceType: "Excel Consulting",
  },
  // Support & Migration
  { name: "Excel Support & Troubleshooting", serviceType: "Excel Consulting" },
  { name: "Upgrades & Migration", serviceType: "Excel Consulting" },
  { name: "Remote Consulting", serviceType: "Australia-wide Excel services" },
  {
    name: "On-site Consulting",
    serviceType: "In-house Microsoft Excel consultation",
  },
];

// Builds an Offer node for each service in the SERVICES array
const buildOffers = () =>
  SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.name,
      serviceType: s.serviceType,
    },
  }));

// ProfessionalService schema for excelexperts.com.au
// areaServed and location are valid on LocalBusiness (ProfessionalService extends LocalBusiness)
export const generateProfessionalServiceSchema = () => ({
  "@type": "ProfessionalService",
  "@id": "https://www.excelexperts.com.au#business",
  name: "Microsoft Excel Consulting Services",
  url: "https://www.excelexperts.com.au",
  description:
    "Professional Microsoft Excel consulting, development, and support services across Australia",
  priceRange: "$$",
  telephone: "1300 102 810",
  email: "consult@excelexperts.com.au",
  areaServed: SERVICE_AREAS,
  location: LOCATIONS,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Microsoft Excel Consulting Services",
    itemListElement: buildOffers(),
  },
});

// Organization schema for excelexperts.com.au — clean, no invalid nested properties
export const generateOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://www.excelexperts.com.au#organization",
  name: "Office Experts Group",
  url: "https://www.excelexperts.com.au",
  telephone: "1300 102 810",
  email: "consult@excelexperts.com.au",
  foundingDate: "2000",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "1300 102 810",
      email: "consult@excelexperts.com.au",
      availableLanguage: "en-AU",
      contactOption: "TollFree",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    },
  ],
  logo: {
    "@type": "ImageObject",
    "@id": "https://www.excelexperts.com.au/logo.png",
    url: "https://www.excelexperts.com.au/logo.png",
    contentUrl: "https://www.excelexperts.com.au/logo.png",
    width: 1200,
    height: 630,
    caption: "Office Experts Group",
  },
  image: {
    "@id": "https://www.excelexperts.com.au/logo.png",
  },
  sameAs: [
    "https://www.facebook.com/MSOfficeExperts",
    "https://x.com/OfficeExpertsG1",
    "https://www.instagram.com/officeexpertsgroup",
    "https://www.linkedin.com/company/office-experts-group",
    "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
  ],
});

// WebSite schema for excelexperts.com.au
// Parameterised to match the officeexperts template pattern
export const generateWebSiteSchema = (
  domain = "https://www.excelexperts.com.au",
  name = "Excel Experts",
  description = "Your Microsoft Excel Design, Development and Consulting Experts",
) => ({
  "@type": "WebSite",
  "@id": `${domain}#website`,
  url: domain,
  name,
  description,
  publisher: {
    // References the Organization node in the same @graph — no need to repeat org data
    "@id": `${domain}#organization`,
  },
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${domain}?s={search_term_string}`,
      },
      // Must be a plain string — object format (PropertyValueSpecification) causes validation errors
      "query-input": "required name=search_term_string",
    },
  ],
  inLanguage: "en-AU",
});
