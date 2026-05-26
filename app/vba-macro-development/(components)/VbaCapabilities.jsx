// app/services/vba-macro-development/(components)/VbaCapabilities.jsx

import { AutomationSvg } from "../(svgs)/AutomationSvg";
import { DataSvg } from "../(svgs)/DataSvg";
import { FormsSvg } from "../(svgs)/FormsSvg";
import { ProcessingSvg } from "../(svgs)/ProcessingSvg";
import { ReportingSvg } from "../(svgs)/ReportingSvg";
import { RibbonSvg } from "../(svgs)/RibbonSvg";
import { ValidationSvg } from "../(svgs)/ValidationSvg";
import { WebSvg } from "../(svgs)/WebSvg";
import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/vbaCapabilities.module.css";

// ── Capability cards ─────────────────────────────────────────────────────────
const capabilities = [
  {
    id: "forms",
    heading: "Custom Forms & User Interfaces",
    body: "Transform data collection with custom-built VBA forms. We design intuitive interfaces that simplify complex processes, validate inputs in real-time, and integrate with your existing Excel workbooks and spreadsheets.",
    icon: <FormsSvg />,
  },
  {
    id: "ribbon",
    heading: "Personalised Ribbons & Toolbars",
    body: "We place your most-used functions one click away, it reduces errors and time while increasing efficiency and consistency.",
    icon: <RibbonSvg />,
  },
  {
    id: "automation",
    heading: "Task Automation",
    body: "Eliminate tedious manual work. Our macros take away hours of repetitive data entry, formatting, and reporting into one-click processes. What once took hours can be done in seconds.",
    icon: <AutomationSvg />,
  },
  {
    id: "data",
    heading: "External Data Connections",
    body: "Connect your workbooks to SQL databases, Access, SharePoint, Dataverse, text files, and third-party applications. Our VBA solutions create data pipelines that keep spreadsheets current.",
    icon: <DataSvg />,
  },
  {
    id: "web",
    heading: "Web Scraping & API Integration",
    body: "Harness the power of the internet from your workbooks. Our VBA programmers develop systems that automatically extract data from websites, APIs, and online services.",
    icon: <WebSvg />,
  },
  {
    id: "validation",
    heading: "Data Validation Systems",
    body: "Protect data integrity with multi-level validation. We implement checks that prevent errors before they occur, and ensure consistency across the board.",
    icon: <ValidationSvg />,
  },
  {
    id: "reporting",
    heading: "Automated Reporting Tools",
    body: "Turn raw data into real insights. Generate charts, pivot tables, and formatted reports on demand or on schedule. Consistent, professional outputs ready for presentation or distribution.",
    icon: <ReportingSvg />,
  },
  {
    id: "processing",
    heading: "Data Processing & Manipulation",
    body: "Handle large datasets with ease. Our custom VBA solutions clean, sort, filter, and transform data according to your requirements, including specialised algorithms for complex manipulation tasks.",
    icon: <ProcessingSvg />,
  },
];

// ── Component ────────────────────────────────────────────────────────────────
const VbaCapabilities = () => (
  <section className={styles.section} id="capabilities">
    {/* ── Header ── */}
    <AnimateOnScroll animation="fade-up" duration={0.65}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>What VBA Can Do</span>
        <h2 className={styles.heading}>
          Built-in Office automation,{" "}
          <span className={styles.accent}>without limits.</span>
        </h2>
        <p className={styles.intro}>
          Every Microsoft Office product ships with VBA, it's a powerful
          programming language that most businesses never really deal with. Our
          developers unlock its full potential to build solutions for your
          workflows that are simply not possible with no code solutions.
        </p>
      </div>
    </AnimateOnScroll>

    {/* ── Cards grid ── */}
    <div className={styles.grid}>
      {capabilities.map((cap, i) => (
        <AnimateOnScroll
          key={cap.id}
          animation="fade-up"
          duration={0.55}
          delay={i * 0.07}
        >
          <article className={styles.card}>
            <div className={styles.cardIcon}>{cap.icon}</div>
            <h3 className={styles.cardHeading}>{cap.heading}</h3>
            <p className={styles.cardBody}>{cap.body}</p>
            <div className={styles.cardAccentLine} />
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default VbaCapabilities;
