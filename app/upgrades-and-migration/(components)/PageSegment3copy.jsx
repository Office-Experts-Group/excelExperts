import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import askExpert from "../../../public/askExpert540x480.webp";

const PageSegment3 = () => {
  return (
    <section
      className={styles.pageSegment}
      id="excel-help"
      style={{ margin: "-3rem 0 4rem 0" }}
    >
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={askExpert}
          alt="Man pulling out card that says Ask an Expert"
          width={400}
          height={356}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2>A Smooth Transition Experience</h2>
          </div>
          <p style={{ marginBottom: ".5rem"}}>
          We understand that change can be daunting, especially when it involves systems your team uses daily. That's why our migration process focuses on minimising disruption while maximising the benefits of your new solution.
          </p>

    <p style={{ marginBottom: ".5rem"}}>We begin by thoroughly analysing your current Excel setup to understand exactly how you use it and what information is most valuable. Rather than forcing you into a prepackaged solution, we design a custom migration path that addresses your specific pain points and business requirements.</p>

    <p>Throughout the transition, we provide comprehensive training and support to ensure your team feels confident with the new tools. Many clients are surprised by how quickly their teams adapt, especially once they experience the improved performance and capabilities of our custom solutions.</p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
