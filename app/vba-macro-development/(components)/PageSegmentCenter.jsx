import React from "react";
import Image from "next/image";

import styles from "../../../styles/pageSegmentCenter.module.scss";

import blueCode from "../../../public/blueCode600x400.webp";
import codeReview from "../../../public/codeReview450x300.webp";

const PageSegmentCenter = () => {
  const vbaServices = [
    {
      title: "Form Creation",
      content: "Transform data collection and user interaction with custom-built VBA forms. Our experts design intuitive interfaces that simplify complex processes, validate inputs in real-time, and seamlessly integrate with your Excel workflows."
    },
    {
      title: "Customising Toolbars",
      content: "Streamline your Excel experience with personalised toolbars and ribbons tailored to your specific needs. We create custom interfaces that place your most-used functions just one click away, reducing training time and increasing efficiency."
    },
    {
      title: "Automation of Common or Repetitive Tasks",
      content: "Eliminate tedious manual work with powerful VBA automation. Our macros can transform hours of repetitive data entry, formatting, and reporting into processes that run with a single click."
    },
    {
      title: "Linking to External Data, 3rd Party Software and Databases",
      content: "Connect your Excel workbooks to external data sources including SQL databases, Access, SharePoint, Dataverse, text files, and Microsoft and third-party applications. Our VBA solutions create seamless data pipelines that keep your spreadsheets updated with the latest information."
    },
    {
      title: "Web-Based Data Retrieval",
      content: "Harness the power of the internet directly from your Excel workbooks. Our VBA programmers develop solutions that automatically extract data from websites, APIs, and online services, bringing critical information into your spreadsheets without manual copying and pasting."
    },
    {
      title: "User Validation",
      content: "Protect your data integrity with sophisticated validation systems. We implement multi-level validation checks that prevent errors before they occur, guide users through complex processes, and ensure consistency across your organisation's spreadsheets."
    },
    {
      title: "Automatic Creation of Charts, Pivot Tables and Reports",
      content: "Transform raw data into actionable insights with automated reporting tools. Generate complex charts, pivot tables, and formatted reports on demand or on schedule. We design systems that produce consistent, professional outputs ready for presentation or distribution."
    },
    {
      title: "Sorting and Manipulating Data",
      content: "Handle large datasets with ease through custom VBA data processing. Our solutions efficiently clean, sort, filter, and transform data according to your business requirements. We develop specialized algorithms for complex data manipulation tasks that would be impossible with standard Excel functions."
    }
  ];

  return (
    <section className={`${styles.dropdowns}`}
    style={{ margin: "0 10vw"}}>
      <div>
        <h2>What VBA Can Do For You!</h2>
        <div className={styles.servicesList}>
          {vbaServices.map((service, index) => (
              <details 
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
                <div className={styles.serviceContent}>
                  <p>{service.content}</p>
                </div>
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