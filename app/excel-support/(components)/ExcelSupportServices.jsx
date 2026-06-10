// app/services/excel-support/(components)/ExcelSupportServices.jsx

import Link from "next/link";
import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/excelSupportServices.module.css";

// ── Inline SVG icons — one per service card ───────────────────────────────
// Each is a small 28×28 glyph, unique to the service it represents

const IconAssistance = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="14" cy="14" r="10" stroke="#046999" strokeWidth="1.6" />
    <path
      d="M10 14h8M14 10v8"
      stroke="#046999"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="14" cy="14" r="2.5" fill="#046999" opacity="0.3" />
  </svg>
);

const IconDev = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="4"
      y="7"
      width="20"
      height="14"
      rx="3"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <path
      d="M9 13l3 3-3 3M14 19h5"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconReview = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M7 14h14M7 10h9M7 18h11"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle
      cx="21"
      cy="10"
      r="3.5"
      fill="none"
      stroke="#046999"
      strokeWidth="1.4"
    />
    <path
      d="M23.5 12.5l2.5 2.5"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const IconTrouble = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M14 5l9 16H5L14 5z"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M14 12v5"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="14" cy="19.5" r="1" fill="#046999" />
  </svg>
);

const IconMigration = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="8"
      width="10"
      height="12"
      rx="2"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <rect
      x="15"
      y="8"
      width="10"
      height="12"
      rx="2"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M13 14h2M11 12l2 2-2 2"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconData = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <ellipse
      cx="14"
      cy="9"
      rx="8"
      ry="3.5"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M6 9v10c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5V9"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M6 14c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5"
      stroke="#046999"
      strokeWidth="1.3"
      strokeDasharray="2 2"
    />
  </svg>
);

const IconDoc = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="6"
      y="4"
      width="16"
      height="20"
      rx="2"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <path
      d="M10 10h8M10 14h6M10 18h4"
      stroke="#046999"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const IconFlexible = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="8" cy="14" r="4" stroke="#046999" strokeWidth="1.5" />
    <circle cx="20" cy="14" r="4" stroke="#046999" strokeWidth="1.5" />
    <path
      d="M12 14h4"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14 6v3M14 19v3"
      stroke="#046999"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeDasharray="1.5 2"
    />
  </svg>
);

// ── Service data ──────────────────────────────────────────────────────────────
const services = [
  {
    Icon: IconAssistance,
    title: "On-Demand Technical Assistance",
    content:
      "Get immediate help with urgent Excel issues through our responsive support channels. Our technical experts diagnose and resolve problems efficiently, minimising disruption to your workflow.",
  },
  {
    Icon: IconDev,
    title: "Custom Solution Development",
    content:
      "Beyond troubleshooting, we can develop tailored Excel solutions to automate repetitive tasks, streamline your data processes, and enhance productivity across your organisation.",
  },
  {
    Icon: IconReview,
    title: "Code Reviews & Optimisation",
    content:
      "Our programmers can review your existing Excel solutions, identify inefficiencies, and implement improvements that enhance performance, reliability, and maintainability.",
  },
  {
    Icon: IconTrouble,
    title: "Troubleshooting & Problem Resolution",
    content:
      "Encountering errors or unexpected behaviour in your spreadsheets? Our diagnostic expertise quickly identifies root causes and implements effective remedies.",
  },
  {
    Icon: IconMigration,
    title: "Migration & Upgrade Support",
    href: "/upgrades-and-migration",
    content:
      "Seamlessly transition between Excel versions or migrate your spreadsheet solutions to new platforms with our guided support services.",
  },
  {
    Icon: IconData,
    title: "Data Conversion & Integration",
    href: "/data-manipulation",
    content:
      "Transform, clean, and integrate data from various sources into your Excel environment, we are part of the Office Experts Group, with specialists across the entire Microsoft suite.",
  },
  {
    Icon: IconDoc,
    title: "Solution Documentation",
    content:
      "We provide comprehensive documentation for your existing Excel workflow, ensuring knowledge retention and simple, swift on boarding for new team members.",
  },
  {
    Icon: IconFlexible,
    title: "Flexible Support Options",
    content:
      "Choose between on-site visits or remote support sessions based on your preference and requirements. Our competitive rates ensure excellent value.",
  },
];

// ── Component ────────────────────────────────────────────────────────────────
const ExcelSupportServices = () => (
  <section className={styles.section}>
    <AnimateOnScroll animation="fade-up" duration={0.65}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>What We Offer</span>
        <h2 className={styles.heading}>
          We&rsquo;re Here To{" "}
          <span className={styles.accent}>Support You!</span>
        </h2>
      </div>
    </AnimateOnScroll>

    <div className={styles.grid}>
      {services.map((service, i) => (
        <AnimateOnScroll
          key={service.title}
          animation="fade-up"
          duration={0.55}
          delay={i * 0.06}
        >
          <article className={styles.card}>
            <div className={styles.iconWrap}>
              <service.Icon />
            </div>

            <div className={styles.cardBody}>
              {/* Conditionally wrap title in a link if href provided */}
              {service.href ? (
                <Link href={service.href} className={styles.cardTitle}>
                  {service.title}
                </Link>
              ) : (
                <h3 className={styles.cardTitle}>{service.title}</h3>
              )}
              <p className={styles.cardText}>{service.content}</p>
            </div>
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default ExcelSupportServices;
