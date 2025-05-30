import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../../styles/pageSegment2.module.css";

import tableWithCharts from "../../../public/tableWithCharts770x430.webp";

const SegmentMainCopy = () => {
  return (
    <section className={styles.pageSegmentReverse}>
      <div className={styles.contents}>
        <h3>Our Services</h3>
        <Link href="/vba-macro-development">
          <div className={styles.contentLink}>
            <p>VBA Programming</p>
          </div>
        </Link>
        <Link href="/">
          <div className={styles.contentLink}>
            <p>Microsoft Excel</p>
          </div>
        </Link>
        <div
          className={styles.contentLink}
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <Link href="https://www.officeexperts.com.au/services/microsoft-office-365">
            <p>Office 365</p>
          </Link>
          <p>/</p>
          <Link href="https://www.officeexperts.com.au/services/by-business-solution/online-solutions">
            <p>SharePoint</p>
          </Link>
        </div>
        <Link href="https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure">
          <div className={styles.contentLink}>
            <p>Microsoft Azure</p>
          </div>
        </Link>
        <Link href="https://www.accessexperts.com.au">
          <div className={styles.contentLink}>
            <p>Microsoft Access</p>
          </div>
        </Link>
        <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi">
          <div className={styles.contentLink}>
            <p>Power BI</p>
          </div>
        </Link>
        <Link href="https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions">
          <div className={styles.contentLink}>
            <p>Microsoft Outlook</p>
          </div>
        </Link>
        <Link href="https://www.officeexperts.com.au/services/microsoft-dot-net">
          <div className={styles.contentLink}>
            <p>VB.NET</p>
          </div>
        </Link>
        <Link href="https://www.wordexperts.com.au">
          <div className={styles.contentLink}>
            <p>Microsoft Word</p>
          </div>
        </Link>
        <Link href="https://www.officeexperts.com.au/services/microsoft-dot-net">
          <div className={styles.contentLink}>
            <p>C#.NET</p>
          </div>
        </Link>
        <Link href="https://www.officeexperts.com.au/services/microsoft-powerpoint">
          <div className={styles.contentLink}>
            <p>Microsoft PowerPoint</p>
          </div>
        </Link>
      </div>

      <Image
        src={tableWithCharts}
        alt="lady in an office environment"
        width={770}
        height={430}
      />

      <div className={styles.info}>
        <h2>We Are Integration Experts!</h2>
        <p>
          Our team excels at integrating Microsoft technologies to create
          smooth, cohesive workflows. We maximise the potential of your systems,
          ensuring that everything from data management to reporting works
          efficiently and effectively.
        </p>
        <p>
          We specialise in seamlessly connecting your Microsoft applications
          with third-party platforms, creating a unified ecosystem that enhances
          productivity and reduces manual work. By leveraging automation and
          smart integration, we simplify complex processes and ensure your data
          flows effortlessly between systems, giving you more time to focus on
          what truly matters. Your Business.
        </p>
      </div>
    </section>
  );
};

export default SegmentMainCopy;
