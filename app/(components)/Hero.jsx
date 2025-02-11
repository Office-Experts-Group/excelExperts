import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/hero.module.css";

import meeting from "../../public/hero/meeting.webp";
import graph from "../../public/hero/graph.webp";
import shapeLeft from "../../public/hero/shapeLeft.png";
import shapeRight from "../../public/hero/shapeRight.webp";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <Image
            src={meeting}
            alt="Office environment"
            className={styles.slideImage}
            priority
            height={1920}
            width={1080}
          />
        </div>
        <div className={styles.slide}>
          <Image
            src={graph}
            alt="Document design"
            className={styles.slideImage}
            height={1920}
            width={1080}
            // priority
          />
        </div>
      </div>

      <Image
        src={shapeLeft}
        alt="shape icon"
        className={`${styles.shape} ${styles.shapeLeft}`}
        width={378}
        height={371}
        // priority
      />
      <Image
        src={shapeRight}
        alt="shape icon"
        className={`${styles.shape} ${styles.shapeRight}`}
        width={327}
        height={317.5}
        // priority
      />

      <div className={styles.content}>
        <div className={styles.subHead}>
          <div className={styles.bar}></div>
          <div className={styles.headingWrapper}>
            <h4 className={styles.heading1}>
              Microsoft Development and Consulting
            </h4>
            <h4 className={styles.heading2}>
              With over 25 years of experience...
            </h4>
          </div>
        </div>
        <h2>
          Excel<br></br>Experts
        </h2>
        <Link href="/custom-design-and-development" className="btn">
          Discover More
        </Link>
      </div>
    </section>
  );
};

export default Hero;
