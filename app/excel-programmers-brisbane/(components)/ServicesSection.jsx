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
      title: "VBA Automation Development",
      description:
        "Eliminate time-consuming manual tasks with sophisticated VBA automation. Our development team creates intelligent macros that handle repetitive processes, accelerate data workflows, and expand Excel's native capabilities. From straightforward task automation to elaborate programming logic, we build VBA systems that enhance productivity and accuracy.",
      links: [
        {
          href: "/vba-macro-development",
          text: "VBA Development",
        },
      ],
    },
    {
      title: "Process Automation",
      description:
        "Convert labour-intensive spreadsheet operations into automated processes. We engineer automation tools that independently manage data acquisition, execute computations, create scheduled reports, and deliver results to your team, saving on hours of error-prone manual inputs.",
      links: [
        {
          href: "/custom-design-and-development",
          text: "Custom Development",
        },
      ],
    },
    {
      title: "Formula Engineering",
      description:
        "Maximise Excel's calculation capabilities through precision formula design. Our programmers develop complex array operations, nested function sequences, tailored computational algorithms, and comprehensive error-handling frameworks. Perfect for detailed financial analysis, research calculations, and data-driven decision-making.",
      links: [
        {
          href: "/excel-formulas-and-custom-formulas",
          text: "Custom Formulas",
        },
      ],
    },
    {
      title: "Database Connectivity Solutions",
      description:
        "Bridge your Excel applications with SQL databases, Microsoft Access platforms, and corporate data repositories. We can develop robust data connections facilitating live reporting capabilities, scheduled data synchronisation, and streamlined information governance.",
      links: [
        {
          href: "/data-manipulation",
          text: "Data Solutions",
        },
      ],
    },
    {
      title: "Custom Add-In Solutions",
      description:
        "Design and distribute professional Excel add-ins leveraging VSTO and VBA technologies for enterprise-wide deployment. Ideal for implementing consistent business processes and embedding specialised tools across your entire workforce.",
      links: [
        {
          href: "/add-in-development",
          text: "Add-In Creation",
        },
      ],
    },
    {
      title: "Spreadsheet Modernisation",
      description:
        "Revitalise outdated Excel files and dated VBA programming to meet current standards. We refactor aging automation scripts, enhance processing efficiency, bolster security protocols, and ensure full compatibility with modern Microsoft platforms.",
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
              Custom Spreadsheet Applications Built for Your Organisation
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
