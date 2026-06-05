// app/services/excel/excel-formulas-and-custom-formulas/(components)/FormulasDark.jsx

import React from "react";
import styles from "../../../styles/formulasDark.module.scss";

// Custom SVGs from local svgs directory
import PerformanceSVG from "../(svgs)/PerformanceSVG";
import FormulaSVG from "../(svgs)/FormulaSVG";
import CustomSVG from "../(svgs)/CustomSVG";
import Link from "next/link";

/* ─── Three visual anchors that sit below the main paragraph ─────────────── */
const pillars = [
  {
    Icon: PerformanceSVG,
    label: "Performance",
    note: "Correct formula structure prevents crashes, corruption and slow workbooks.",
  },
  {
    Icon: FormulaSVG,
    label: "Formula Design",
    note: "The right formula in the right place keeps workbooks clean and auditable.",
  },
  {
    Icon: CustomSVG,
    label: "Custom Solutions",
    note: "Bespoke formulas and macros built around your exact workflow.",
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */
const FormulasDark = () => {
  return (
    <section className={styles.section}>
      <div className={styles.dotGrid} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Two-tone heading */}
        <h2 className={styles.heading}>
          VBA Solutions,{" "}
          <span className={styles.headingMuted}>done properly.</span>
        </h2>

        {/* ── Original paragraph — untouched ── */}
        <div className={styles.body}>
          <p>
            Formula intensive workbooks often lead to high maintenance and
            inaccurate results over their lifetime. In fact, workbooks that use
            formulas intensively can result in poor performance, and cause
            crashes and data corruption, so it matters that formulas are set up
            correctly and not overused. Often a few cleverly written macros can
            lead to a more manageable and workable workbook, saving you time,
            money and a few headaches over the long term.
          </p>
          <Link href="#contact" style={{ color: "#046999", fontWeight: "700" }}>
            We can build you a custom solution.
          </Link>
        </div>

        {/* ── Three SVG pillar strip ── */}
        <div className={styles.pillars}>
          {pillars.map(({ Icon, label, note }) => (
            <div key={label} className={styles.pillar}>
              <div className={styles.iconWrap}>
                <Icon />
              </div>
              <p className={styles.pillarLabel}>{label}</p>
              <p className={styles.pillarNote}>{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormulasDark;
