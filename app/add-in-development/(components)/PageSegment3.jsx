import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import ladyComputer from "../../../public/ladyComputer300x200.webp";

const PageSegment3 = () => {
  return (
    <section
      className={styles.pageSegment}
      id="vsto"
      style={{ marginBottom: "4rem" }}
    >
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={ladyComputer}
          alt="lady using computer"
          width={300}
          height={200}
        />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2>Add-Ins Created in VSTO</h2>
          </div>
          <p>
            VSTO is a set of development tools available with Microsoft Visual
            Studio that supports the Microsoft .NET Framework. It is used by
            developers to write code connecting Microsoft Office applications.
            Developers using VSTO can use .NET languages, instead of using VBA.
            VSTO add-ins are installed on a PC and are compiled applications.
            From a security point of view, VSTO created add-ins are perfect for
            distributing code that you want to protect.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment3;
