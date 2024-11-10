import React from "react";
import Image from "next/image";

import styles from "../../../styles/servicePageCards.module.css";

// Import icons
import stuckIcon from "../../../public/icons/computerRed.png";
import issuesIcon from "../../../public/icons/support.png";
import expertsIcon from "../../../public/icons/deal.png";
import migrateIcon from "../../../public/icons/idea.png";

// Import main images
import created from "../../../public/hand300x200.webp";
import vsto from "../../../public/programmer300x200.webp";
import whichIsBest from "../../../public/dashboard300x180.webp";
import build from "../../../public/training300x200.webp";

const ServicePageCards = () => {
  return (
    <section
      className={styles.servicePageCards}
      style={{ margin: "0rem 0 2rem 0" }}
    >
      <div className={styles.card}>
        <a href="#upgrades">
          <div className={styles.content}>
            <p>Excel</p>
            <h2 style={{ padding: "0" }}>Upgrades and Migration</h2>
            <Image
              src={stuckIcon}
              alt="Old version icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper} style={{ position: "relative" }}>
            {" "}
            <Image
              src={created}
              alt="Old version illustration"
              fill
              sizes="(max-width: 280px) 100vw, 280px"
              className={styles.mainImage}
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
          <div className={styles.imageWrapper} style={{ position: "relative" }}>
            {" "}
            <Image
              src={vsto}
              alt="Access issues illustration"
              fill
              sizes="(max-width: 280px) 100vw, 280px"
              className={styles.mainImage}
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
              sizes="(max-width: 280px) 100vw, 280px"
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper} style={{ position: "relative" }}>
            {" "}
            <Image
              src={whichIsBest}
              alt="Expert help illustration"
              sizes="(max-width: 280px) 100vw, 280px"
              className={styles.mainImage}
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
          <div className={styles.imageWrapper} style={{ position: "relative" }}>
            {" "}
            <Image
              src={build}
              alt="Migration illustration"
              fill
              sizes="(max-width: 280px) 100vw, 280px"
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ServicePageCards;
