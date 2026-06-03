// app/custom-design-and-development/(components)/CustomDesignIntegrations.jsx

import Link from "next/link";
import styles from "../../../styles/customDesignIntegrations.module.css";

// ── Integration technology tiles ─────────────────────────────────────────────
const integrations = [
  {
    name: "VBA / Macros",
    href: "/vba-macro-development",
    external: false,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="8"
          width="28"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M10 14l4 4-4 4M18 22h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Microsoft Excel",
    href: "/",
    external: false,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="6"
          width="28"
          height="24"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4 13h28M18 13v17M11 20l6 6M11 26l6-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Office 365",
    href: "https://www.officeexperts.com.au/services/microsoft-office-365",
    external: true,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="18"
          cy="18"
          r="11"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M18 7c0 0-5 4-5 11s5 11 5 11M18 7c0 0 5 4 5 11s-5 11-5 11M7 18h22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "SharePoint",
    href: "https://www.officeexperts.com.au/services/by-business-solution/online-solutions",
    external: true,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="14" cy="18" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="18" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M18 12v12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Microsoft Azure",
    href: "https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure",
    external: true,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M7 28l8-18 6 10-4 2 8 6H7z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M18 10l7 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Microsoft Access",
    href: "https://www.accessexperts.com.au",
    external: true,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse
          cx="18"
          cy="13"
          rx="10"
          ry="5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 13v10c0 2.76 4.48 5 10 5s10-2.24 10-5V13"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 18c0 2.76 4.48 5 10 5s10-2.24 10-5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "Power BI",
    href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
    external: true,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="22"
          width="6"
          height="8"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="15"
          y="16"
          width="6"
          height="14"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="24"
          y="8"
          width="6"
          height="22"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "VB.NET / C#",
    href: "https://www.officeexperts.com.au/services/microsoft-dot-net",
    external: true,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10 12l-6 6 6 6M26 12l6 6-6 6M21 9l-6 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Microsoft Word",
    href: "https://www.wordexperts.com.au",
    external: true,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="5"
          y="5"
          width="26"
          height="26"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M10 12h16M10 17h16M10 22h10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Microsoft Outlook",
    href: "https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions",
    external: true,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="5"
          y="9"
          width="26"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M5 13l13 8 13-8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "PowerPoint",
    href: "https://www.officeexperts.com.au/services/microsoft-powerpoint",
    external: true,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="7"
          width="28"
          height="22"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="13" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M21 13h7M21 18h5M21 23h7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Add-in Development",
    href: "/add-in-development",
    external: false,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M18 6v24M6 18h24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="18"
          cy="18"
          r="11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 3"
        />
      </svg>
    ),
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const CustomDesignIntegrations = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* Left: copy block */}
      <div className={styles.copy}>
        <span className={styles.eyebrow}>Integration Experts</span>
        <h2 className={styles.heading}>
          Connect your{" "}
          <span className={styles.accent}> entire Microsoft stack.</span>
        </h2>
        <p className={styles.body}>
          As part of the Office Experts Group, we have access to senior
          developers across all Microsoft Office applications. This allows us to
          provide a comprehensive overview of your entire business systems, we
          don't just solve a single problem, we provide a fully integrated
          solution
        </p>
        <Link href="#contact" className="btn" style={{ width: "fit-content" }}>
          Talk to an expert
        </Link>
      </div>

      <div className={styles.tilesWrap}>
        <p className={styles.tilesLabel}>Technologies we work with</p>
        <div className={styles.tiles}>
          {integrations.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={styles.tile}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              title={item.name}
            >
              <span className={styles.tileIcon}>{item.svg}</span>
              <span className={styles.tileName}>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CustomDesignIntegrations;
