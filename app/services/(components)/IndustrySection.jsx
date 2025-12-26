import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import manufacturing from "../../../public/manufacturing.webp";
import healthcare from "../../../public/healthcare.webp";
import retail from "../../../public/retail.webp";
import government from "../../../public/government.webp";
import financial from "../../../public/financial.webp";
import education from "../../../public/education.webp";
import construction from "../../../public/construction.webp";
import professional from "../../../public/professional.webp";

const IndustrySection = () => {
  const industries = [
    {
      title: "Financial Services & Accounting",
      description: "Complex financial modelling and reporting",
      detail:
        "Build sophisticated financial models, automate reconciliation processes, create dynamic reporting dashboards, and develop custom calculation tools for budgeting, forecasting and financial analysis that meet audit requirements and regulatory compliance.",
      image: financial,
    },
    {
      title: "Manufacturing & Logistics",
      description: "Production planning and inventory tracking",
      detail:
        "Streamline production scheduling, inventory management, supply chain analytics and quality control tracking with automated Excel solutions that integrate with ERP systems and provide real-time operational visibility and KPI dashboards.",
      image: manufacturing,
    },
    {
      title: "Healthcare & Medical",
      description: "Patient data analysis and resource planning",
      detail:
        "Manage patient data analysis, appointment scheduling, resource allocation, billing calculations and compliance reporting with secure Excel solutions designed for medical practices, clinics and healthcare organisations while maintaining data privacy.",
      image: healthcare,
    },
    {
      title: "Education & Training",
      description: "Student performance tracking and reporting",
      detail:
        "Track student performance, automate grade calculations, manage course scheduling, analyse attendance patterns and generate comprehensive reports for schools, universities and training organisations with custom Excel dashboards.",
      image: education,
    },
    {
      title: "Professional Services",
      description: "Time tracking and project profitability",
      detail:
        "Monitor billable hours, calculate project profitability, manage resource allocation, automate invoice generation and create client reporting dashboards for legal firms, consultancies and professional service providers.",
      image: professional,
    },
    {
      title: "Government & Public Sector",
      description: "Budget management and compliance reporting",
      detail:
        "Deliver secure Excel solutions for government departments managing budget allocations, grant tracking, compliance reporting, data analysis and interdepartmental reporting requirements while meeting strict security and audit standards.",
      image: government,
    },
    {
      title: "Retail & E-commerce",
      description: "Sales analysis and inventory optimisation",
      detail:
        "Analyse sales trends, optimise inventory levels, track supplier performance, calculate margins, forecast demand and create automated reporting dashboards that integrate with point-of-sale and e-commerce systems.",
      image: retail,
    },
    {
      title: "Construction & Engineering",
      description: "Project costing and resource scheduling",
      detail:
        "Manage project costing, resource scheduling, materials tracking, subcontractor payments, progress reporting and budget forecasting with robust Excel solutions built for the construction and engineering sectors.",
      image: construction,
    },
  ];

  return (
    <section
      className={styles.pageSegment}
      id="industries"
      style={{
        padding: "6rem 0 0 0",
        scrollMarginTop: "100px",
        margin: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={styles.content}
      >
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2
              style={{
                fontSize: "2rem",
                textAlign: "center",
                padding: "0 1rem",
              }}
            >
              Industry-Specific Solutions
            </h2>
          </div>
          <p
            style={{
              maxWidth: "100vw",
              textAlign: "center",
              padding: "0 10vw",
            }}
          >
            Our Excel consultants bring deep industry knowledge and cross-sector
            expertise to every project. Our solutions cover diverse industries
            throughout Australia, understanding the unique data analysis
            requirements, reporting needs and automation challenges each sector
            faces.
          </p>
        </AnimateOnScroll>

        <div className={styles.useCases}>
          {industries.map((industry, index) => (
            <AnimateOnScroll
              key={index}
              animation="slide-left"
              duration={1}
              delay={0.2}
            >
              <div className={styles.gridHolder}>
                <Image
                  src={industry.image}
                  width={150}
                  height={150}
                  alt={`${industry.title} icon`}
                />
                <div>
                  <h3 style={{ color: "#046999" }}>{industry.title}</h3>
                  <p style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
                    {industry.description}
                  </p>
                  <p style={{ color: "#777a7e" }}>{industry.detail}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
