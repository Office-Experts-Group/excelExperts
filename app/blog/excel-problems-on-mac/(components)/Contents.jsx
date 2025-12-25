"use client";
import React, { useState } from "react";
import styles from "../../../../styles/contentsComponent.module.scss";

const Contents = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div
      className={`${styles.blogContents}`}
      style={isHidden ? {} : { right: "0", top: "15vh" }}
    >
      {isHidden ? (
        <button onClick={() => setIsHidden(false)}>Contents</button>
      ) : (
        <div
          className={`${styles.blogContentsPanel} ${
            !isHidden ? styles.blogPanelVisible : ""
          }`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="2.5em"
            width="2.5em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsHidden(true)}
          >
            <path d="M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z"></path>
            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
          </svg>
          <h3>Quick Pick</h3>
          <a onClick={() => setIsHidden(true)} href="#problem-1">
            <div className={styles.contentLink}>
              <p>Excel Won't Open or Crashes</p>
            </div>
          </a>
          <a onClick={() => setIsHidden(true)} href="#problem-2">
            <div className={styles.contentLink}>
              <p>Excel Freezing or Slow</p>
            </div>
          </a>
          <a onClick={() => setIsHidden(true)} href="#problem-3">
            <div className={styles.contentLink}>
              <p>"Upgrade Required" Error</p>
            </div>
          </a>
          <a onClick={() => setIsHidden(true)} href="#problem-4">
            <div className={styles.contentLink}>
              <p>Files Won't Open Error</p>
            </div>
          </a>
          <a onClick={() => setIsHidden(true)} href="#problem-5">
            <div className={styles.contentLink}>
              <p>Opening Wrong Files</p>
            </div>
          </a>
          <a onClick={() => setIsHidden(true)} href="#problem-6">
            <div className={styles.contentLink}>
              <p>Solver Add-in Issues</p>
            </div>
          </a>
          <a onClick={() => setIsHidden(true)} href="#problem-7">
            <div className={styles.contentLink}>
              <p>Selection Issues After Update</p>
            </div>
          </a>
          <a onClick={() => setIsHidden(true)} href="#problem-8">
            <div className={styles.contentLink}>
              <p>Installation Error</p>
            </div>
          </a>
          <a onClick={() => setIsHidden(true)} href="#problem-9">
            <div className={styles.contentLink}>
              <p>Keyboard Shortcuts Not Working</p>
            </div>
          </a>
          <a onClick={() => setIsHidden(true)} href="#problem-10">
            <div className={styles.contentLink}>
              <p>Windows Files Compatibility</p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Contents;
