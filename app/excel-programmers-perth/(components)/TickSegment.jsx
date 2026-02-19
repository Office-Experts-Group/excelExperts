import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegmentCenter.module.scss";

import industryMan from "../../../public/industryMan.webp";

const TickSegment = () => {
  const industries = [
    {
      title: "Mining & Resources",
      description:
        "Production tracking systems, equipment maintenance scheduling, safety compliance reporting, and operational cost analysis platforms.",
    },
    {
      title: "Oil, Gas & Energy",
      description:
        "Asset management systems, production forecasting tools, regulatory compliance frameworks, and field operations reporting.",
    },
    {
      title: "Construction & Infrastructure",
      description:
        "Project cost tracking, resource allocation systems, progress monitoring tools, and contractor management platforms.",
    },
    {
      title: "Agriculture & Farming",
      description:
        "Yield tracking systems, livestock management tools, seasonal planning platforms, and farm financial analysis.",
    },
    {
      title: "Financial Services",
      description:
        "Investment analysis models, regulatory compliance systems, risk assessment platforms, and portfolio performance tracking.",
    },
    {
      title: "Healthcare & Medical",
      description:
        "Patient data management, clinical reporting systems, appointment scheduling platforms, and privacy-compliant record keeping.",
    },
    {
      title: "Transport & Logistics",
      description:
        "Fleet management systems, route optimisation tools, delivery tracking platforms, and freight cost analysis.",
    },
    {
      title: "Government & Public Sector",
      description:
        "Budget oversight systems, public reporting frameworks, data analysis platforms, and compliance documentation tools.",
    },
  ];

  return (
    <section className={`${styles.gridSegment}`} style={{ marginRight: "0" }}>
      <div>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <h2>Industry Specific Solutions</h2>

          <p className={styles.introText}>
            Years of developing Excel applications for a broad range of
            industries has taught us that a one-size-fits-all approach often
            create headaches for future development. We engineer sector-specific
            solutions that make working with data simple and efficient.
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
