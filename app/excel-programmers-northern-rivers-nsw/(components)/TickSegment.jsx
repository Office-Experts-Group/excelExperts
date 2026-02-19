import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegmentCenter.module.scss";

import industryMan from "../../../public/industryMan.webp";

const TickSegment = () => {
  const industries = [
    {
      title: "Agriculture & Primary Industries",
      description:
        "Crop yield tracking, livestock management systems, seasonal planning tools, and farm financial analysis platforms.",
    },
    {
      title: "Tourism & Hospitality",
      description:
        "Booking management systems, occupancy analytics, revenue tracking, and visitor experience reporting tools.",
    },
    {
      title: "Creative Industries",
      description:
        "Project management platforms, freelancer invoicing systems, client tracking databases, and portfolio analytics.",
    },
    {
      title: "Healthcare & Allied Health",
      description:
        "Patient record systems, appointment scheduling platforms, clinical outcome tracking, and privacy-compliant data management.",
    },
    {
      title: "Retail & Local Commerce",
      description:
        "Point-of-sale analytics, stock management systems, seasonal demand forecasting, and customer loyalty tracking.",
    },
    {
      title: "Education & Training",
      description:
        "Student enrolment databases, assessment tracking systems, course scheduling tools, and institutional reporting platforms.",
    },
    {
      title: "Environmental & Sustainability",
      description:
        "Carbon footprint calculators, resource consumption tracking, environmental compliance reporting, and sustainability metrics.",
    },
    {
      title: "Professional & Trade Services",
      description:
        "Job costing systems, quote generation tools, client relationship management, and workforce scheduling platforms.",
    },
  ];

  return (
    <section className={`${styles.gridSegment}`} style={{ marginRight: "0" }}>
      <div>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <h2>Excel Solutions for All Industries</h2>

          <p className={styles.introText}>
            Our experience developing Excel applications has shown us that not
            every solution is an easy fit across all industries. Thats why we
            offer a range of solutions, from basic spreadsheet tools, to complex
            reporting platforms that are built to meet the unique needs of each
            industry.
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
