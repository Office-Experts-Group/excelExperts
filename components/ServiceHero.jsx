import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import styles from "../styles/serviceHero.module.css";

import thirdParty from "../public/pageHeros/3rdParty.webp";

const ServiceHero = ({ title }) => {
  return (
    <section className={styles.serviceHero} style={{ position: "relative" }}>
      <Image
        src={thirdParty}
        alt="A person helping somebody"
        fill
        sizes="100vw"
        priority
        style={{ objectFit: "cover" }}
      />
      <h1>{title}</h1>
    </section>
  );
};

export default ServiceHero;

ServiceHero.propTypes = {
  title: PropTypes.string.isRequired,
};
