import React from "react";
import Image from "next/image";
import AnimateOnScroll from "../../../components/AnimateOnScroll";
import Link from "next/link";

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
              <h2>Custom Excel Development</h2>
            </div>
            <p></p>
            <p>
              Our Gold Coast programming team delivers professional VBA
              solutions, workflow automation systems, sophisticated formula
              development, and seamless database integration. We offer a{" "}
              <Link href="#contact">free consultation</Link> to understand your
              specific requirements, and then suggest the most efficient
              solution that aligns with your budget and future goals.
            </p>
            <p>
              As an integral part of{" "}
              <Link href="https://www.officeexperts.com.au">
                Office Experts Group's
              </Link>{" "}
              nationwide network, our programmers leverage more than 25 years of
              combined experience building Excel applications that transform how
              businesses process and analyse their critical data.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
