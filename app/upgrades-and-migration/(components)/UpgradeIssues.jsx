// app/services/excel/upgrades-and-migration/(components)/UpgradeIssues.jsx
"use client";

import { useState } from "react";
import styles from "../../../styles/upgradeIssues.module.scss";

import { DiagnosticSvg } from "../(svgs)/DiagnosticSvg";

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

const issues = [
  {
    title: "32/64-bit versions of Microsoft Windows and Office",
    badge: "Compatibility",
    badgeType: "fail",
    content:
      "Upgrading between 32-bit and 64-bit versions can cause compatibility issues with Excel add-ins and functions. Our experts can adjust your workbooks and code to ensure seamless operation in the new environment.",
  },
  {
    title: "Macro or VBA issues with incompatible code such as Windows APIs",
    badge: "VBA",
    badgeType: "warn",
    content:
      "VBA code and macros may not work correctly when migrating to newer Excel versions. We analyse and update your code, ensuring all functionalities are compatible and optimised for performance.",
  },
  {
    title: "Shapes and ActiveX buttons change size",
    badge: "Controls",
    badgeType: "fail",
    content:
      "Changes in version compatibility can alter the appearance and size of shapes and controls. We can standardise and fix these elements, ensuring your workbook layout remains intact.",
  },
  {
    title: "Crashing occurring after migration",
    badge: "Critical",
    badgeType: "critical",
    content:
      "Crashes often result from hidden compatibility or resource issues. Our team will debug and streamline your workbook to make it stable and reliable in the updated version of Excel.",
  },
  {
    title: "Workbook speeds grinding to a halt and becoming unworkable",
    badge: "Performance",
    badgeType: "slow",
    content:
      "Performance slowdowns are common with inefficient formulas or outdated data structures. We optimise your workbook by improving formulas, reducing calculation times, and streamlining data processes.",
  },
];

const UpgradeIssues = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className={styles.section} id="upgrade-issues">
      <div className={styles.inner}>
        {/* ── Left: content ── */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>Common upgrade issues</span>
          <h2 className={styles.heading}>
            Excel Upgrade <span className={styles.accent}>Diagnostic</span>
          </h2>
          <p className={styles.lead}>
            Through decades of experience we have seen many reasons why users
            have issues upgrading to new versions of Excel.
          </p>

          {/* Accordion */}
          <div className={styles.accordion}>
            {issues.map((issue, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                >
                  <button
                    className={styles.itemHeader}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`${styles.badge} ${styles[`badge_${issue.badgeType}`]}`}
                    >
                      {issue.badge}
                    </span>
                    <span className={styles.itemTitle}>{issue.title}</span>
                    <span className={styles.itemToggle}>
                      <PlusMinusIcon open={isOpen} />
                    </span>
                  </button>
                  <div className={styles.itemDrawer} aria-hidden={!isOpen}>
                    <p className={styles.itemContent}>{issue.content}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <a href="#contact" className={styles.cta}>
            Get your workbook diagnosed
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* ── Right: diagnostic SVG ── */}
        <div className={styles.visual}>
          <DiagnosticSvg />
        </div>
      </div>
    </section>
  );
};

export default UpgradeIssues;
