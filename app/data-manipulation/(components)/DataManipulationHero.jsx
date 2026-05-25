"use client";
// app/data-manipulation/(components)/DataManipulationHero.jsx

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../../../styles/dataManipulationHero.module.css";

// Right-column capabilities — each expands on hover/focus to show a short description
const capabilities = [
  {
    id: "01",
    title: "Power Query & ETL pipeline development",
    tag: "No-code automation",
    desc: "Connect Excel to databases, SharePoint, APIs, and file feeds. Build pipelines that clean, reshape, and load data automatically on refresh with no manual intervention required.",
    href: "#power-query",
  },
  {
    id: "02",
    title: "VBA macro automation & rebuilds",
    tag: "Custom scripting",
    desc: "Automated imports, bulk conversions, file generation, and multi-workbook consolidation. We also rebuild legacy macros that have broken after a 64-bit migration or Microsoft 365 update.",
    href: "#vba",
  },
  {
    id: "03",
    title: "SQL database integration",
    tag: "Live data",
    desc: "Connect Excel directly to SQL Server, MySQL, PostgreSQL, or Oracle. Parameterised queries refresh on demand, with the right systems in place your reports always reflect live data.",
    href: "#sql",
  },
  {
    id: "04",
    title: "API data pulls & web connections",
    tag: "Third-party platforms",
    desc: "Pull live data from Salesforce, Xero, MYOB, HubSpot, and custom REST APIs. We handle authentication, response parsing, and scheduled refresh.",
    href: "#api",
  },
  {
    id: "05",
    title: "Bulk conversions & batch processing",
    tag: "High volume",
    desc: "Process hundreds of files overnight. Format conversions, multi-file consolidation, and batch jobs triggered manually or on a schedule.",
    href: "#batch",
  },
];

const ArrowIcon = () => (
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DataManipulationHero = () => {
  const [activeCap, setActiveCap] = useState(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);
  const listRef = useRef(null);

  // Trigger entrance animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Grow the track line down to the bottom edge of the active item
  useEffect(() => {
    if (activeCap !== null && listRef.current) {
      const items = listRef.current.querySelectorAll("[data-cap-item]");
      const activeEl = items[activeCap];
      if (activeEl) {
        const listTop = listRef.current.getBoundingClientRect().top;
        const itemBottom = activeEl.getBoundingClientRect().bottom;
        setLineHeight(itemBottom - listTop + 8);
      }
    } else {
      setLineHeight(0);
    }
  }, [activeCap]);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={`${styles.grid} ${visible ? styles.gridVisible : ""}`}>
        {/* ── Left column — headline + intro + CTAs ── */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>Excel Experts — Since 2000</span>

          <h2 className={styles.heading}>
            Stop processing data manually.{" "}
            <span className={styles.accentWord}>Automate it.</span>
          </h2>

          <div className={styles.body}>
            <p>
              If your team spends a lot of time fixing spreadsheets, tidying up
              imported data, or dealing with Excel processes that keep breaking,
              chances are the real issue is in your system, not your people.
            </p>
            <p>
              We create Excel automation solutions with VBA, Power Query, and
              SQL integrations that eliminate tedious manual tasks and make your
              data handling more reliable.
            </p>
          </div>

          <div className={styles.ctaRow}>
            <Link href="#contact" className="btn">
              Get a free assessment
            </Link>
            <Link href="#services" className={styles.ctaSecondary}>
              See all services
            </Link>
          </div>
        </div>

        {/* ── Right column — interactive capability list ── */}
        <div className={styles.rightCol}>
          <p className={styles.capLabel}>What we build</p>

          <ul className={styles.capList} ref={listRef}>
            {/* Animated blue track line */}
            <div
              className={styles.trackLine}
              style={{ height: `${lineHeight}px` }}
            />

            {capabilities.map((cap, i) => (
              <li
                key={cap.id}
                data-cap-item
                className={`${styles.capItem} ${activeCap === i ? styles.capItemActive : ""}`}
                onMouseEnter={() => setActiveCap(i)}
                onMouseLeave={() => setActiveCap(null)}
                onFocus={() => setActiveCap(i)}
                onBlur={() => setActiveCap(null)}
                tabIndex={0}
              >
                <div className={styles.capItemInner}>
                  {/* Number + dot */}
                  <div className={styles.capLeft}>
                    <span className={styles.capNum}>{cap.id}</span>
                    <div className={styles.capDot} />
                  </div>

                  {/* Text */}
                  <div className={styles.capContent}>
                    <div className={styles.capHeader}>
                      <h3 className={styles.capTitle}>{cap.title}</h3>
                      <span className={styles.capTag}>{cap.tag}</span>
                    </div>
                    <div className={styles.capDesc}>
                      <p>{cap.desc}</p>
                      <Link href={cap.href} className={styles.capLink}>
                        Learn more
                        <ArrowIcon />
                      </Link>
                    </div>
                  </div>

                  {/* Right arrow */}
                  <div className={styles.capArrow} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4 10h12M12 5l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DataManipulationHero;
