import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegmentCenter.module.scss";

import industryMan from "../../../public/industryMan.webp";

const TickSegment = () => {
  const industries = [
    {
      title: "Tourism & Hospitality",
      description:
        "Booking management platforms, occupancy analytics, revenue tracking systems, and visitor experience reporting tools.",
    },
    {
      title: "Construction & Property",
      description:
        "Project costing systems, resource scheduling tools, progress monitoring platforms, and contractor management frameworks.",
    },
    {
      title: "Retail & E-commerce",
      description:
        "Sales performance tracking, inventory control systems, pricing optimisation tools, and customer behaviour analytics.",
    },
    {
      title: "Healthcare & Allied Health",
      description:
        "Patient record management, clinical outcome tracking, appointment scheduling platforms, and privacy-compliant data handling.",
    },
    {
      title: "Professional Services",
      description:
        "Time tracking systems, project profitability analysis, client reporting dashboards, and business intelligence platforms.",
    },
    {
      title: "Education & Training",
      description:
        "Student database systems, assessment tracking tools, course scheduling platforms, and administrative reporting frameworks.",
    },
    {
      title: "Marine & Water Sports",
      description:
        "Equipment rental tracking, booking systems, maintenance scheduling, and seasonal demand forecasting tools.",
    },
    {
      title: "Events & Entertainment",
      description:
        "Ticketing analytics, venue management systems, vendor coordination platforms, and event profitability tracking.",
    },
  ];

  return (
    <section className={`${styles.gridSegment}`} style={{ marginRight: "0" }}>
      <div>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <h2>Industry-Focused Excel Solutions</h2>

          <p className={styles.introText}>
            Years of building Excel applications have shown us that every job is
            different, from simple solutions to complex migrations and entire
            data overhauls. We create sector-specific solutions designed to
            address the particular challenges your industry faces.
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
