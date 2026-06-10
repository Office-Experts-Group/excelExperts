// app/services/excel-support/(components)/ExcelSupportTraining.jsx

import Link from "next/link";
import AnimateOnScroll from "../../../components/AnimateOnScroll";
import { TrainingPathSvg } from "../(svgs)/TrainingPathSvg";
import styles from "../../../styles/excelSupportTraining.module.css";

// ── Component ────────────────────────────────────────────────────────────────
const ExcelSupportTraining = () => (
  <section className={styles.section} id="excel-training">
    <div className={styles.inner}>
      {/* ── Left: SVG visual ── */}
      <AnimateOnScroll animation="fade-up" duration={0.75}>
        <div className={styles.svgPanel}>
          <TrainingPathSvg />
        </div>
      </AnimateOnScroll>

      {/* ── Right: text content ── */}
      <AnimateOnScroll animation="fade-up" duration={0.75} delay={0.15}>
        <div className={styles.textPanel}>
          <span className={styles.eyebrow}>Excel Training</span>
          <h2 className={styles.heading}>
            Excel Training for{" "}
            <span className={styles.accent}>All Your Needs</span>
          </h2>

          <p className={styles.body}>
            Our Excel Training services are designed to be task specific,
            ensuring that every session addresses the unique challenges you
            face. We provide time and cost-effective solutions tailored to your
            requirements, whether you need{" "}
            <Link
              href="/excel-formulas-and-custom-formulas"
              className={styles.inlineLink}
            >
              help with formulas
            </Link>
            ,{" "}
            <Link href="/data-manipulation" className={styles.inlineLink}>
              data analysis
            </Link>
            , or complex automation tasks. Our training can be conducted onsite
            or through remote access, giving you flexibility in how you learn,
            and making expert guidance readily available no matter your
            location.
          </p>

          <p className={styles.body}>
            We offer both group or individual sessions, allowing for
            personalised attention or collaborative learning based on your
            preference. Our trainers are highly skilled and experienced,
            producing customised &ldquo;How To&rdquo; videos that serve as
            helpful resources for your ongoing learning. Rest assured, with our
            highly experienced trainers, you&rsquo;ll receive valuable,
            practical knowledge to master Microsoft Excel efficiently.
          </p>

          {/* Delivery mode pills */}
          <div className={styles.pillRow}>
            <span className={styles.pill}>Onsite Training</span>
            <span className={styles.pill}>Remote Access</span>
            <span className={styles.pill}>Group Sessions</span>
            <span className={styles.pill}>Individual Sessions</span>
            <span className={styles.pill}>How-To Videos</span>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default ExcelSupportTraining;
