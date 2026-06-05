// app/services/excel/excel-formulas-and-custom-formulas/(components)/FormulasWhyChoose.jsx

import React from "react";
import styles from "../../../styles/formulasWhyChoose.module.scss";

/* ─── Accordion items ────────────────────────────────────────────────────── */
const items = [
  {
    title: "Simplify Complex Calculations",
    body: "Replace strange combinations of nested functions with clean, purpose-built formulas that are easier to maintain and understand. Your team will spend less time deciphering logic and more time using the results.",
  },
  {
    title: "Improve Workbook Performance",
    body: "Optimise calculation efficiency for faster processing, especially with large datasets. Poorly structured formulas are a leading cause of slow, crash-prone workbooks.",
  },
  {
    title: "Implement Unique Business Logic",
    body: "Create calculations specific to your industry, compliance requirements, or proprietary methodologies. Standard Excel functions are just the tip of the iceberg.",
  },
  {
    title: "Enhance Data Validation",
    body: "Develop specialised checking mechanisms that enforce your business rules and data quality standards. Catch errors at the point of entry rather than discovering them in final reports.",
  },
  {
    title: "Increase Accuracy",
    body: "Reduce the risk of errors by consolidating complex logic into well-tested, reliable custom formula. A few lines of code maintained in one place is far less error-prone than the same logic duplicated across dozens of cells.",
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */
const FormulasWhyChoose = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left: heading block */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>Our Approach</span>
          <h2 className={styles.heading}>
            Why Choose{" "}
            <span className={styles.headingAccent}>Excel Experts?</span>
          </h2>
          <p className={styles.intro}>
            We choose simplicity over complexity, if there is an easy way to
            accomplish a task, it is generally also the most effective.
            Sometimes however there is simply no out-of-the-box solution.
            Programming with VBA allows for specialised business logic that
            standard Excel functions just might not cover.
          </p>
          <p className={styles.closing}>
            Our experts collaborate with you to understand your specific
            requirements and develop code that integrates into your existing
            workflows.
          </p>
        </div>

        {/* Right: details/summary accordion */}
        <div className={styles.accordion}>
          {items.map(({ title, body }, i) => (
            <details key={title} className={styles.item}>
              <summary className={styles.summary}>
                <span className={styles.summaryNum}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.summaryTitle}>{title}</span>
                {/* Chevron — CSS rotates it when open */}
                <span className={styles.chevron} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className={styles.body}>
                <p>{body}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormulasWhyChoose;
