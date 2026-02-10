import React from "react";
import Image from "next/image";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.scss";

import expert from "../../../public/expert.webp";

const PageSegmentMain = () => {
  return (
    <section
      className={styles.pageSegment}
      style={{ flexDirection: "row-reverse" }}
    >
      <div className={styles.imgWrapper} style={{ borderBottom: "none" }}>
        <Image
          src={expert}
          alt="Expert written in paper cutouts"
          width={450}
          height={300}
        />
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>Professional Excel Programming</h2>
            </div>
            <p></p>
            <p>
              Our senior Excel programmers in Melbourne specialise in turning
              complex spreadsheets into powerful, automated business tools. From
              VBA development and workflow automation to database connectivity
              and tailored formulas, we help organisations across Melbourne
              operate faster, smarter, and with greater accuracy.
            </p>
            <p>
              Operating as part of Office Experts Group's nationwide network, we
              draw on more than 25 years of collective expertise developing
              Excel applications that revolutionise data workflows for
              Australian enterprises.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
