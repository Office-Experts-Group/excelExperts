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
              <h2>Excel Programming Experts</h2>
            </div>
            <p></p>
            <p>
              Our team of senior Excel programmers in Sydney specialise in VBA
              macro development, custom automation, advanced formulas, and
              database integration. We have worked alongside a wide range of
              businesses across various industries, from finance and
              professional services in the CBD to manufacturing and logistics
              operations throughout Greater Sydney.
            </p>
            <p>
              As part of the Australia-wide team at Office Experts Group, we
              bring over 25 years of experience creating custom Excel solutions
              that transform how local businesses work with data.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
