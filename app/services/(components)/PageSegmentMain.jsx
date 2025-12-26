import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import happy from "../../../public/happy.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment} style={{ gap: "0rem" }}>
      <div className={styles.imgWrapper} style={{ borderBottom: "none" }}>
        <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
          <Image
            src={happy}
            alt="Excel solutions"
            width={450}
            height={300}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Australia-wide Consultation</p>
            <h2>Custom Excel Solutions</h2>
            <p>
              With over 25 years of experience serving Australian businesses,
              Excel Experts delivers comprehensive Microsoft Excel solutions
              across all industries. Our senior consultants specialise in custom
              spreadsheet development, VBA automation, data analysis, reporting
              solutions and formula development. From initial consultation and
              design through to deployment, training and ongoing support, we
              provide expert guidance at every stage. Whether you need to
              modernise legacy spreadsheets, automate repetitive workflows,
              integrate with existing systems, or enhance your data analysis
              capabilities, our team has the technical expertise and industry
              knowledge to deliver reliable, efficient solutions that save you
              time and have proven to drive business success.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
