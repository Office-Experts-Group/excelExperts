// app/services/vba-macro-development/(components)/VbaProcess.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/vbaProcess.module.css";

// ── Engagement steps ─────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    phase: "Discovery",
    summary: "We get to know what you need.",
    detail:
      "We start by understanding your existing processes, what's working, and what's not. We map out the manual steps you want to eliminate, and the end result your after..",
  },
  {
    num: "02",
    phase: "Solution Design",
    summary: "Scope agreed before anything goes ahead.",
    detail:
      "We map out the system design, which Office products are involved, and what user interfaces are required. You have a look at the design so we can provide a detailed quote, no mid-project surprises.",
  },
  {
    num: "03",
    phase: "Build & Test",
    summary: "We get stuck in.",
    detail:
      "Development happens inside your Office environment. We test against your  data including edge cases, error conditions, and multi-user scenarios when relevant.",
  },
  {
    num: "04",
    phase: "Handover & Support",
    summary: "Your team can use it. We're there if you need us.",
    detail:
      "Handover includes documentation and a walkthrough for the people who will use the solution day-to-day. Ongoing support is available for changes, extensions, or future compatibility fixes as Office continues to evolve.",
  },
];

// ── Stat blocks ──────────────────────────────────────────────────────────────
const stats = [
  { value: "25+", label: "Years of VBA experience" },
  { value: "All", label: "Microsoft Office products" },
  { value: "100%", label: "Australian-owned" },
];

// ── Plus/minus toggle icon ────────────────────────────────────────────────────
const PlusMinusIcon = ({ open }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <line
      x1="8"
      y1="2"
      x2="8"
      y2="14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      style={{
        transform: open ? "scaleY(0)" : "scaleY(1)",
        transformOrigin: "center",
        transition: "transform 0.28s ease",
      }}
    />
    <line
      x1="2"
      y1="8"
      x2="14"
      y2="8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// ── Component ────────────────────────────────────────────────────────────────
const VbaProcess = () => {
  // First step open by default
  const [openStep, setOpenStep] = useState(0);

  const toggle = (i) => setOpenStep((prev) => (prev === i ? null : i));

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left column — sticky header + stats ── */}
        <AnimateOnScroll animation="slide-left" duration={0.7}>
          <div className={styles.leftCol}>
            <span className={styles.eyebrow}>How We Work</span>
            <h2 className={styles.heading}>
              From first contact to{" "}
              <span className={styles.accent}>a working solution.</span>
            </h2>
            <p className={styles.intro}>
              New VBA projects fail when requirements are misunderstood before
              the project begins. That's why we invest time upfront to fully
              understand exactly what you need before writing a single line of
              code.
            </p>
            <Link href="#contact" className="btn">
              Get Started Now
            </Link>

            {/* Stats */}
            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* ── Right column — accordion steps ── */}
        <AnimateOnScroll animation="fade-up" duration={0.7} delay={0.12}>
          <div className={styles.rightCol}>
            {steps.map((step, i) => {
              const isOpen = openStep === i;
              return (
                <div
                  key={step.num}
                  className={`${styles.step} ${isOpen ? styles.stepOpen : ""}`}
                >
                  <button
                    className={styles.stepBtn}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.stepNum}>{step.num}</span>
                    <div className={styles.stepMeta}>
                      <span className={styles.stepPhase}>{step.phase}</span>
                      <span className={styles.stepSummary}>{step.summary}</span>
                    </div>
                    <span className={styles.stepToggle}>
                      <PlusMinusIcon open={isOpen} />
                    </span>
                  </button>

                  <div
                    className={styles.stepBody}
                    style={{ maxHeight: isOpen ? "200px" : "0" }}
                    aria-hidden={!isOpen}
                  >
                    <p>{step.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default VbaProcess;
