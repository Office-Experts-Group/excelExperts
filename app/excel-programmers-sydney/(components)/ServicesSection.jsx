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
      title: "VBA Macro Programming",
      description:
        "Custom VBA development to automate repetitive tasks, process data efficiently, and extend Excel functionality beyond standard features. We create sophisticated macros that integrate with databases, external files, and other Office applications.",
      links: [
        {
          href: "/vba-macro-development",
          text: "VBA Development",
        },
      ],
    },
    {
      title: "Excel Automation Solutions",
      description:
        "Let us transform repetitive manual spreadsheet workflows into fully automated systems. We develop solutions that can automatically import data, perform calculations, generate reports, and distribute results.",
      links: [
        {
          href: "/custom-design-and-development",
          text: "Custom Development",
        },
      ],
    },
    {
      title: "Custom Formula Development",
      description:
        "Advanced Excel formula engineering including array formulas, nested functions, custom calculation logic, and error-handling solutions. Perfect for complex financial models, scientific calculations, and business analytics.",
      links: [
        {
          href: "/excel-formulas-and-custom-formulas",
          text: "Formula Services",
        },
      ],
    },
    {
      title: "Database Integration",
      description:
        "Connect your Excel spreadsheets to SQL Server, Access, and other databases. We  create data connections that enable real-time reporting, automated data imports, and centralised data management.",
      links: [
        {
          href: "/data-manipulation",
          text: "Data Services",
        },
      ],
    },
    {
      title: "Excel Add-In Development",
      description:
        "Professional add-in creation using VSTO and VBA to distribute custom functionality across your organisation. Ideal for standardising processes and integrating custom tools company-wide.",
      links: [
        {
          href: "/add-in-development",
          text: "Add-In Services",
        },
      ],
    },
    {
      title: "Legacy System Modernisation",
      description:
        "Upgrade outdated Excel spreadsheets and VBA code to modern standards. We refactor legacy macros, improve performance, enhance security, and ensure compatibility with the latest Excel versions.",
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
              On-site or via remote access, our programmers help you make
              smarter business decisions.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <AnimateOnScroll
              key={index}
              animation="fade-up"
              delay={index * 0.15}
              duration={1}
            >
              <CardIntersectionWrapper>
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
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
