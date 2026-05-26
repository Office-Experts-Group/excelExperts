// app/pivot-tables-charts-and-reporting-solutions/(components)/PivotCopilot.jsx
import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/pivotCopilot.module.css";

const credentials = [
  {
    num: "25+",
    label: "Senior Developers",
    body: "Our nationwide team consists of experts across the entire Microsoft ecosystem, this allows us to deliver fully integrated solutions.",
  },
  {
    num: "AU",
    label: "Australia-wide",
    body: "We have consultants across the country. Though the vast majority of our projects are delivered entirely remotely. We also provide on-site support.",
  },
  {
    num: "∞",
    label: "No lock-in",
    body: "Quote-based or hourly. Every project is documented and handed over so your team can maintain it independently.",
  },
  {
    num: "100%",
    label: "Tailored builds",
    body: "We don't just sell templates. Every solution is built around your data, your workflow and the people who need to work with it.",
  },
];

const ArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PivotCopilot = () => (
  <section className={styles.section}>
    {/* ══ Why Excel Experts — split layout ══ */}
    <div className={styles.whySplit}>
      {/* Left: heading + copy */}
      <AnimateOnScroll animation="fade-right" duration={0.65}>
        <div className={styles.whyLeft}>
          <span className={styles.eyebrow}>Why Excel Experts</span>
          <h2 className={styles.whyHeading}>
            Australia's Excel specialists
            <span className={styles.accent}> since 2000.</span>
          </h2>
          <p className={styles.whyBody}>
            A part of the Office Experts Group, we have a nationwide team of
            over 25 senior developers, consultants and designers. We have grown
            to become the countries leading Microsoft specialists by
            consistently delivering comprehensive software solutions for
            thousands of happy clients.
          </p>
          <div className={styles.whyCtas}>
            <Link href="/about-us" className={styles.linkUnderline}>
              About Us <ArrowIcon />
            </Link>
            <Link href="/client-testimonials" className={styles.linkUnderline}>
              Client testimonials <ArrowIcon />
            </Link>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Right: credential tiles grid */}
      <div className={styles.credGrid}>
        {credentials.map((c, i) => (
          <div key={i} className={styles.credTile}>
            <span className={styles.credNum} aria-hidden="true">
              {c.num}
            </span>
            <h3 className={styles.credLabel}>{c.label}</h3>
            <p className={styles.credBody}>{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PivotCopilot;
