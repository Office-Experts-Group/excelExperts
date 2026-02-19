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
          As a nation-wide team of programmers, designers and consultants, we
          collaborate to create Excel solutions in a huge variety of business
          landscapes. We integrate the entire Microsoft ecosystem to deliver the
          most effective solutions.
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
