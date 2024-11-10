"use client";

import React, { useState } from "react";
import styles from "../../../styles/videoSegment.module.css";

const VideoSegment = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoURL = "https://player.vimeo.com/video/294497327?h=c55bd1bb94";

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <p className={styles.subtitle}>Watch a Demo</p>
        <h2 className={styles.title}>Excel Custom Formulas</h2>
      </div>

      <div className={styles.videoWrapper}>
        {isLoading && (
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
          </div>
        )}

        <iframe
          src={videoURL}
          className={styles.iframe}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Excel Custom Formulas Demo"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </section>
  );
};

export default VideoSegment;
