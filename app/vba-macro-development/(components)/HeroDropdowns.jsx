// app/services/vba-macro-development/(components)/HeroDropdowns.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../../../styles/vbaHero.module.css";

// ── Capability list shown in the right column ────────────────────────────────
const capabilities = [
  {
    id: "01",
    title: "Custom forms & user interfaces",
    desc: "Intuitive data-entry forms with real-time validation, drop-down logic, and seamless integration with your Excel workflows, built to reduce errors and training time.",
  },
  {
    id: "02",
    title: "Task automation & macro development",
    desc: "Eliminate hours of repetitive work. Our macros handle data entry, formatting, reporting, and file operations at the click of a button.",
  },
  {
    id: "03",
    title: "External data connections",
    desc: "Connect your workbooks to SQL databases, SharePoint, Dataverse, and third-party systems. Live data pipelines that refresh automatically.",
  },
  {
    id: "04",
    title: "Web scraping & API integration",
    desc: "Pull data from websites and REST APIs directly into Excel. No need for manual copying with critical information arrives in your spreadsheet automatically.",
  },
  {
    id: "05",
    title: "Custom ribbons & toolbars",
    desc: "Tailored ribbons and toolbars that put your most-used functions one click away, reducing training time and increasing team efficiency.",
  },
  {
    id: "06",
    title: "Add-in development",
    desc: "Global functionality available across every workbook. We design and deploy add-ins that extend Excel, Word, Outlook, and Access.",
  },
];

// ── Arrow icon ───────────────────────────────────────────────────────────────
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

// ── Component ────────────────────────────────────────────────────────────────
const VbaHero = () => {
  const [activeCap, setActiveCap] = useState(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);
  const listRef = useRef(null);

  // Entrance animation on viewport entry
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.06 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Grow the accent track line down to the active item's bottom edge
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
    <div ref={sectionRef}>
      {/* ── Right column — interactive capability list ── */}
      <div className={styles.rightCol}>
        <p className={styles.capLabel}>What we build</p>

        <ul className={styles.capList} ref={listRef}>
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
                <div className={styles.capLeft}>
                  <span className={styles.capNum}>{cap.id}</span>
                  <div className={styles.capDot} />
                </div>
                <div className={styles.capContent}>
                  <div className={styles.capHeader}>
                    <h3 className={styles.capTitle}>{cap.title}</h3>
                  </div>
                  <div className={styles.capDesc}>
                    <p>{cap.desc}</p>
                  </div>
                </div>
                <div className={styles.capArrow} aria-hidden="true">
                  <ArrowIcon />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VbaHero;
