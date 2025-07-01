import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../../styles/pageSegmentCenter.module.scss";

import blueCode from "../../../public/blueCode600x400.webp";
import codeReview from "../../../public/codeReview450x300.webp";

const PageSegmentCenter = () => {
  const vbaServices = [
    {
      title: "Form Creation",
      content: (
        <p>
          Transform data collection and user interaction with custom-built VBA
          forms. Our experts design intuitive interfaces that simplify complex
          processes, validate inputs in real-time, and seamlessly integrate with
          your Excel workflows.
        </p>
      ),
    },
    {
      title: "Customising Toolbars",
      content: (
        <p>
          Streamline your Excel experience with personalised toolbars and
          ribbons tailored to your specific needs. We create custom interfaces
          that place your most-used functions just one click away, reducing
          training time and increasing efficiency.
        </p>
      ),
    },
    {
      title: "Automation of Common or Repetitive Tasks",
      content: (
        <p>
          Eliminate tedious manual work with powerful VBA automation. Our macros
          can transform hours of repetitive data entry, formatting, and
          reporting into processes that run with a single click.
        </p>
      ),
    },
    {
      title: "Linking to External Data, 3rd Party Software and Databases",
      content: (
        <p>
          Connect your Excel workbooks to external data sources including SQL
          databases, Access, SharePoint, Dataverse, text files, and Microsoft
          and third-party applications. Our VBA solutions create seamless data
          pipelines that keep your spreadsheets updated with the latest
          information.
        </p>
      ),
    },
    {
      title: "Web-Based Data Retrieval",
      content: (
        <p>
          Harness the power of the internet directly from your Excel workbooks.
          Our VBA programmers develop solutions that automatically extract data
          from websites, APIs, and online services, bringing critical
          information into your spreadsheets without manual copying and pasting.
        </p>
      ),
    },
    {
      title: "User Validation",
      content: (
        <p>
          Protect your data integrity with sophisticated validation systems. We
          implement multi-level validation checks that prevent errors before
          they occur, guide users through complex processes, and ensure
          consistency across your organisation's spreadsheets.
        </p>
      ),
    },
    {
      title: "Automatic Creation of Charts, Pivot Tables and Reports",
      content: (
        <p>
          Transform raw data into actionable insights with automated reporting
          tools.{" "}
          <Link
            href="/pivot-tables-charts-and-reporting-solutions"
            style={{ color: "#046999", fontWeight: "700" }}
          >
            Generate complex charts, pivot tables
          </Link>
          , and formatted reports on demand or on schedule. We design systems
          that produce consistent, professional outputs ready for presentation
          or distribution.
        </p>
      ),
    },
    {
      title: "Sorting and Manipulating Data",
      content: (
        <p>
          Handle large datasets with ease through custom VBA data processing.
          Our solutions efficiently clean, sort, filter, and transform data
          according to your business requirements. We develop specialized
          algorithms for complex data manipulation tasks that would be
          impossible with standard Excel functions.
        </p>
      ),
    },
  ];

  return (
    <section className={`${styles.dropdowns}`} style={{ margin: "0 10vw" }}>
      <div>
        <h2>What VBA Can Do For You!</h2>
        <div className={styles.servicesList}>
          {vbaServices.map((service, index) => (
            <details
              key={index}
              className={styles.serviceDetails}
              open={index === 0}
            >
              <summary className={styles.serviceSummary}>
                <div className={styles.summaryContent}>
                  <div className={styles.tick}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                    </svg>
                  </div>
                  <span className={styles.serviceTitle}>{service.title}</span>
                </div>
              </summary>
              <div className={styles.serviceContent}>{service.content}</div>
            </details>
          ))}
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={blueCode}
          alt="digital futuristic design of someone coding"
          width={300}
          height={200}
        />
        <Image
          src={codeReview}
          alt="Two people reviewing some computer code"
          width={300}
          height={200}
        />
      </div>
    </section>
  );
};

export default PageSegmentCenter;
