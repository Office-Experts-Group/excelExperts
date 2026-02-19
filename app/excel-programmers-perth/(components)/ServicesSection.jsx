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
      title: "VBA Programming & Macros",
      description:
        "Automate tedious manual processes and extend Excel's core functionality with VBA development. We engineer  macros that simplify data handling, speed up workflows, and automate daily tasks. Our VBA solutions boost productivity while minimising errors.",
      links: [
        {
          href: "/vba-macro-development",
          text: "VBA Development",
        },
      ],
    },
    {
      title: "Business Process Automation",
      description:
        "Reduce human error and time-consuming spreadsheet tasks with complete automation. Our developers create systems that autonomously import data, run complex calculations, generate scheduled reports, and distribute results.",
      links: [
        {
          href: "/custom-design-and-development",
          text: "Custom Development",
        },
      ],
    },
    {
      title: "Formula Creation",
      description:
        "Our programmers can develop array calculations, layered function sequences, custom mathematical logic, and error-handling frameworks. Essential for efficient spreadsheet development",
      links: [
        {
          href: "/excel-formulas-and-custom-formulas",
          text: "Formula Creation",
        },
      ],
    },
    {
      title: "Data System Integration",
      description:
        "Connect your Excel workbooks with SQL databases, Microsoft Access, Power BI and corporate data repositories. We work across the entire Microsoft ecosystem to create wholistic business solutions.",
      links: [
        {
          href: "/data-manipulation",
          text: "Data Solutions",
        },
      ],
    },
    {
      title: "Add-In Development",
      description:
        "Professional-grade Excel add-ins using VSTO and VBA for organisation-wide deployment. Ideal for enforcing consistent business practices and embedding custom functionality across your workforce.",
      links: [
        {
          href: "/add-in-development",
          text: "Add-In Development",
        },
      ],
    },
    {
      title: "Spreadsheet Modernisation",
      description:
        "We reconstruct outdated automation, enhance processing speeds, reinforce security protocols, and ensure full compatibility with the latest Microsoft 365 releases.",
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
              Purpose-Built Spreadsheet Solutions for WA Enterprises
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
