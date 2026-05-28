// app/services/excel/upgrades-and-migration/(components)/UpgradePathways.jsx

import Link from "next/link";
import styles from "../../../styles/upgradePathways.module.scss";

import { UpgradeSvg } from "../(svgs)/UpgradeSvg";
import { MigrateSvg } from "../(svgs)/MigrateSvg";
import { TransformSvg } from "../(svgs)/TransformSvg";

const pathways = [
  {
    id: "upgrade",
    index: "01",
    label: "Upgrade",
    fit: "Systems that still work but need stabilising",
    SvgIcon: UpgradeSvg,
    description:
      "If the core of what you have is working, a managed upgrade will extend its life and improve performance without too much time or effort. This is the simplest and the fastest path forward when the foundation is solid and the problems are known.",
    items: [
      "32-bit vs 64-bit conflicts and Office version issues",
      "VBA or legacy code that has become unreliable over time",
      "Performance improvements without changing the underlying system",
      "Usability and error reduction for daily users",
    ],
    intensity: "low",
  },
  {
    id: "migration",
    index: "02",
    label: "Migration",
    fit: "Systems that have outgrown where they live",
    SvgIcon: MigrateSvg,
    description:
      "When your system is hitting performance limits, struggling with multiple users, or becoming impossible to scale, it needs to move somewhere better suited. Migration keeps what works while giving it room to breath.",
    items: [
      "Access or Excel backends moved to SQL Server",
      "Local systems transitioned to Azure cloud platforms",
      "Data restructured into secure, centralised environments",
      "Improved reliability and concurrency without a full rebuild",
    ],
    intensity: "mid",
  },
  {
    id: "transformation",
    index: "03",
    label: "Transformation",
    fit: "Systems genuinely limiting your business",
    SvgIcon: TransformSvg,
    description:
      "Sometimes the easy fix is just not enough. If the system is fundamentally holding you back in capability, reliability, or user experience then a full rebuild is due. This is where we come in an reassess the enitre infrastructure.",
    items: [
      "Legacy apps replaced with Power Apps or modern web applications",
      "Manual workflows automated with Power Automate",
      "Real-time reporting introduced through Power BI",
      "AI and advanced analytics integrated into existing processes",
    ],
    intensity: "high",
  },
];

const UpgradePathways = () => {
  return (
    <section className={styles.section}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>Choosing your path</span>
        <h2 className={styles.heading}>
          Upgrade, migration, or{" "}
          <span className={styles.accent}>transformation?</span>
        </h2>
        <p className={styles.subheading}>
          Not every system needs a full rebuild. The right approach depends on
          where your system is now, what's slowing you down, and where you would
          like it to be in the next few years.
        </p>
      </div>

      {/* ── Spectrum ── */}
      <div className={styles.spectrum} aria-hidden="true">
        <span>Minor Fix</span>
        <div className={styles.spectrumTrack}>
          <div className={styles.spectrumFill} />
        </div>
        <span>Full Overhaul</span>
      </div>

      {/* ── Cards ── */}
      <div className={styles.cards}>
        {pathways.map((path) => {
          const { SvgIcon } = path;
          return (
            <div
              key={path.id}
              className={`${styles.card} ${styles[`card_${path.intensity}`]}`}
            >
              {/* Card top bar */}
              <div className={styles.cardBar} />

              <div className={styles.cardHeader}>
                <div className={styles.iconWrap}>
                  <SvgIcon />
                </div>
                <div>
                  <span className={styles.cardIndex}>{path.index}</span>
                  <h3 className={styles.cardLabel}>{path.label}</h3>
                  <p className={styles.cardFit}>{path.fit}</p>
                </div>
              </div>

              <p className={styles.cardDescription}>{path.description}</p>

              <ul className={styles.cardItems}>
                {path.items.map((item) => (
                  <li key={item} className={styles.cardItem}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="6"
                        stroke="#046999"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M4.5 7l2 2 3-3"
                        stroke="#046999"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* ── Footer CTA ── */}
      <div className={styles.footer}>
        <p className={styles.footerText}>
          Not sure which path fits your situation?
        </p>
        <Link href="#contact" className={styles.footerCta}>
          Talk to an expert
        </Link>
      </div>
    </section>
  );
};

export default UpgradePathways;
