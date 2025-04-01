import React from "react";
import Image from "next/image";

import styles from "../../../styles/pageSegment.module.css";

import moreGraphs from "../../../public/moreGraphs600x400.webp";
import semi from "../../../public/shapes/semi600x600.webp";
import Link from "next/link";

const PageSegmentMain = () => {
  return (
    <section
      className={styles.pageSegment}
      style={{ backgroundColor: "#f2f3f5", padding: "6rem 10vw", margin: "0" }}
    >
      <Image
        src={semi}
        alt="shape"
        className={styles.semi}
        width={600}
        height={600}
      />
      <div className={styles.imgWrapper}>
        <Image
          src={moreGraphs}
          alt="lady in an office environment"
          width={600}
          height={400}
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <p>Seamless Integration</p>
          <h2>Extending Microsoft Excel Functionality</h2>
          <p>
            An Excel add-in contains code to extend Excel's functionality,
            usually in the form of new functions, <Link href={"https://www.wordexperts.com.au/custom-toolbars-and-ribbons"}>custom ribbon or toolbar
            buttons</Link>. Once an add-in is deployed to your Excel environment, the
            new functions and buttons are available to all of your Excel
            workbooks to automate your repetitive tasks and processes. Excel
            add-ins can be created with:
          </p>
          <div className={styles.points}>
            <div className={styles.point}>
              <div className={styles.tick}>
                <svg
                  stroke="#ff403f"
                  fill="#ff403f"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                </svg>
              </div>
              <p>Excel using the VBA programming language</p>
            </div>
            <div className={styles.point}>
              <div className={styles.tick}>
                <svg
                  stroke="#ff403f"
                  fill="#ff403f"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                </svg>
              </div>
              <p>VSTO using .NET programming languages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageSegmentMain;
