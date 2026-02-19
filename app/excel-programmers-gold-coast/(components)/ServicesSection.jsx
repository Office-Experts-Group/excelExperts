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
      title: "VBA & Macro Programming",
      description:
        "Banish tedious manual tasks with intelligent VBA automation. Our programmers build robust macros that handle routine data operations, accelerate processing speeds, and unlock Excel's full potential.S",
      links: [
        {
          href: "/vba-macro-development",
          text: "VBA Development",
        },
      ],
    },
    {
      title: "Workflow Automation Systems",
      description:
        "Convert labour-intensive spreadsheet processes into fully automated operations. We engineer systems that independently manage data imports, perform calculations, compile scheduled reports, and push results to relevant stakeholders.",
      links: [
        {
          href: "/custom-design-and-development",
          text: "Custom Development",
        },
      ],
    },
    {
      title: "Advanced Formula Engineering",
      description:
        "Harness Excel's computational capabilities through precision formula design. We develop array calculations, nested function sequences, custom mathematical logic, and comprehensive error-management structures.",
      links: [
        {
          href: "/excel-formulas-and-custom-formulas",
          text: "Formula Solutions",
        },
      ],
    },
    {
      title: "Database Integration Services",
      description:
        "Connect your Excel workbooks to SQL databases, Microsoft Access, and enterprise data systems. We establish secure data connections enabling live reporting, automated synchronisation, and unified information governance throughout your organisation.",
      links: [
        {
          href: "/data-manipulation",
          text: "Data Services",
        },
      ],
    },
    {
      title: "Professional Add-In Development",
      description:
        "Design and deploy enterprise-grade Excel add-ins using VSTO and VBA technologies for company-wide rollout. Ideal for establishing consistent business practices and embedding custom functionality across your entire team.",
      links: [
        {
          href: "/add-in-development",
          text: "Add-In Services",
        },
      ],
    },
    {
      title: "Legacy Spreadsheet Upgrades",
      description:
        "Revitalise aging Excel workbooks and outdated VBA codebases to contemporary standards. We refactor legacy macros, enhance processing performance, strengthen security protocols, and guarantee smooth operation with your current Microsoft 365 license.",
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
              Tailored Spreadsheet Applications for Gold Coast Businesses
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
