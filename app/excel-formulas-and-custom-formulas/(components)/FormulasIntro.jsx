// app/services/excel/excel-formulas-and-custom-formulas/(components)/FormulasIntro.jsx

import React from "react";
import styles from "../../../styles/formulasIntro.module.scss";

import { FormulasSVG } from "../(svgs)/FormulasSVG";

/* ─── Component ─────────────────────────────────────────────────────────── */
const FormulasIntro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left: content */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>Custom Solutions</span>
          <h2 className={styles.heading}>
            Excel Formulas{" "}
            <span className={styles.headingAccent}>with Expert Results.</span>
          </h2>
          <p>
            Having trouble sorting out a formula or do you need a custom formula
            developed to extend Excel's functionality?
          </p>
          <p>
            Sometimes getting a formula to work properly or even understanding
            what may be required can be a difficult task. Some requirements may
            be complex enough that a custom formula may be the best solution.
          </p>
          <p>
            If you need help with formulas or custom formulas, or if you are not
            sure how to tackle an issue, our team of experts can help.
          </p>
        </div>

        {/* Right: SVG illustration */}
        <div className={styles.svgWrap} aria-hidden="true">
          <FormulasSVG />
        </div>
      </div>
    </section>
  );
};

export default FormulasIntro;
