// app/services/excel-support/(components)/ExcelSupportMain.jsx

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import { SupportGridSvg } from "../(svgs)/SupportGridSvg";
import styles from "../../../styles/excelSupportMain.module.css";

// ── Component ────────────────────────────────────────────────────────────────
const ExcelSupportMain = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Left: text panel ── */}
      <AnimateOnScroll animation="fade-up" duration={0.7}>
        <div className={styles.textPanel}>
          <span className={styles.eyebrow}>Expert Consultants</span>
          <h2 className={styles.heading}>Excel Support and Training</h2>
          <p className={styles.body}>
            Whether you&rsquo;re struggling with complex formulas, data
            analysis, pivot tables, or automation tasks, our Excel experts
            provide tailored support through remote access, over the phone or in
            house. We deliver instant guidance and practical solutions that keep
            your business moving forward.
          </p>
          <p className={styles.body}>
            From individual professionals to entire departments, we offer
            flexible support options tailored to your specific needs. Having a
            dedicated Excel consultant means you&rsquo;ll always have expert
            help available when deadlines approach or unexpected issues arise.
          </p>

          {/* ── Trust indicators ── */}
          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>25+</span>
              <span className={styles.trustLabel}>Years Experience</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>AU Wide</span>
              <span className={styles.trustLabel}>Remote &amp; Onsite</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>Any Scale</span>
              <span className={styles.trustLabel}>Individual or Team</span>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Right: SVG visual ── */}
      <AnimateOnScroll animation="slide-left" duration={0.8} delay={0.15}>
        <div className={styles.svgPanel}>
          <SupportGridSvg />
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default ExcelSupportMain;
