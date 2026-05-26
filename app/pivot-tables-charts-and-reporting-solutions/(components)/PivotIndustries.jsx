// app/pivot-tables-charts-and-reporting-solutions/(components)/PivotIndustries.jsx
"use client";

import React, { useState } from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/pivotIndustries.module.css";

const industries = [
  {
    id: "finance",
    name: "Finance & Accounting",
    summary:
      "P&L, cash flow, and budget reporting automated from your accounting systems.",
    useCases: [
      "Monthly P&L and variance reports refreshed from MYOB, Xero, or ERP exports",
      "Cash flow dashboards with rolling forecasts and scenario modelling",
      "Budget vs actuals pivot tables sliced by cost centre, department, or project",
      "Automated month-end report packs distributed via Outlook",
    ],
  },
  {
    id: "sales",
    name: "Sales & Marketing",
    summary:
      "Pipeline, territory, and campaign performance consolidated in one place.",
    useCases: [
      "Sales pipeline and territory performance dashboards connected to CRM exports",
      "Campaign ROI reporting consolidated from multiple ad platforms via Power Query",
      "Lead conversion and funnel analysis with weekly auto-refresh",
      "Marketing spend vs revenue pivot tables by channel, region, or product",
    ],
  },
  {
    id: "operations",
    name: "Operations & Logistics",
    summary:
      "Inventory, supplier, and production KPIs tracked without manual effort.",
    useCases: [
      "Inventory and stock level tracking with conditional alerts at reorder thresholds",
      "Supplier performance scorecards updated from purchase order data",
      "Automated KPI reporting for shift output, production volumes, and downtime",
      "Delivery and fulfilment tracking consolidated from multiple warehouse sources",
    ],
  },
  {
    id: "hr",
    name: "Human Resources",
    summary:
      "Headcount, recruitment, and payroll data in clean, shareable reports.",
    useCases: [
      "Headcount, turnover, and leave liability dashboards by team or location",
      "Recruitment pipeline tracking with time-to-hire and source analysis",
      "Payroll cost summaries connected directly to HR system exports",
      "Workforce planning models with scenario toggles for headcount changes",
    ],
  },
  {
    id: "construction",
    name: "Construction & Engineering",
    summary:
      "Project cost, progress, and safety reporting without the manual assembly.",
    useCases: [
      "Project cost-to-complete and earned value reports by contract or phase",
      "Subcontractor spend and progress claim tracking against approved budgets",
      "Site safety and incident summary dashboards with trend analysis",
      "Equipment utilisation and maintenance cost reporting",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Professional Services",
    summary:
      "Volume, billing, and compliance data presented clearly for decision-makers.",
    useCases: [
      "Patient or client volume and trend analysis by practitioner, location, or service",
      "Billing and revenue reporting with gap analysis against Medicare or schedule fees",
      "Compliance and audit trail reporting with date-stamped records",
      "Referral source tracking and conversion dashboards",
    ],
  },
];

const PlusMinusIcon = ({ open }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <line
      x1="8"
      y1="2"
      x2="8"
      y2="14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      style={{
        transform: open ? "scaleY(0)" : "scaleY(1)",
        transformOrigin: "center",
        transition: "transform 0.28s ease",
      }}
    />
    <line
      x1="2"
      y1="8"
      x2="14"
      y2="8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const PivotIndustries = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggle = (id) => setOpenItem((prev) => (prev === id ? null : id));

  return (
    <section className={styles.section}>
      {/* ── Header ── */}
      <AnimateOnScroll animation="slide-left" duration={0.6}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Industry Experience</span>
          <h2 className={styles.heading}>
            Reporting solutions for{" "}
            <span className={styles.accent}>every industry.</span>
          </h2>
          <p className={styles.intro}>
            Our clients come from a diverse range of industries. In every sector
            though the basic need is the same, accurate, timely data presented
            clearly and easy to work with.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── Accordion list ── */}
      <ul className={styles.list} aria-label="Industries we serve">
        {industries.map((industry, i) => {
          const isOpen = openItem === industry.id;
          return (
            <li className={styles.item + (isOpen ? " " + styles.itemOpen : "")}>
              {/* ── Row header button ── */}
              <button
                className={styles.itemHeader}
                onClick={() => toggle(industry.id)}
                aria-expanded={isOpen}
                aria-controls={`industry-${industry.id}`}
              >
                <div className={styles.itemTitle}>
                  <h3 className={styles.itemName}>{industry.name}</h3>
                  <p className={styles.itemSummary}>{industry.summary}</p>
                </div>
                <span className={styles.itemToggle}>
                  <PlusMinusIcon open={isOpen} />
                </span>
              </button>

              {/* ── Expandable drawer ── */}
              <div
                id={`industry-${industry.id}`}
                className={styles.drawer}
                aria-hidden={!isOpen}
              >
                <ul className={styles.drawerList}>
                  {industry.useCases.map((uc) => (
                    <li key={uc} className={styles.drawerItem}>
                      <span className={styles.drawerCheck} aria-hidden="true">
                        ✓
                      </span>
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PivotIndustries;
