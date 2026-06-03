// app/custom-design-and-development/(components)/CustomDesignHero.jsx
import Link from "next/link";

import styles from "../../../styles/customDesignHero.module.css";

import HeroDropdowns from "./HeroDropdowns";
import { ArrowIcon } from "../(svgs)/ArrowIcon";

// ── Component ─────────────────────────────────────────────────────────────────
const CustomDesignHero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* ── Left column ── */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>Professional Development</span>

          <h2 className={styles.heading}>
            Excel solutions,{" "}
            <span className={styles.accent}>custom built for you.</span>
          </h2>

          <div className={styles.body}>
            <p>
              Every business has its unique processes, reporting requirements,
              and system integrations. When standard software falls short, our
              consultants develop custom Microsoft solutions to fit your
              organisation.
            </p>
            <p>
              We can help with automated reporting and data pipelines from
              3rd-party applications, VBA macro's and custom add-in's, or
              virtually any programmable application that cannot be solved with
              the standard tools.
            </p>
          </div>

          <div className={styles.ctaRow}>
            <Link href="#contact" className="btn">
              Book a free consultation
            </Link>
            <Link href="#what-we-build" className={styles.ctaSecondary}>
              See what we build
              <ArrowIcon />
            </Link>
          </div>

          {/* Stat pills */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>25+</span>
              <span className={styles.statLabel}>Years experience</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Custom built</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNum}>AU-wide</span>
              <span className={styles.statLabel}>Remote & on-site</span>
            </div>
          </div>
        </div>

        <HeroDropdowns />
      </div>
    </section>
  );
};

export default CustomDesignHero;
