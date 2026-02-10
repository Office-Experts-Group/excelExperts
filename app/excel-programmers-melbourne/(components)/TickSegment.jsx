import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegmentCenter.module.scss";

import industryMan from "../../../public/industryMan.webp";

const TickSegment = () => {
  const industries = [
    {
      title: "Manufacturing & Logistics",
      description:
        "Stock management systems, production scheduling, supply chain oversight, and quality assurance frameworks.",
    },
    {
      title: "Healthcare & Medical",
      description:
        "Patient information systems, clinical analytics, scheduling platforms, and secure data processing compliant with privacy regulations.",
    },
    {
      title: "Professional Services",
      description:
        "Timesheet management, job costing systems, client dashboards, and strategic business intelligence platforms.",
    },
    {
      title: "Construction & Engineering",
      description:
        "Budget tracking tools, workforce management, project monitoring systems, and regulatory compliance documentation.",
    },
    {
      title: "Financial Services",
      description:
        "Sophisticated financial projections, compliance reporting frameworks, risk assessment tools, and investment portfolio management applications.",
    },
    {
      title: "Retail & E-commerce",
      description:
        "Revenue analysis platforms, stock control systems, dynamic pricing engines, and customer behaviour analytics.",
    },
    {
      title: "Education",
      description:
        "Learner database systems, performance monitoring tools, scheduling applications, and administrative reporting platforms.",
    },
    {
      title: "Government & Public Sector",
      description:
        "Financial oversight systems, information reporting frameworks, analytical tools, and regulatory tracking for public agencies.",
    },
  ];

  return (
    <section className={`${styles.gridSegment}`} style={{ marginRight: "0" }}>
      <div>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <h2>Industry-Specific Excel Expertise</h2>

          <p className={styles.introText}>
            Decades of building Excel applications across Melbourne's commercial
            landscape has shown us that 'off-the-shelf' solutions rarely meet
            specific needs. We design sector-tailored applications in order to
            tackle your industries operational challenges.
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
