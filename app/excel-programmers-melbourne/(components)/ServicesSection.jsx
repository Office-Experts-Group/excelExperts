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
      title: "Custom VBA Programming",
      description:
        "Streamline manual processes and enhance Excel capabilities through tailored VBA development. We can create powerful macros that eliminate repetitive workflows, automate data processing, and deliver sophisticated automation solutions. Whether you require simple task automation or intricate business rule implementation, we engineer VBA code that boosts efficiency and minimises human error.",
      links: [
        {
          href: "/vba-macro-development",
          text: "VBA Development",
        },
      ],
    },
    {
      title: "Workflow Automation",
      description:
        "Revolutionise time-consuming spreadsheet tasks with complete automation. Our developers engineer systems that autonomously handle data imports, execute complex calculations, produce scheduled reports, and share outputs with stakeholders, freeing up your team to focus on strategic work.",
      links: [
        {
          href: "/custom-design-and-development",
          text: "Custom Development",
        },
      ],
    },
    {
      title: "Advanced Formula Solutions",
      description:
        "Harness Excel's computational power with formulas and functions tailored for your business. We can provide multi-layered functions, array calculations, bespoke logic sequences, and robust error-management systems. Ideal for intricate financial projections, scientific computations, and analytical frameworks.",
      links: [
        {
          href: "/excel-formulas-and-custom-formulas",
          text: "Formula Solutions",
        },
      ],
    },
    {
      title: "Data Connectivity",
      description:
        "Link Excel workbooks to SQL databases, Microsoft Access, and enterprise data sources. We engineer live data pipelines enabling instant reporting, scheduled data synchronisation, and unified information management across your organisation.",
      links: [
        {
          href: "/data-manipulation",
          text: "Data Manipulation",
        },
      ],
    },
    {
      title: "Professional Add-In Creation",
      description:
        "Develop enterprise-grade add-ins using VSTO and VBA to deploy custom tools organisation-wide. Perfect for establishing standardised workflows and embedding proprietary functionality throughout your company.",
      links: [
        {
          href: "/add-in-development",
          text: "Add-In Creation",
        },
      ],
    },
    {
      title: "System Modernisation",
      description:
        "Transform obsolete spreadsheets and aging VBA codebases to contemporary standards. Our team reconstructs legacy systems, optimising execution speed, strengthening data security with seamless operation in current Excel releases.",
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
              Custom Spreadsheet Solutions Engineered for Your Business
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
