import React from "react";
import Image from "next/image";
import styles from "../styles/testimonialsCard.module.css";

const TestimonialCard = ({ content, name, contact, image }) => {
  if (!image || !image.src) {
    return (
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <p>&quot;{content}&quot;</p>
          {/* Placeholder or empty div for consistency */}
          <div className={styles.imageWrapper}></div>
        </div>
        <h4>{name}</h4>
        <h5>{contact}</h5>
      </div>
    );
  }

  // Ensure width and height are numbers and have valid values
  const width = typeof image.width === "number" ? image.width : 100;
  const height = typeof image.height === "number" ? image.height : 100;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <p>&quot;{content}&quot;</p>
        <div className={styles.imageWrapper}>
          <Image
            src={image.src}
            alt={`${contact}'s logo`}
            width={width}
            height={height}
            priority={false}
            sizes="150px"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      <h4>{name}</h4>
      <h5>{contact}</h5>
    </div>
  );
};

export default TestimonialCard;
