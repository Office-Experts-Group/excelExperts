// app/custom-design-and-development/(components)/CustomDesignIndustries.jsx

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/customDesignIndustries.module.css";

const scenarios = [
  {
    id: "finance",
    industry: "Finance & Accounting",
    challenge:
      "Month-end close processes are often spread across multiple workbooks, with staff manually copying figures, reconciling by hand, and chasing approvals via email. The risk of error grows exponentially with every manual input.",
    capability:
      "We can consolidate your reporting into a single structured workbook, automated data pulls from source files, built-in variance flagging, and a one-click output ready for sign-off. The kind of work that currently takes days can often be reduced to hours.",
    tag: "Automation",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect
          x="5"
          y="8"
          width="26"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path d="M5 14h26" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M11 20h5M11 24h8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="26" cy="22" r="4" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M24.5 22l1 1 2-2"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "logistics",
    industry: "Logistics & Operations",
    challenge:
      "Scheduling and dispatch across large teams is frequently managed in shared spreadsheets with no access controls, no conflict detection, and nothing to stop someone overwriting another person's work.",
    capability:
      "We build VBA-driven scheduling and operations tools with user-level access controls, conflict highlighting, and automated outputs. We simplify day-to-day operations like run sheets, route summaries, or automated notifications to your team.",
    tag: "Custom UI",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect
          x="4"
          y="12"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M24 16h4l4 5v5h-8V16z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle
          cx="10"
          cy="27"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle
          cx="26"
          cy="27"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M9 12V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "healthcare",
    industry: "Healthcare & Allied Health",
    challenge:
      "Practices inevitably re-enter the same patient or clinical data across multiple systems, with paper forms, internal spreadsheets, and practice management software. It's not only time-consuming but also a common source of errors.",
    capability:
      "We can build structured Excel intake forms with dropdown validation and automated formatting, with export outputs that map directly to your practice management system's import format.",
    tag: "Data Integration",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect
          x="9"
          y="5"
          width="18"
          height="26"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M15 14h6M18 11v6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M13 23h10M13 26h6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "construction",
    industry: "Construction & Engineering",
    challenge:
      "Estimating and tender pricing workbooks are often built by one person and never properly documented. When that person moves on, the business is left with a critical tool no one else can safely modify or audit.",
    capability:
      "We can document existing workbook logic, rebuild spreadsheets with named ranges, formula comments, and protected inputs, and create interfaces that are accessible to your wider team.",
    tag: "Rebuild & Documentation",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path
          d="M8 28V14l10-8 10 8v14"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <rect
          x="14"
          y="19"
          width="8"
          height="9"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M14 22h8M14 25h5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "professional",
    industry: "Professional Services",
    challenge:
      "Producing client-facing reports often means manually copying figures into a Word or PowerPoint template, reformatting charts, and double-checking numbers.",
    capability:
      "We can automate the flow from your Excel data directly into formatted Word or PowerPoint reports, including live figures, regenerated charts, and brand-consistent formatting produced at the click of a button.",
    tag: "Office Integration",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect
          x="5"
          y="6"
          width="16"
          height="24"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <rect
          x="15"
          y="11"
          width="16"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="currentColor"
          fillOpacity="0.07"
        />
        <path
          d="M19 16h8M19 20h8M19 24h5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M10 13h5M10 17h5M10 21h3"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "government",
    industry: "Government & Not-for-Profit",
    challenge:
      "Grant acquittal and compliance reporting frequently involves pulling figures from multiple cost-centre spreadsheets maintained by different teams and consolidating them into a single submission.",
    capability:
      "We can build workbooks with standardised input templates, automated collection logic across teams, and formatted output ready for submission.",
    tag: "Reporting Automation",
    svg: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path
          d="M5 16L18 7l13 9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="9"
          y="16"
          width="5"
          height="12"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <rect
          x="16"
          y="20"
          width="5"
          height="8"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <rect
          x="23"
          y="13"
          width="5"
          height="15"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M4 28h28"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

// ── Small arrow icon ──────────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 7h8M7 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Component ─────────────────────────────────────────────────────────────────
const CustomDesignIndustries = () => (
  <section className={styles.section}>
    {/* ── Header ── */}
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <span className={styles.eyebrow}>Industry Applications</span>
        <h2 className={styles.heading}>
          Problems we solve,{" "}
          <span className={styles.accent}>across every sector.</span>
        </h2>
      </div>
      <div className={styles.headerRight}>
        <p className={styles.headerBody}>
          Every industry has its own processes, systems, and reporting
          requirements. What works for a construction company likely will not
          work as well for a healthcare provider or government department.
          That's why we our clients ask us to design solutions focused in their
          industry.
        </p>
      </div>
    </div>

    {/* ── Scenario grid ── */}
    <div className={styles.grid}>
      {scenarios.map((s, i) => (
        <AnimateOnScroll
          key={s.id}
          animation="fade-up"
          duration={0.5}
          delay={i * 0.07}
        >
          <article className={styles.card}>
            {/* Card header */}
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>{s.svg}</span>
              <div className={styles.cardMeta}>
                <span className={styles.cardTag}>{s.tag}</span>
                <h3 className={styles.cardIndustry}>{s.industry}</h3>
              </div>
            </div>

            {/* Divider */}
            <div className={styles.divider} aria-hidden="true" />

            {/* Problem block */}
            <div className={styles.block}>
              <span className={styles.blockLabel}>
                <span className={styles.labelDot} aria-hidden="true" />A common
                challenge
              </span>
              <p className={styles.blockText}>{s.challenge}</p>
            </div>

            {/* Solution block */}
            <div className={`${styles.block} ${styles.blockSolution}`}>
              <span className={styles.blockLabel}>
                <span
                  className={`${styles.labelDot} ${styles.labelDotAccent}`}
                  aria-hidden="true"
                />
                How we can help
              </span>
              <p className={styles.blockText}>{s.capability}</p>
            </div>
          </article>
        </AnimateOnScroll>
      ))}
    </div>

    {/* ── Footer CTA strip ── */}
    <AnimateOnScroll animation="fade-up" duration={0.5} delay={0.1}>
      <div className={styles.footer}>
        <p className={styles.footerText}>
          Don&rsquo;t see your industry here?{" "}
          <strong>We work across every sector.</strong> If your team is spending
          time on something Excel should be doing for them, we can almost
          certainly build a better way.
        </p>
        <a href="#contact" className={styles.footerLink}>
          Tell us about your project
          <ArrowRight />
        </a>
      </div>
    </AnimateOnScroll>
  </section>
);

export default CustomDesignIndustries;
