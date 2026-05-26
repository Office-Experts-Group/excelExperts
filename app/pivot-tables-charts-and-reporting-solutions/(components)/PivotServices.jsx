// app/pivot-tables-charts-and-reporting-solutions/(components)/PivotServices.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/pivotServices.module.css";

const services = [
  {
    id: "pivot-tables",
    num: "01",
    heading: "Pivot Tables",
    description:
      "Slice, group and aggregate large datasets in seconds with no formulas required. We design the field layout, calculated fields, and conditional formatting, then hand it over as a template your team can refresh.",
    chips: ["Calculated fields", "Custom groupings", "Shared pivot caches"],
  },
  {
    id: "power-query",
    num: "02",
    heading: "Power Query",
    description:
      "Automate the data preparation that happens before every report. We connect to your files, databases, SharePoint lists and APIs, clean and reshape the data, and reduce the whole process to a one-click refresh.",
    link: {
      href: "https://www.officeexperts.com.au/services/power-query",
      text: "Power Query",
    },
    chips: [
      "SQL, SharePoint & API sources",
      "Dedup & normalisation",
      "M language transforms",
    ],
  },
  {
    id: "powerpivot",
    num: "03",
    heading: "PowerPivot & Data Modelling",
    description:
      "Extend Excel to handle millions of rows from multiple sources. We build DAX measures, KPIs and table relationships that go beyond what standard pivot tables can do.",
    link: {
      href: "https://www.officeexperts.com.au/services/power-pivot",
      text: "PowerPivot",
    },
    chips: [
      "Data Model relationships",
      "DAX measures & KPIs",
      "Time intelligence",
    ],
  },
  {
    id: "dashboards",
    num: "04",
    heading: "Excel Dashboards",
    description:
      "All your key metrics on one screen, auto-refreshing from your data source. We design interactive dashboards with slicers, KPI tiles and conditional indicators, with this foundation there is no Excel skills needed from the end user.",
    link: {
      href: "https://www.officeexperts.com.au/services/by-business-solution/dashboards",
      text: "Dashboards",
    },
    chips: ["Auto-refresh", "Slicer interactivity", "SharePoint embedding"],
  },
  {
    id: "vba",
    num: "05",
    heading: "VBA Reporting Automation",
    description:
      "For workflows that need to do more than just refresh, we can automate reporting, email them on a schedule, or apply stable formatting rules. VBA wraps around pivot tables and Power Query to create one-click reporting systems.",
    link: { href: "/vba-macro-development", text: "VBA Automation" },
    chips: [
      "Scheduled report generation",
      "Outlook email distribution",
      "One-click automation",
    ],
  },
  {
    id: "power-bi",
    num: "06",
    heading: "Power BI",
    description:
      "When reports need to be shared live across a team or accessed on mobile, Power BI is the right tool. Our team at Power Platform Experts work with us to build Power BI solutions, for some situations it's a better fit than Excel.",
    link: {
      href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
      text: "Power BI Support",
    },
    chips: [
      "Live web dashboards",
      "Mobile access",
      "Excel-to-Power BI migration",
    ],
  },
];

const ArrowIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2.5 9.5l7-7M5 2.5h4.5V7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PivotServices = () => (
  <section className={styles.section} id="services">
    <div className={styles.layout}>
      <div className={styles.leftCol}>
        <span className={styles.eyebrow}>What We Build</span>
        <h2 className={styles.heading}>
          The full reporting
          <span className={styles.accent}> toolkit.</span>
        </h2>
        <p className={styles.intro}>
          From a single pivot table through to an automated reporting pipeline,
          we find the tool to solve your problem.
        </p>
        <Link href="#contact" className={styles.cta}>
          Discuss your project
        </Link>
      </div>

      {/* ── Right: service rows ── */}
      <div className={styles.serviceList}>
        {services.map((s, i) => (
          <AnimateOnScroll
            key={s.id}
            animation="fade-up"
            duration={0.5}
            delay={i * 0.01}
          >
            <article className={styles.row} id={s.id}>
              <span className={styles.num} aria-hidden="true">
                {s.num}
              </span>

              <div className={styles.rowBody}>
                <h3 className={styles.rowHeading}>{s.heading}</h3>
                <p className={styles.rowDesc}>{s.description}</p>

                <div className={styles.chips}>
                  {s.chips.map((chip) => (
                    <span key={chip} className={styles.chip}>
                      {chip}
                    </span>
                  ))}
                  {s.link && (
                    <Link href={s.link.href} className={styles.learnMore}>
                      {s.link.text} <ArrowIcon />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default PivotServices;
