// app/services/vba-macro-development/(components)/VbaHero.jsx
import Link from "next/link";
import styles from "../../../styles/vbaHero.module.css";
import HeroDropdowns from "./HeroDropdowns";
import { VbaCodeSvg } from "../(svgs)/VbaCodeSvg";

const VbaHero = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.gridVisible} ${styles.grid}`}>
        {/* ── Left column ── */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>Excel Development</span>

          <h2 className={styles.heading}>
            Custom code for the{" "}
            <span className={styles.accentWord}>hard jobs</span>
          </h2>

          <div className={styles.body}>
            <p>
              All Microsoft Office products come with a powerful built-in
              programming language called VBA. Whichever Office product you work
              with, our highly experienced VBA macro programmers are ready to
              build you the best solution to take your business to the next
              level.
            </p>
            <p>
              From simple macro recorders to complex automated systems
              connecting Excel to external databases and APIs, we cover the full
              spectrum.
            </p>
          </div>

          <div className={styles.ctaRow}>
            <Link href="#contact" className="btn">
              Discuss your project
            </Link>
            <Link href="#capabilities" className={styles.ctaSecondary}>
              See what VBA can do
            </Link>
          </div>

          {/* Code SVG shown below CTAs on mobile/tablet */}
          <div className={styles.svgMobile}>
            <VbaCodeSvg />
          </div>
        </div>
        <HeroDropdowns />
      </div>

      {/* ── Code illustration — desktop only, overlapping bottom ── */}
      <div className={styles.svgDesktop} aria-hidden="true">
        <VbaCodeSvg />
      </div>
    </section>
  );
};

export default VbaHero;
