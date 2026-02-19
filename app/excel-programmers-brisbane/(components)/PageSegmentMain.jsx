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
              <h2>Specialist Excel Development</h2>
            </div>
            <p></p>
            <p>
              Our Brisbane-based programming specialists focus on delivering
              tailored VBA solutions, automated spreadsheet systems, complex
              formula development, and seamless database connectivity. Our
              portfolio spans organisations across numerous sectors ranging from
              accounting firms and corporate offices in the CBD, to mining
              operations and transport companies throughout South East
              Queensland.
            </p>
            <p>
              As valued members of the{" "}
              <Link href="https://www.officeexperts.com.au">
                Office Experts Group's
              </Link>{" "}
              Australia-wide network, our team brings over 25 years of
              experience engineering sophisticated Excel applications that
              fundamentally change how businesses manage and analyse their data.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
