// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// import styles from "../../styles/hero.module.css";

// import handShake from "../../public/hero/handShake.webp";
// import graph from "../../public/hero/graph.webp";
// import shapeLeft from "../../public/hero/shapeLeft.png";
// import shapeRight from "../../public/hero/shapeRight.webp";
// import calcMob from "../../public/hero/calcMob.webp";
// import codeMob from "../../public/hero/codeMob.webp";

// const Hero = () => {
//   return (
//     <section className={styles.heroSection}>
//       <div className={styles.slider}>
//         <div className={styles.slide}>
//           <Image
//             src={handShake}
//             alt="Office environment"
//             className={`${styles.slideImage} ${styles.desk}`}
//             priority
//             height={1920}
//             width={1080}
//           />
//           <Image
//             src={calcMob}
//             alt="calculator on a desk"
//             className={`${styles.slideImage} ${styles.mob}`}
//             priority
//             height={700}
//             width={450}
//           />
//         </div>
//         <div className={styles.slide}>
//           <Image
//             src={graph}
//             alt="Document design"
//             className={styles.slideImage}
//             height={1920}
//             width={1080}
//           />
//           <Image
//             src={codeMob}
//             alt="computer code on a screen"
//             className={`${styles.slideImage} ${styles.mob}`}
//             priority
//             height={700}
//             width={450}
//           />
//         </div>
//       </div>

//       <Image
//         src={shapeLeft}
//         alt="shape icon"
//         className={`${styles.shape} ${styles.shapeLeft}`}
//         width={378}
//         height={371}
//         priority
//       />
//       <Image
//         src={shapeRight}
//         alt="shape icon"
//         className={`${styles.shape} ${styles.shapeRight}`}
//         width={327}
//         height={317.5}
//         priority
//       />

//       <div className={styles.content}>
//         <div className={styles.subHead}>
//           <div className={styles.bar}></div>
//           <div className={styles.headingWrapper}>
//             <h4 className={styles.heading1}>
//               Microsoft Development and Consulting
//             </h4>
//             <h4 className={styles.heading2}>
//               With over 25 years of experience...
//             </h4>
//           </div>
//         </div>
//         <h1>
//           Excel<br></br>Experts
//         </h1>
//         <Link href="/custom-design-and-development" className="btn">
//           Discover More
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/hero.module.css";

// Import images directly
import meeting from "../../public/hero/meeting.webp";
import graph from "../../public/hero/graph.webp";
import shapeLeft from "../../public/hero/shapeLeft.png";
import shapeRight from "../../public/hero/shapeRight.webp";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <Image
            src={meeting}
            alt="Office environment"
            className={styles.slideImage}
            priority
            fill
            sizes="100vw"
            placeholder="blur"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src={graph}
            alt="Document design"
            className={styles.slideImage}
            priority
            fill
            sizes="100vw"
            placeholder="blur"
          />
        </div>
      </div>

      <div className={styles.shapes}>
        <Image
          src={shapeLeft}
          alt="Decorative shape"
          className={`${styles.shape} ${styles.shapeLeft}`}
          width={378}
          height={371}
          priority
          placeholder="blur"
        />
        <Image
          src={shapeRight}
          alt="Decorative shape"
          className={`${styles.shape} ${styles.shapeRight}`}
          width={327}
          height={317.5}
          priority
          placeholder="blur"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.subHead}>
          <div className={styles.bar}></div>
          <div className={styles.headingWrapper}>
            <h4 className={styles.heading1}>
              Microsoft Development and Consulting
            </h4>
            <h4 className={styles.heading2}>
              With over 25 years of experience...
            </h4>
          </div>
        </div>
        <h1>
          Excel
          <br />
          Experts
        </h1>
        <Link href="/custom-design-and-development" className="btn">
          Discover More
        </Link>
      </div>
    </section>
  );
};

export default Hero;
