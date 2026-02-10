import React from "react";

import styles from "../../styles/locationSummary.module.scss";

const LocationSummary = ({ location, service }) => {
  return (
    <div className={styles.summary}>
      <div>
        <strong>Summary:</strong>
        <h2>
          Who are {service} Consultants in {location}?
        </h2>
      </div>

      <p>
        Our Excel experts provide businesses in {location} with professional
        spreadsheet solutions, custom formula development, and support services
        tailored to your specific needs. Our local team of Microsoft-certified
        Excel specialists offer expertise in add-in development, data analysis,
        VBA macro automation, and interactive dashboard creation.
      </p>
    </div>
  );
};

export default LocationSummary;
