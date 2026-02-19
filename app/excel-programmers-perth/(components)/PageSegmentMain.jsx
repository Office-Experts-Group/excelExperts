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
              <h2>Western Australia's Excel Specialists</h2>
            </div>
            <p></p>
            <p>
              Our Perth-based Excel programmers offer on-site or remote services
              to deliver expert VBA solutions, intelligent automation systems,
              advanced formula development, and robust database connectivity for
              businesses across Western Australia.
            </p>
            <p>
              As a key component of the{" "}
              <Link href="https://www.officeexperts.com.au">
                Office Experts Group's
              </Link>{" "}
              Australia-wide presence, our team contributes over 25 years of
              hands-on experience helping businesses to modernise their data
              management.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
