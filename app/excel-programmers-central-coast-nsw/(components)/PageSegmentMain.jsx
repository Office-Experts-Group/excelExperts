import React from "react";
import Image from "next/image";
import Link from "next/link";
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
              <h2>Excel Expertise for the Central Coast</h2>
            </div>
            <p></p>
            <p>
              Our Central Coast programmers provide comprehensive Excel services
              for businesses throughout the region, with our 20+ strong team of
              programmers across the country we offer on-site support or cost
              effective remote solutions. We offer a{" "}
              <Link href="#contact">free consultation</Link> to help you
              determine the best course of action for your business data.
            </p>
            <p>
              As part of the{" "}
              <Link href="https://www.officeexperts.com.au">
                Office Experts Group's
              </Link>{" "}
              nationwide network, established in 2000, our programmers bring
              over 25 years of expertise developing Excel applications,
              upgrading and maintaining databases, along with the ability to
              integrate your existing systems across the Microsoft ecosystem.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
