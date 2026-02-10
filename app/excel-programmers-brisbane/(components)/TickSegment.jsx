import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegmentCenter.module.scss";

import industryMan from "../../../public/industryMan.webp";

const TickSegment = () => {
  const industries = [
    {
      title: "Government & Public Sector",
      description:
        "Budgetary control platforms, data reporting systems, analytical applications, and compliance documentation for public sector organisations.",
    },
    {
      title: "Education",
      description:
        "Student information management, assessment monitoring platforms, timetable coordination, and administrative reporting systems.",
    },
    {
      title: "Financial Services",
      description:
        "Advanced financial modelling platforms, regulatory compliance frameworks, risk evaluation applications, and portfolio tracking solutions.",
    },
    {
      title: "Professional Services",
      description:
        "Billing and time management, project cost analysis, client reporting dashboards, and strategic intelligence platforms.",
    },
    {
      title: "Retail & E-commerce",
      description:
        "Sales performance tracking, inventory control platforms, margin optimisation tools, and consumer analytics dashboards.",
    },
    {
      title: "Manufacturing & Logistics",
      description:
        "Inventory tracking systems, production scheduling tools, distribution oversight, and quality management frameworks.",
    },
    {
      title: "Healthcare & Medical",
      description:
        "Patient data systems, clinical performance reporting, appointment coordination platforms, and privacy-compliant data handling.",
    },
    {
      title: "Construction & Engineering",
      description:
        "Project cost management, resource planning tools, progress monitoring systems, and regulatory compliance reporting.",
    },
  ];

  return (
    <section className={`${styles.gridSegment}`} style={{ marginRight: "0" }}>
      <div>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <h2>Tailored Industry Solutions</h2>

          <p className={styles.introText}>
            Through years of developing Excel solutions for Brisbane's varied
            business sectors, we've learned that standardised approaches fall
            short. We engineer industry-focused applications that address your
            organisation's specific operational demands.
          </p>
        </AnimateOnScroll>

        <div className={styles.benefitsList}>
          {industries.map((industry, index) => (
            <AnimateOnScroll
              key={industry.title}
              animation="slide-left"
              delay={index * 0.1}
            >
              <div className={styles.benefitItem} style={{ marginBottom: "0" }}>
                <div className={styles.tick}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                  </svg>
                </div>
                <div className={styles.benefitContent}>
                  <p>
                    <strong>{industry.title}</strong> - {industry.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" duration={1} delay={0.4}>
          <div className={styles.content}>
            <h2>Work in a niche industry?</h2>
            <p>
              No problems...
              <Link href={"#contact"}>
                {" "}
                Get in touch for a free consultation
              </Link>
              , our team will help you find the right solution.
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll animation="scale" duration={1.2} delay={0.1}>
        <div className={styles.imageContainer}>
          <AnimateOnScroll animation="slide-right" duration={1} delay={0.5}>
            <Image
              src={industryMan}
              alt="Design of mans face with a city in the background"
              width={450}
              height={900}
            />
          </AnimateOnScroll>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default TickSegment;
