import React from "react";
import Image from "next/image";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.scss";

import expert from "../../../public/expert.webp";
import Link from "next/link";

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
              <h2>Your Local Excel Experts</h2>
            </div>
            <p></p>
            <p>
              Established and still headquartered in the Northern Rivers for the
              last 25 years, Scott and Rochelle have built a team of senior
              programmers who now spread Australia wide. The business has grown
              to become a trusted source of support, upgrades and maintenance
              not only for Excel, but{" "}
              <Link href="https://www.officeexperts.com.au">
                across the entire Microsoft Suite
              </Link>
              .
            </p>
            <p>
              The Excel team delivers on-site or remote services to businesses
              of all sizes. We create VBA solutions, intelligent automation
              systems, advanced formula development and robust database
              connectivity.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
