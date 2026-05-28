// app/services/excel/upgrades-and-migration/(components)/UpgradeProblem.jsx

import styles from "../../../styles/upgradeProblem.module.scss";

import { BrokenWorkbookSvg } from "../(svgs)/BrokenWorkbookSvg";

const painPoints = [
  {
    num: "01",
    question:
      "Are your Excel workbooks failing after a Microsoft Office upgrade?",
  },
  {
    num: "02",
    question:
      "Do you have slow or unworkable applications your business has outgrown?",
  },
  {
    num: "03",
    question:
      "Do you need to migrate to a new database or cloud-based solution?",
  },
];

const UpgradeProblem = () => {
  return (
    <section className={styles.section} id="upgrades">
      <div className={styles.inner}>
        {/* ── Left: SVG ── */}
        <div className={styles.visual}>
          <BrokenWorkbookSvg />
        </div>

        {/* ── Right: content ── */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>Upgrade and boost performance</span>
          <h2 className={styles.heading}>
            Is your spreadsheet{" "}
            <span className={styles.accent}>holding you back?</span>
          </h2>
          <p className={styles.lead}>
            Outdated workbooks don't announce themselves. They slow down, throw
            strange errors, and quietly become the most stressful files in your
            system.
          </p>
          <p className={styles.lead}>
            Your not alone with this problem, everyday we see successful
            businesses that have patched and propped up spreadsheets over the
            years, only to find themselves now in the same boat.
          </p>

          <div className={styles.painPoints}>
            {painPoints.map((p) => (
              <div key={p.num} className={styles.painPoint}>
                <span className={styles.painNum}>{p.num}</span>
                <p className={styles.painText}>{p.question}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className={styles.cta}>
            Get a free assessment
            <svg
              width="16"
              height="16"
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
      </div>
    </section>
  );
};

export default UpgradeProblem;
