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
      title: "VBA & Macro Development",
      description:
        "Automate repetitive tasks and extend Excel functionality with custom VBA programming. Our experienced developers create sophisticated macros that streamline workflows, eliminate manual processes, and unlock powerful automation capabilities. From simple task automation to complex business logic, we develop VBA solutions that save time and reduce errors.",
      links: [
        {
          href: "/vba-macro-development",
          text: "VBA Development",
        },
      ],
    },
    {
      title: "Custom Design & Development",
      description:
        "Transform your business processes with bespoke Excel solutions tailored to your exact requirements. Our consultants begin with thorough business analysis to understand your workflows, data needs and reporting objectives. We architect spreadsheet solutions featuring intuitive interfaces, advanced formulas, automated calculations, and professional formatting that align perfectly with your business goals.",
      links: [
        {
          href: "/custom-design-and-development",
          text: "Custom Development",
        },
      ],
    },
    {
      title: "Formulas & Functions",
      description:
        "Unlock the full power of Excel's calculation engine with expert formula development. Whether you need complex nested formulas, array formulas, custom functions, or formula troubleshooting, our specialists design calculation solutions that process your data efficiently and accurately. We create formulas that are both powerful and maintainable.",
      links: [
        {
          href: "/excel-formulas-and-custom-formulas",
          text: "Formula Services",
        },
      ],
    },
    {
      title: "Pivot Tables, Charts & Reporting",
      description:
        "Transform raw data into actionable insights with professional reporting solutions. We create dynamic pivot tables, interactive dashboards, automated reports, and compelling data visualisations. Our experts design reporting systems that update automatically, present information clearly, and support better business decisions.",
      links: [
        {
          href: "/pivot-tables-charts-and-reporting-solutions",
          text: "Reporting Solutions",
        },
      ],
    },
    {
      title: "Data Manipulation & Analysis",
      description:
        "Streamline your data workflows with expert data manipulation services. We handle data import/export, cleaning, transformation, parsing, and processing from multiple sources including CSV, XML, SQL, JSON and more. Our solutions automate data preparation tasks, ensuring your information is accurate, consistent, and ready for analysis.",
      links: [
        {
          href: "/data-manipulation",
          text: "Data Services",
        },
      ],
    },
    {
      title: "Training & Support",
      description:
        "Empower your team with expert Excel training and responsive support services. Whether you need occasional guidance, structured training programmes, or ongoing support for your organisation, our consultants provide the help you need. We offer customised training sessions, troubleshooting assistance, and continuous support to keep your Excel solutions running smoothly.",
      links: [
        {
          href: "/excel-support",
          text: "Excel Support",
        },
      ],
    },
    {
      title: "Add-In Development",
      description:
        "Extend Excel's capabilities across your organisation with custom add-in development. We create add-ins using VSTO and VBA that integrate seamlessly with Excel and other Office applications, providing custom functionality available to all users. Perfect for standardising processes, distributing custom tools, and enhancing productivity company-wide.",
      links: [
        {
          href: "/add-in-development",
          text: "Add-In Services",
        },
      ],
    },
    {
      title: "Upgrades & Migration",
      description:
        "Modernise your Excel solutions with our comprehensive upgrade and migration services. We handle Excel version upgrades, legacy spreadsheet modernisation, cloud migration, and conversion of outdated systems to contemporary architectures. Our migration process includes thorough testing, documentation, user training, and post-migration support.",
      links: [
        {
          href: "/upgrades-and-migration",
          text: "Migration Services",
        },
      ],
    },
    {
      title: "Microsoft Office Integration",
      description:
        "As part of the Office Experts Group, we provide seamless integration between Excel and other Microsoft applications. Connect your spreadsheets with Access databases, Power BI dashboards, Word documents, PowerPoint presentations, and more. We automate data flows across the Microsoft ecosystem, eliminating manual data entry and ensuring consistency across all your business applications.",
      links: [
        {
          href: "https://www.officeexperts.com.au",
          text: "Complete Integrations",
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
            <h2 className={styles.sectionTitle}>
              Our Microsoft Excel Services
            </h2>
            <p className={styles.sectionSubtitle}>
              Tailored Spreadsheet Solutions for Every Business Need
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
