// app/about-us/(components)/GoodToKnow.jsx

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import { AustralasiaMapSvg } from "../(svgs)/AustralasiaMapSvg";
import styles from "../../../styles/goodToKnow.module.css";

const GoodToKnow = () => {
  return (
    <section className={styles.section}>
      {/* ── Section header ── */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>Good To Know</span>
        <h2 className={styles.heading}>
          National reach.{" "}
          <span className={styles.headingAccent}>Local presence.</span>
        </h2>
      </div>

      <div className={styles.body}>
        {/* Content panel */}
        <div className={styles.contentPanel}>
          {/* Paragraphs — text unchanged from original */}
          <p className={styles.para}>
            Our Head Office is situated in northern New South Wales with
            consultants in Sydney, Melbourne, Canberra, Brisbane and Perth. We
            service the whole of Australia and New Zealand, with our clients
            ranging from multi-national corporations to small businesses.
          </p>

          <p className={styles.para}>
            Through a combination of remote access and on-site service, we give
            our clients dedicated attention and support across the Australasia
            region. Location is not an obstacle as remote access allows us to
            hold meetings and offer quick and cost effective support.
          </p>

          {/* Remote-service callout strip */}
          <div className={styles.remoteStrip}>
            <div className={styles.remoteIcon} aria-hidden="true">
              {/* Simple signal/broadcast icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12.5a9.5 9.5 0 0 1 14 0" />
                <path d="M8.5 16a5.5 5.5 0 0 1 7 0" />
                <circle cx="12" cy="19.5" r="1" fill="currentColor" />
              </svg>
            </div>
            <p className={styles.remoteText}>
              Remote access means <strong>no travel delays</strong>. We can join
              your team anywhere in Australia or New Zealand within minutes.
            </p>
          </div>
        </div>

        {/* Map panel */}
        <div className={styles.mapPanel} aria-hidden="true">
          <AustralasiaMapSvg />
        </div>
      </div>
    </section>
  );
};

export default GoodToKnow;
