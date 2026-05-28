// app/services/excel/upgrades-and-migration/(components)/SmoothTransition.jsx

import styles from "../../../styles/smoothTransition.module.scss";

import { ProcessTimelineSvg } from "../(svgs)/ProcessTimelineSvg";

const differentiators = [
  {
    letter: "1",
    heading: "Analysis.",
    body: "We begin with a free assessment of your current Excel setup to understand exactly how you use it and what information is most valuable.",
  },
  {
    letter: "2",
    heading: "Design.",
    body: "We don't force you into a pre-packaged solution, we design a migration path that tackles your specific pain points and deliver a fixed price quote.",
  },
  {
    letter: "3",
    heading: "Implementation.",
    body: "Your team can keep working while we implement your new solution, we keep in touch throughout the process to keep you informed on the architecture and progress.",
  },
  {
    letter: "4",
    heading: "Handover.",
    body: "Finally we integrate the new workflow into your business, we test against edge cases, talk through the documentation and make sure your up to speed with the new system.",
  },
];

const SmoothTransition = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Top: header + SVG ── */}
        <div className={styles.topRow}>
          <div className={styles.topLeft}>
            <span className={styles.eyebrow}>How we work</span>
            <h2 className={styles.heading}>
              From initial consultation to{" "}
              <span className={styles.accent}>final delivery</span>
            </h2>
            <p className={styles.lead}>
              We know that making the change can be difficult, especially when
              it involves systems your team uses daily. That's why we focus on
              minimising disruption while implementing intuitive systems that
              are easy to use.
            </p>
            <p className={styles.lead}>
              Every successful project starts with a discussion of whats causing
              the problems, and an honest assessment of how we think we can
              deliver the best results.
            </p>
          </div>

          <div className={styles.topRight}>
            <ProcessTimelineSvg />
          </div>
        </div>

        {/* ── Differentiator grid ── */}
        <div className={styles.diffGrid}>
          {differentiators.map((d) => (
            <div key={d.letter} className={styles.diffCard}>
              <div className={styles.diffLetter} aria-hidden="true">
                {d.letter}
              </div>
              <div className={styles.diffBar} />
              <h3 className={styles.diffHeading}>{d.heading}</h3>
              <p className={styles.diffBody}>{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmoothTransition;
