import React from "react";
import Image from "next/image";

import styles from "../../../styles/servicePageCards.module.css";

// Import icons
import stuckIcon from "../../../public/icons/computerBlue.webp";
import issuesIcon from "../../../public/icons/supportBlue.webp";
import expertsIcon from "../../../public/icons/handShakeBlue.webp";
import migrateIcon from "../../../public/icons/ideaBlue.webp";

// Import main images
import created from "../../../public/cards/calcGraph350x200.webp";
import vsto from "../../../public/cards/data350x200.webp";
import whichIsBest from "../../../public/cards/desk350x200.webp";
import build from "../../../public/cards/deskGraph300x250.webp";

const ServicePageCards = () => {
  return (
    <section className={styles.servicePageCards}>
      <div className={styles.card}>
        <a href="#upgrades">
          <div className={styles.content}>
            <p>Excel</p>
            <h2>Upgrades and Migration</h2>
            <Image
              src={stuckIcon}
              alt="Old version icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={created}
              alt="Old version illustration"
              className={styles.mainImage}
              sizes="280px"
              width={300}
              height={171} // Adjusted based on 7:4 aspect ratio
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#migrating-away">
          <div className={styles.content}>
            <p>Excel</p>
            <h2>Migrating Away</h2>
            <Image
              src={issuesIcon}
              alt="Access issues icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={vsto}
              alt="Access issues illustration"
              className={styles.mainImage}
              sizes="280px"
              width={300}
              height={171} // Adjusted based on 7:4 aspect ratio
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#excel-help">
          <div className={styles.content}>
            <p>Excel</p>
            <h2>Our Experts can Help!</h2>
            <Image
              src={migrateIcon}
              alt="Expert help icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={whichIsBest}
              alt="Expert help illustration"
              className={styles.mainImage}
              sizes="280px"
              width={300}
              height={171} // Adjusted based on 7:4 aspect ratio
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#upgrade-issues">
          <div className={styles.content}>
            <p>Excel</p>
            <h2>Upgrade Issues</h2>
            <Image
              src={expertsIcon}
              alt="Migration icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={build}
              alt="Migration illustration"
              className={styles.mainImage}
              sizes="280px"
              width={300}
              height={171} // Adjusted based on 7:4 aspect ratio
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ServicePageCards;
