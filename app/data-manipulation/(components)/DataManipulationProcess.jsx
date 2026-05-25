// app/data-manipulation/(components)/DataManipulationProcess.jsx

import Link from "next/link";
import styles from "../../../styles/dataManipulationProcess.module.css";

// Four-step engagement process as described in the outline
const steps = [
  {
    num: "01",
    heading: "Scoping the problem",
    body: "We start by understanding exactly what you're working with. Beginning with the data sources your using, how the current process runs, and talking with you about what you would like to achieve.",
  },
  {
    num: "02",
    heading: "Choosing the right tool",
    body: "Depending on your data sources, Excel version, and how often the process runs, the answer might be Power Query, VBA, a SQL connection, or a combination. Sometimes we call on our power platform experts for really powerful dashboards and automated systems.",
  },
  {
    num: "03",
    heading: "Building and testing",
    body: "The solution is built into your system. We test against edge cases, look for potential pain points and push the changes to production without disrupting your existing workflow.",
  },
];

const DataManipulationProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>How We Work</span>
          <h2 className={styles.heading}>
            What it's like to work with Office Experts.
          </h2>
          <p className={styles.body}>
            The best outcomes are achieved by at first working together to
            understand the problem, discussing your options, and scoping the
            most cost effective yet scalable solution.
          </p>
          <p className={styles.body}>
            Projects only fail when scope isn't clear, or when the solution is
            built in isolation from the rest of your day to day operations. Our
            process is designed to prevent both.
          </p>
          <Link href="/contact-us/request-a-quote" className={styles.cta}>
            Start a conversation
          </Link>
        </div>

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.num} className={styles.step}>
              <span className={styles.stepNum}>{step.num}</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepHeading}>{step.heading}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default DataManipulationProcess;
