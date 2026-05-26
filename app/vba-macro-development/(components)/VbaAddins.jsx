// app/services/vba-macro-development/(components)/VbaAddins.jsx
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import { AddinSvg } from "../(svgs)/AddinSvg";
import { UpgradeSvg } from "../(svgs)/UpgradeSvg";
import styles from "../../../styles/vbaAddins.module.css";

// ── Office products supported ────────────────────────────────────────────────
const officeProducts = [
  { label: "Excel", letter: "Ex" },
  { label: "Word", letter: "Wo" },
  { label: "Outlook", letter: "Ou" },
  { label: "Access", letter: "Ac" },
  { label: "PowerPoint", letter: "Pp" },
  { label: "Office 365", letter: "365" },
];

// ── Component ────────────────────────────────────────────────────────────────
const VbaAddins = () => (
  <section className={styles.section}>
    {/* ── Add-ins block ── */}
    <AnimateOnScroll animation="fade-up" duration={0.65}>
      <div className={styles.addinsBlock}>
        <div className={styles.addinsLeft}>
          <span className={styles.eyebrow}>Extend Your Office Products</span>
          <h2 className={styles.heading}>
            Add-ins that work{" "}
            <span className={styles.accent}>across every workbook.</span>
          </h2>
          <p className={styles.body}>
            We create add-ins for all Microsoft Office products using VBA. When
            in Excel, your macros become available to every workbook the moment
            it opens, you can forget about copying modules between files.
          </p>
          <p className={styles.body}>
            There are many approaches to building and deploying add-ins, the
            right choice depends on your environment and how your team shares
            files. We'll point your organisation in the right direction and take
            care of the full build.
          </p>

          {/* Office product badges */}
          <div className={styles.productBadges}>
            {officeProducts.map((p) => (
              <span
                key={p.label}
                className={styles.productBadge}
                title={p.label}
              >
                <span className={styles.productLetter}>{p.letter}</span>
                <span className={styles.productLabel}>{p.label}</span>
              </span>
            ))}
          </div>

          <Link href="#contact" className={styles.cta}>
            Discuss an add-in project
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className={styles.addinsRight}>
          <AddinSvg />
        </div>
      </div>
    </AnimateOnScroll>

    {/* ── Divider ── */}
    <div className={styles.divider} />

    {/* ── Upgrading block ── */}
    <AnimateOnScroll animation="fade-up" duration={0.65}>
      <div className={styles.upgradeBlock}>
        <div className={styles.upgradeLeft}>
          <UpgradeSvg />
        </div>

        <div className={styles.upgradeRight}>
          <span className={styles.eyebrow}>Office Version Migrations</span>
          <h2 className={styles.heading}>
            Macros failing after an{" "}
            <span className={styles.accent}>Office upgrade?</span>
          </h2>
          <p className={styles.body}>
            If your organisation uses macros in Excel or Access, some may fail
            when upgrading to 64-bit systems or moving to Microsoft 365. This is
            an extremely common issue and something we help fix all the time.
          </p>
          <p className={styles.body}>
            We review your existing VBA code, find the compatibility issues, and
            rebuild any failing macros to work correctly in your new
            environment. If your workbooks aren't functioning correctly, get in
            touch so we can get them back on track.
          </p>

          <div className={styles.upgradePoints}>
            {[
              "32-bit to 64-bit VBA compatibility fixes",
              "Microsoft 365 API and library updates",
              "Deprecated function replacements",
              "Full testing across target environments",
            ].map((point) => (
              <div key={point} className={styles.upgradePoint}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="#046999"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M5 8l2.5 2.5 4-4"
                    stroke="#046999"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{point}</span>
              </div>
            ))}
          </div>

          <Link href="#contact" className={styles.cta}>
            Get your macros reviewed
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </AnimateOnScroll>
  </section>
);

export default VbaAddins;
