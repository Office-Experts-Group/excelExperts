import React from "react";
import Link from "next/link";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import CardIntersectionWrapper from "../../../components/CardIntersectionWrapper";

import styles from "../../../styles/servicesSection.module.css";

import background from "../../../public/gearBG.webp";

const ServicesSection = () => {
  const services = [
    {
      title: "VBA Macro Solutions",
      description:
        "Eliminate repetitive manual work through intelligent VBA programming. Our developers craft robust macros that handle routine data operations, accelerate processing times, and drill deep into Excels strongest capabilities.",
      links: [
        {
          href: "/vba-macro-development",
          text: "VBA Development",
        },
      ],
    },
    {
      title: "Automated Workflows",
      description:
        "Convert labour-intensive spreadsheet routines into hands-free automated systems. We build solutions that independently manage data collection, process complex calculations, compile periodic reports, and create meaningful, actionable insights.",
      links: [
        {
          href: "/custom-design-and-development",
          text: "Custom Development",
        },
      ],
    },
    {
      title: "Complex Formula Design",
      description:
        "Tap into Excel's full potential with custom formulas. We construct array calculations, nested function chains, and comprehensive error-handling structures. Ideal for financial modelling, and operational forecasting.",
      links: [
        {
          href: "/excel-formulas-and-custom-formulas",
          text: "Formula Solutions",
        },
      ],
    },
    {
      title: "Database Linking",
      description:
        "Bridge your Excel workbooks with SQL databases, Microsoft Access, and enterprise data systems. We establish secure data connections enabling real-time reporting capabilities, automated data refreshes, and unified information management across your organisation.",
      links: [
        {
          href: "/data-manipulation",
          text: "Data Solutions",
        },
      ],
    },
    {
      title: "Custom Add-In Creation",
      description:
        "Develop and deploy professional Excel add-ins using VSTO and VBA technologies for company-wide rollout. Perfect for standardising business processes and embedding proprietary tools throughout your workforce.",
      links: [
        {
          href: "/add-in-development",
          text: "Add-In Services",
        },
      ],
    },
    {
      title: "Legacy System Updates",
      description:
        "Breathe new life into aging Excel files and outdated VBA codebases. We refactor legacy macros, boost processing performance, strengthen security measures, and guarantee smooth operation with contemporary Excel releases.",
      links: [
        {
          href: "/upgrades-and-migration",
          text: "Migration Services",
        },
      ],
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <Image
        src={background}
        alt="Background"
        className={`${styles.backgroundImage} ${styles.top}`}
      />
      <Image
        src={background}
        alt="Background"
        className={`${styles.backgroundImage} ${styles.bottom}`}
      />
      <div className={styles.container}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p className={styles.sectionSubtitle}>
              Custom Spreadsheet Solutions For Any Situation
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-down" delay={0.2} duration={1}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <CardIntersectionWrapper key={index}>
                <div className={styles.serviceCard}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>

                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>

                  {service.links.length > 0 && (
                    <div className={styles.serviceLinks}>
                      {service.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className={styles.serviceLink}
                        >
                          <span>{link.text}</span>
                          <svg viewBox="0 0 24 24" className={styles.linkIcon}>
                            <path
                              d="M7 17L17 7M17 7H8M17 7V16"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </CardIntersectionWrapper>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ServicesSection;
