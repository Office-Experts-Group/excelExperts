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
          With a nationally connected programming team that collaborates across
          Australia. Our developers combine their expertise to tackle complex
          Excel projects, sharing knowledge and technical insight to deliver
          robust, scalable solutions.
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
