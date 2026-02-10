import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegmentCenter.module.scss";

import industryMan from "../../../public/industryMan.webp";

const TickSegment = () => {
  const industries = [
    {
      title: "Financial Services",
      description:
        "Complex financial models, regulatory reporting, risk analysis systems, and portfolio management tools.",
    },
    {
      title: "Professional Services",
      description:
        "Time tracking, project costing, client reporting, and business intelligence solutions.",
    },
    {
      title: "Healthcare & Medical",
      description:
        "Patient data management, clinical reporting, appointment systems, and HIPAA-compliant data processing.",
    },
    {
      title: "Education",
      description:
        "Student records management, assessment tracking, timetabling systems, and administrative reporting.",
    },
    {
      title: "Manufacturing & Logistics",
      description:
        "Inventory management, production planning, supply chain tracking, and quality control systems.",
    },
    {
      title: "Retail & E-commerce",
      description:
        "Sales analysis, inventory tracking, pricing models, and customer analytics.",
    },
    {
      title: "Construction & Engineering",
      description:
        "Project costing, resource allocation, progress tracking, and compliance reporting.",
    },
    {
      title: "Government & Public Sector",
      description:
        "Budget management, reporting systems, data analysis, and compliance tracking for government departments.",
    },
  ];

  return (
    <section className={`${styles.gridSegment}`} style={{ marginRight: "0" }}>
      <div>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <h2>Proven Excel Solutions</h2>

          <p className={styles.introText}>
            Years of developing Excel workflows across Sydney's major industries
            has taught us that in 2026, generic spreadsheets just don't cut
            it... We deliver industry-specific solutions that address your
            particular requirements.
          </p>

          <div className={styles.benefitsList}>
            {industries.map((industry, index) => (
              <AnimateOnScroll
                key={industry.title}
                animation="slide-left"
                delay={index * 0.1}
              >
                <div
                  className={styles.benefitItem}
                  style={{ marginBottom: "0" }}
                >
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
        </AnimateOnScroll>

        <div className={styles.content}>
          <h2>Work in a niche industry?</h2>
          <p>
            No problems...
            <Link href={"#contact"}> Get in touch for a free consultation</Link>
            , our team will help you find the right solution.
          </p>
        </div>
      </div>

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
    </section>
  );
};

export default TickSegment;
