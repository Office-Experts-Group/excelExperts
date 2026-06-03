// app/custom-design-and-development/(components)/CustomDesignHero.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import styles from "../../../styles/customDesignHero.module.css";

import { ArrowIcon } from "../(svgs)/ArrowIcon";

// ── Expandable service list shown on the right ────────────────────────────────
const services = [
  {
    id: "01",
    title: "Custom user interface development",
    tag: "Bespoke UI",
    desc: "Web portals, dashboards, and custom apps that connect your business to the cloud, allowing for real-time field reporting or remote client interactions.",
    href: "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
  },
  {
    id: "02",
    title: "VBA macro development",
    tag: "Automation",
    desc: "Tailor built macros to eliminate repetitive manual tasks. Turn hours into one-click report generation and automation that happens in the background.",
    href: "/vba-macro-development",
  },
  {
    id: "03",
    title: "Office & third-party integrations",
    tag: "Connectivity",
    desc: "Connect all your software with your existing systems, SQL databases, SharePoint, REST APIs, and third-party applications.",
    href: "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration",
  },
  {
    id: "04",
    title: "Custom workbooks & templates",
    tag: "Tailored builds",
    desc: "Purpose-built workbooks with protected structures, branded layouts, and guided data entry that enforce consistency across all your documents.",
    href: "https://www.wordexperts.com.au/word-document-template-creation",
  },
  {
    id: "05",
    title: "Add-in development",
    tag: "Office extensions",
    desc: "Custom Excel, Word, and Outlook add-ins that add functionality available globally across every workbook or document your team opens.",
    href: "/add-in-development",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const CustomDesignHero = () => {
  const [activeService, setActiveService] = useState(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);
  const listRef = useRef(null);

  // Entrance animation trigger
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

  // Animate the track line to the bottom of the active item
  useEffect(() => {
    if (activeService !== null && listRef.current) {
      const items = listRef.current.querySelectorAll("[data-service-item]");
      const el = items[activeService];
      if (el) {
        const listTop = listRef.current.getBoundingClientRect().top;
        const itemBottom = el.getBoundingClientRect().bottom;
        setLineHeight(itemBottom - listTop + 8);
      }
    } else {
      setLineHeight(0);
    }
  }, [activeService]);

  return (
    <div className={styles.rightCol}>
      <p className={styles.listLabel}>What we design &amp; build</p>

      <ul className={styles.serviceList} ref={listRef}>
        {/* Animated track line */}
        <div
          className={styles.trackLine}
          style={{ height: `${lineHeight}px` }}
        />

        {services.map((svc, i) => (
          <li
            key={svc.id}
            data-service-item
            className={`${styles.serviceItem} ${activeService === i ? styles.serviceItemActive : ""}`}
            onMouseEnter={() => setActiveService(i)}
            onMouseLeave={() => setActiveService(null)}
            onFocus={() => setActiveService(i)}
            onBlur={() => setActiveService(null)}
            tabIndex={0}
          >
            <div className={styles.serviceInner}>
              <div className={styles.serviceLeft}>
                <span className={styles.serviceNum}>{svc.id}</span>
                <div className={styles.serviceDot} />
              </div>

              <div className={styles.serviceContent}>
                <div className={styles.serviceHeader}>
                  <h3 className={styles.serviceTitle}>{svc.title}</h3>
                  <span className={styles.serviceTag}>{svc.tag}</span>
                </div>
                <div className={styles.serviceDesc}>
                  <p>{svc.desc}</p>
                  <Link href={svc.href} className={styles.serviceLink}>
                    Learn more
                    <ArrowIcon />
                  </Link>
                </div>
              </div>

              <div className={styles.serviceArrow} aria-hidden="true">
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
  );
};

export default CustomDesignHero;
