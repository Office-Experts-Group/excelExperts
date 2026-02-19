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
          Working with a local in your area can unlock the unique regional
          knowledge that often lacks in the IT industry. Our programmers take
          the time to understand your workflows, data requirements, and business
          aspirations before working alongside your business.
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
