// app/services/excel/upgrades-and-migration/(components)/MigrateAway.jsx

import Link from "next/link";
import styles from "../../../styles/migrateAway.module.scss";

import { MigrationMapSvg } from "../(svgs)/MigrationMapSvg";

const MigrateAway = () => {
  return (
    <section className={styles.section} id="migrating-away">
      <div className={styles.inner}>
        {/* ── Left: content ── */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>Migrating away from Excel?</span>
          <h2 className={styles.heading}>
            When Excel is the <span className={styles.accent}>wrong tool</span>{" "}
            for the job
          </h2>

          <p className={styles.body}>
            Excel is a fantastic tool, but it's not a one-size-fits-all
            solution. Over time, you may find that you need more powerful
            visualisations, dashboards or cloud based engagements.
          </p>
          <p className={styles.body}>
            Some have spent years using Excel as a database, an easy trap to
            fall in that introduces serious risks, from data corruption,
            multi-user issues, and finally a complete collapse.
          </p>
          <p className={styles.body}>
            If any of this sounds familiar, it's probably time to rethink your
            approach. With a team spanning across all Microsoft technologies, we
            help businesses move beyond Excel to utilise the full potential of a
            license they are already paying for.
          </p>

          <div className={styles.links}>
            <Link
              href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi"
              className={styles.link}
            >
              <span className={styles.linkDot} />
              Power BI for data visualisation
            </Link>
            <Link
              href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps"
              className={styles.link}
            >
              <span className={styles.linkDot} />
              Power Apps for custom applications
            </Link>
            <Link
              href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate"
              className={styles.link}
            >
              <span className={styles.linkDot} />
              Power Automate for workflows
            </Link>
            <Link
              href="https://www.accessexperts.com.au"
              className={styles.link}
            >
              <span className={styles.linkDot} />
              Microsoft Access for database development
            </Link>
          </div>

          <Link href="#contact" className={styles.cta}>
            Explore the alternatives
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* ── Right: migration map SVG ── */}
        <div className={styles.visual}>
          <MigrationMapSvg />
        </div>
      </div>
    </section>
  );
};

export default MigrateAway;
