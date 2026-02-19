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
      title: "VBA Macro Development",
      description:
        "Remove tedious manual operations with macros that manage routine data tasks, accelerate processing workflows, and extend Excel's native functionality. From basic task automation to intricate business logic.",
      links: [
        {
          href: "/vba-macro-development",
          text: "VBA Development",
        },
      ],
    },
    {
      title: "Automated Business Workflows",
      description:
        "We build systems that independently handle data collection, execute tailored calculations and produce regular reporting solutions.",
      links: [
        {
          href: "/custom-design-and-development",
          text: "Custom Development",
        },
      ],
    },
    {
      title: "Custom Formula Solutions",
      description:
        "Utilise Excel's full analytical capabilities with custom formulas. We engineer array calculations, multi-layered function sequences, mathematical logic, and error-handling mechanisms.",
      links: [
        {
          href: "/excel-formulas-and-custom-formulas",
          text: "Formula Services",
        },
      ],
    },
    {
      title: "Database Connectivity",
      description:
        "Link your Excel workbooks with SQL databases, Microsoft Access, and corporate data repositories. Consolidate  information management throughout your organisation.",
      links: [
        {
          href: "/data-manipulation",
          text: "Data Solutions",
        },
      ],
    },
    {
      title: "Enterprise Add-In Creation",
      description:
        "Develop and distribute professional Excel add-ins utilising VSTO and VBA technologies. Ideal for enforcing standardised business procedures and integrating proprietary tools across your workforce.",
      links: [
        {
          href: "/add-in-development",
          text: "Add-In Services",
        },
      ],
    },
    {
      title: "Spreadsheet Modernisation",
      description:
        "Refresh outdated Excel workbooks and legacy VBA code to contemporary standards. We reconstruct aging automation scripts, improve processing efficiency, strengthen security measures, and ensure seamless compatibility.",
      links: [
        {
          href: "/upgrades-and-migration",
          text: "Upgrade Services",
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
              Complete Spreadsheet Solutions for Central Coast Enterprises
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
