import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Government Excel-Word Integration Solutions",
  description:
    "Expert Excel and Word integration services for government departments. Specializing in data automation, spreadsheet integration, and accessible reporting solutions for state and federal agencies.",

  openGraph: {
    title: "Government Excel-Word Integration Solutions",
    description:
      "Expert Excel and Word integration services for government departments. Specializing in data automation, spreadsheet integration, and accessible reporting solutions for state and federal agencies.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/government-departments/",
  },

  keywords: [
    // Core government services
    "government excel integration",
    "government data automation",
    "federal data management",
    "state government excel solutions",
    "government spreadsheet automation",

    // Service-specific
    "government data analysis",
    "excel reporting automation",
    "government data compliance",
    "automated government reports",
    "excel data integration",

    // Location-based
    "australian government excel services",
    "federal department data solutions",
    "state department excel automation",

    // Technical aspects
    "government data accessibility",
    "spreadsheet management",
    "government data standards",
    "compliant data processing",
    "automated report formatting",

    // Specific solutions
    "government excel templates",
    "data automation systems",
    "excel reporting controls",
    "automated data extraction",
    "government spreadsheet consistency",
  ],
  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/government-departments/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
