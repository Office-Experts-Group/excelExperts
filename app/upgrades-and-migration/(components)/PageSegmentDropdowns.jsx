import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegmentDropdowns.module.css";

import data from "../../../public/data600x400.webp";
import why from "../../../public/why600x400.webp";

const UpgradeIssues = () => {
  const issueDetails = [
    {
      title: "32/64 bit versions of Microsoft Windows and Microsoft Office",
      content:
        "Upgrading between 32-bit and 64-bit versions can cause compatibility issues with Excel add-ins and functions. Our experts can adjust your workbooks and code to ensure seamless operation in the new environment.",
    },
    {
      title: "Macro or VBA issues with incompatible code such as Windows APIs",
      content:
        "VBA code and macros may not work correctly when migrating to newer Excel versions. We analyze and update your code, ensuring all functionalities are compatible and optimised for performance.",
    },
    {
      title: "Shapes and ActiveX buttons change size",
      content:
        "Changes in version compatibility can alter the appearance and size of shapes and controls. We can standardize and fix these elements, ensuring your workbook layout remains intact.",
    },
    {
      title: "Crashing occurring after migration",
      content:
        "Crashes often result from hidden compatibility or resource issues. Our team will debug and streamline your workbook to make it stable and reliable in the updated version of Excel.",
    },
    {
      title: "Workbooks speeds grinding to a halt and becoming unworkable",
      content:
        "Performance slowdowns are common with inefficient formulas or outdated data structures. We optimize your workbook by improving formulas, reducing calculation times, and streamlining data processes.",
    },
  ];

  return (
    <div className={styles.upgradeSection} id="upgrade-issues">
      <div className={styles.content}>
        <h2>Excel Upgrade Issues</h2>
        <p>
          Through decades of experience we have seen many reasons why users have
          issues upgrading to new versions of Excel.
        </p>
        <p>
          <strong>Common reasons include:</strong>
        </p>

        <div className={styles.faqContainer}>
          {issueDetails.map((issue, index) => (
            <details key={index} className={styles.faqItem}>
              <summary>
                <span className={styles.questionText}><span>{issue.title}</span></span>
              </summary>
              <div className={styles.content}><span>{issue.content}</span></div>
            </details>
          ))}
        </div>
      </div>

      <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
        <div className={styles.imgSection}>
          <Image
            src={data}
            alt="person hand with digital people above it"
            width={600}
            height={400}
            className={styles.mainImg}
          />
          <Image
            src={why}
            alt="person hand with digital people above it"
            width={600}
            height={400}
            className={`${styles.mainImg} ${styles.mainImg2}`}
          />
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default UpgradeIssues;
