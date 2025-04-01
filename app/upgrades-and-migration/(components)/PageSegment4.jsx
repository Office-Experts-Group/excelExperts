import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import ladyComputer from "../../../public/ladyComputer600x400.webp";
import Link from "next/link";

const PageSegment4 = () => {


  return (
    <div
      style={{ margin: "6rem 0 2rem 0", scrollMarginTop: "150px" }}
      id="migrating-away"
    >
      <div className={styles.pageSegmentCenter}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>Migrating Away From Excel?</h2>
            </div>
            <p>Excel is a fantastic tool, but it's not a one-size-fits-all solution. Over time, many businesses find their workbooks becoming sluggish and unmanageable, leading to lost productivity and frustration. Others realise that Excel simply isn't built for the complexity of their operations, yet they've relied on it for too long. Some even use it as a database, a practice that introduces serious risks, from data corruption, multi-user issues, and compliance issues.</p>

            <p>If any of this sounds familiar, it's time to rethink your approach. We've helped businesses of all sizes move beyond Excel to smarter, more efficient systems that scale with their growth in many Microsoft technologies.</p>

            <p>Ready to explore better alternatives? Our team also specialises in Microsoft Power Platform solutions including <Link href={"https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi"}> Power BI</Link> for robust data visualization, <Link href={"https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps"}>Power Apps</Link> for custom business applications, and <Link href={"https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate"}>Power Automate</Link> for streamlined workflows. For more complex data management needs, we offer expertise in <Link href={"https://www.accessexperts.com.au"}>Microsoft Access</Link> for database development and SharePoint implementation. These powerful platforms can transform how your business handles data while maintaining seamless integration with your existing Microsoft ecosystem.</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={ladyComputer}
              alt="lady with computer"
              width={600}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;
