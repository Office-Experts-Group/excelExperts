// import React from "react";
// import Image from "next/image";
// import PropTypes from "prop-types";

// import styles from "../styles/testimonialsCard.module.css";

// const TestimonialCard = ({ content, name, contact, image }) => {
//   // Add defensive check
//   if (!image || typeof image !== "object") {
//     console.error("Invalid image prop:", image);
//     return null;
//   }

//   return (
//     <div className={styles.cardWrapper}>
//       <div className={styles.card}>
//         <p>&quot;{content}&quot;</p>
//         <div className={styles.imageWrapper}>
//           <Image
//             src={image.src}
//             alt={`${contact}'s logo`}
//             width={image.width}
//             height={image.height}
//           />
//         </div>
//       </div>
//       <h4>{name}</h4>
//       <h5>{contact}</h5>
//     </div>
//   );
// };

// TestimonialCard.propTypes = {
//   content: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   contact: PropTypes.string.isRequired,
//   image: PropTypes.shape({
//     src: PropTypes.string.isRequired,
//     width: PropTypes.number.isRequired,
//     height: PropTypes.number.isRequired,
//   }),
// };

// export default TestimonialCard;

import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "../styles/testimonialsCard.module.css";

const TestimonialCard = ({ content, name, contact, image }) => {
  console.log(`Rendering testimonial for: ${name}`, {
    hasImage: !!image,
    imageProps: image
      ? {
          src: !!image.src,
          width: image.width,
          height: image.height,
        }
      : null,
  });

  if (!image || !image.src) {
    console.warn(`Missing image for testimonial from ${name}`);
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

TestimonialCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

export default TestimonialCard;
