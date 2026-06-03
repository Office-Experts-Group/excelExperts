// app/custom-design-and-development/(components)/CustomDesignServices.jsx

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/customDesignServices.module.css";

// SVG icons — one per service, saved as individual files in the (svgs) folder
import { CustomUiIcon } from "../(svgs)/CustomUiIcon";
import { MacroIcon } from "../(svgs)/MacroIcon";
import { IntegrationsIcon } from "../(svgs)/IntegrationsIcon";
import { WorkbookIcon } from "../(svgs)/WorkbookIcon";
import { AddinIcon } from "../(svgs)/AddinIcon";

// ── Service definitions ────────────────────────────────────────────────────────
const services = [
  {
    id: "01",
    tag: "Bespoke UI",
    title: "Custom user interface development",
    body: "Many Excel solutions start life as a spreadsheet and gradually grow into the cornerstone of your business. As more users become involved, ease of use becomes just as important as the calculations behind it. We develop custom UserForms, guided workflows, validation rules, and web-based interfaces that make data entry faster, more consistent, and less prone to errors.",
    Icon: CustomUiIcon,
  },
  {
    id: "02",
    tag: "Automation",
    title: "VBA macro development",
    body: "Repetitive Excel tasks are the low-hanging fruits for automation. Whether it's generating reports, importing data, formatting worksheets, or distributing files, VBA macros save you hours of manual work and improve consistency. Our code is structured, documented, and designed to be maintained long after the initial development is complete.",
    Icon: MacroIcon,
  },
  {
    id: "03",
    tag: "Connectivity",
    title: "Office and third-party integrations",
    body: "Excel is usually just one part of a larger system. We develop integrations between Microsoft Office, databases, cloud platforms, and third-party applications to make sure information flows automatically between systems. From SQL Server and SharePoint to REST APIs and Microsoft 365 services.",
    Icon: IntegrationsIcon,
  },
  {
    id: "04",
    tag: "Tailored builds",
    title: "Custom workbooks and templates",
    body: "A well-designed workbook should be easy to use, reliable, and simple to maintain. We build implement structured layouts, validation controls and protected areas with clear documentation. Whether you need a new workbook developed from scratch or an existing spreadsheet rebuilt.",
    Icon: WorkbookIcon,
  },
  {
    id: "05",
    tag: "Office extensions",
    title: "Add-in development",
    body: "When functionality needs to be available across multiple workbooks or throughout an entire organisation, an Office add-in is usually the best solution. We develop custom add-ins for Excel, Word, Outlook, and Microsoft 365 that provide shared tools, ribbon commands, automation features, and business-specific functionality for your team..",
    Icon: AddinIcon,
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const CustomDesignServices = () => (
  <section className={styles.section} id="what-we-build">
    <AnimateOnScroll animation="fade-up" duration={0.6}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>What We Build</span>
        <h2 className={styles.heading}>
          Solutions for real{" "}
          <span className={styles.accent}>business challenges.</span>
        </h2>
        <p className={styles.subheading}>
          If you need to automate repetitive tasks, connect systems or improve
          your reporting, our consultants can help. Below are the most common
          types of custom development services we provide.
        </p>
      </div>
    </AnimateOnScroll>

    <div className={styles.services}>
      {services.map((svc, i) => (
        <article className={styles.serviceRow}>
          <div className={styles.serviceLeft}>
            <div className={styles.iconWrap}>
              <svc.Icon />
            </div>
            <span className={styles.tag}>{svc.tag}</span>
          </div>

          <div className={styles.serviceBody}>
            <h3 className={styles.serviceTitle}>{svc.title}</h3>
            <p className={styles.serviceText}>{svc.body}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default CustomDesignServices;
