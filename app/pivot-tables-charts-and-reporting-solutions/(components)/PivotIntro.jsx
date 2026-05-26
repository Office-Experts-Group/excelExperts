// app/pivot-tables-charts-and-reporting-solutions/(components)/PivotIntro.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/pivotIntro.module.css";

// Trust bar items displayed beneath the intro copy
const trustItems = [
  { label: "Quote or hourly rate" },
  { label: "Ongoing support" },
  { label: "Remote access or onsite" },
  { label: "Tailored training" },
  { label: "Experts Australia-wide" },
];

const PivotIntro = () => (
  <section className={styles.section}>
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <span className={styles.eyebrow}>Excel Reporting Specialists</span>
      <h2 className={styles.heading}>
        Tired of fighting with messy spreadsheets?{" "}
        <span className={styles.accent}>Let our team handle it.</span>
      </h2>
    </AnimateOnScroll>

    <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.08}>
      <div className={styles.body}>
        <p>
          Most Australian businesses run on Excel, but unfortunately as the
          business grows its all to easy to just keep adding more and more
          complexity to a single spreadsheet, it can quickly get out of hand and
          soon becomes a nightmare to manage. Others inherit legacy workbooks,
          with systems in place designed by someone who has since left the
          company.
        </p>
        <p>
          Our consultants assess your data and workflow, then find the right
          solutions to meet your needs. Microsoft 365 has expanded Excel's
          toolkit dramatically over the last few years. Now with Power Query and
          Power Platform integrations, there are more options than ever to help
          simplify your daily operations.
        </p>

        <div className={styles.ctas}>
          <Link
            href="/contact-us/request-a-quote"
            className={styles.btnPrimary}
          >
            Get a free assessment
          </Link>
          <a href="tel:1300102810" className={styles.btnSecondary}>
            Call 1300 102 810
          </a>
        </div>
      </div>
    </AnimateOnScroll>

    {/* Trust bar */}
    <AnimateOnScroll animation="fade-up" duration={0.5} delay={0.14}>
      <ul className={styles.trustBar} aria-label="Service highlights">
        {trustItems.map((item) => (
          <li key={item.label} className={styles.trustItem}>
            <span className={styles.trustDot} aria-hidden="true" />
            {item.label}
          </li>
        ))}
      </ul>
    </AnimateOnScroll>
  </section>
);

export default PivotIntro;
