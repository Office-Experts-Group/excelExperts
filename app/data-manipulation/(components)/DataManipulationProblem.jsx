// app/data-manipulation/(components)/DataManipulationProblem.jsx

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/dataManipulationProblem.module.css";

const painPoints = [
  {
    id: "copy-paste",
    number: "01",
    name: "Manual copying between systems",
    description:
      "Staff transferring records from one platform manually. Each pass is a chance for an error, and the time adds up fast. What once was a ten-minute job has now become the first hour of someone's morning, every morning.",
  },
  {
    id: "stale-exports",
    number: "02",
    name: "Reports built on yesterday's data",
    description:
      "Pulling live data takes too long, so reports run on last night's export. By the time a decision is made, the numbers have already moved. The gap between what the report shows and what's actually happening widens every hour it sits untouched.",
  },
  {
    id: "fragile-sheets",
    number: "03",
    name: "Spreadsheets that break when formats change",
    description:
      "A column gets renamed upstream. A date field switches format. A source system adds a new row at the top. Suddenly a workbook that's worked fine for two years is broken and nobody knows exactly why. Fragile setups like this require constant babysitting and eventually fail at the worst possible moment.",
  },
  {
    id: "cleaning-overhead",
    number: "04",
    name: "Hours of cleaning before any analysis",
    description:
      "Deduplicating records, stripping whitespace, or reformatting dates all done manually before a single chart can be built. This is prep work that a properly built pipeline eliminates entirely, yet it consumes a significant portion of many people's time.",
  },
  {
    id: "broken-macros",
    number: "05",
    name: "Macros that fail after every update",
    description:
      "Legacy VBA that worked reliably for years suddenly breaks after a 64-bit Office migration or a Microsoft 365 update. The person who built it left years ago, the documentation is thin, and nobody wants to touch it. We rebuild these properly.",
  },
];

const DataManipulationProblem = () => (
  <section className={styles.section}>
    {/* ── Opening header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Recognise any of these?</p>
        <h2 className={styles.heading}>
          The data problems{" "}
          <span className={styles.headingMuted}>we fix permanently.</span>
        </h2>
        <p className={styles.intro}>
          Most of these aren't new problems. They've usually grown over time,
          and they've been quietly costing the business every single day. The
          difference between a patch and a permanent fix is choosing the right
          tool and building a solid foundation.
        </p>
      </div>
    </AnimateOnScroll>

    {/* ── Pain point rows ── */}
    <div className={styles.rows} role="list">
      {painPoints.map((point, i) => (
        <AnimateOnScroll
          key={point.id}
          animation="fade-up"
          duration={0.55}
          delay={i * 0.06}
        >
          <article className={styles.row} role="listitem">
            {/* ── Left: ghost number + name ── */}
            <div className={styles.rowLeft}>
              <span className={styles.rowNum} aria-hidden="true">
                {point.number}
              </span>
              <h3 className={styles.rowName}>{point.name}</h3>
            </div>

            {/* ── Right: description ── */}
            <p className={styles.rowDesc}>{point.description}</p>
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default DataManipulationProblem;
