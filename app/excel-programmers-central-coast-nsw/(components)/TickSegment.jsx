import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegmentCenter.module.scss";

import industryMan from "../../../public/industryMan.webp";

const TickSegment = () => {
  const industries = [
    {
      title: "Tourism & Accommodation",
      description:
        "Reservation management platforms, occupancy tracking systems, revenue analysis tools, and guest experience reporting solutions.",
    },
    {
      title: "Retail & Local Commerce",
      description:
        "Point-of-sale analytics, stock control systems, seasonal trend forecasting, and customer purchasing behaviour tracking.",
    },
    {
      title: "Healthcare & Aged Care",
      description:
        "Resident and patient data management, clinical reporting platforms, roster scheduling tools, and privacy-compliant record systems.",
    },
    {
      title: "Construction & Trades",
      description:
        "Job costing systems, materials tracking tools, project timeline monitoring, and subcontractor management platforms.",
    },
    {
      title: "Food & Beverage",
      description:
        "Inventory management systems, supplier ordering tools, cost analysis platforms, and menu profitability tracking.",
    },
    {
      title: "Professional Services",
      description:
        "Timesheet management, client billing systems, project profitability tracking, and business performance dashboards.",
    },
    {
      title: "Education & Childcare",
      description:
        "Enrolment databases, attendance tracking systems, fee management tools, and regulatory compliance reporting.",
    },
    {
      title: "Transport & Distribution",
      description:
        "Fleet monitoring systems, delivery scheduling tools, route optimisation platforms, and freight cost analysis.",
    },
  ];

  return (
    <section className={`${styles.gridSegment}`} style={{ marginRight: "0" }}>
      <div>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <h2>Excel Solutions for Regional Industries</h2>

          <p className={styles.introText}>
            Our experience developing Excel applications for Central Coast
            businesses has demonstrated that cookie-cutter solutions seldom
            address specific operational needs. We engineer sector-focused
            applications that tackle the particular challenges your industry
            encounters.
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
