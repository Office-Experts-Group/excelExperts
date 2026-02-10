import React from "react";
import Image from "next/image";

import styles from "../../../styles/quote.module.scss";

import magnifyIcon from "../../../public/magnifyIcon.webp";
import xlsIcon from "../../../public/xlsIcon.webp";

const Quote = () => {
  return (
    <section className={styles.quote}>
      <Image
        src={magnifyIcon}
        alt="Magnifying glass icon"
        width={300}
        height={300}
        className={styles.icon}
      />
      <div className={styles.content}>
        <p>
          No two organisations operate identically. At Excel Experts, we
          collaborate directly with your team to comprehend your distinct
          processes, data obstacles, and operational goals. We then engineer
          applications that integrate seamlessly with your current
          infrastructure and daily operations.
        </p>
      </div>

      <Image
        src={xlsIcon}
        alt="xls spreadsheet icon"
        width={300}
        height={300}
        className={styles.iconBottom}
      />
    </section>
  );
};

export default Quote;
