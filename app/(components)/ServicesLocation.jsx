import React from "react";

import ServicesCard from "../../components/ServicesCard";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import CardIntersectionWrapper from "../../components/CardIntersectionWrapper";

import styles from "../../styles/services.module.css";

import vba from "../../public/microsoft/vbaNoBG.webp";
import custom from "../../public/microsoft/excelCustomNoBG.webp";
import formula from "../../public/microsoft/formulaNoBG.webp";
import addIns from "../../public/microsoft/addInsNoBG.webp";
import Link from "next/link";

const Services = ({ location }) => {
  return (
    <section className={styles.services}>
      <AnimateOnScroll animation="slide-left" delay={0} duration={1.5}>
        <div className={styles.content}>
          <div className={styles.subBox}>
            <p>
              Design, Development and Consulting
              <span> for Microsoft Excel Solutions</span>
            </p>
          </div>
          <h2>Microsoft Excel Services - {location}</h2>
          <p>
            Our reputation is built on delivering sophisticated spreadsheet
            solutions, <Link href="/excel-formulas-and-custom-formulas"> custom formula development </Link>, and comprehensive <Link href="/excel-support"> Excel
            support</Link>. With a growing list of satisfied clients, we take pride in
            offering expert implementation, tailored data analysis, and
            strategic guidance to meet diverse financial and operational
            challenges. Whether it's complex calculations, automated reports,
            interactive dashboards, or VBA macros you need, our 25+ years of
            Microsoft expertise ensures optimised, effective solutions that
            elevate your organisation's data capabilities.
          </p>
          <p>
            Working with a local Excel consultant brings the added advantage of
            understanding regional business requirements, faster response times
            and direct, face-to-face collaboration when needed. Based in{" "}
            {location}, we are well-positioned to provide both remote and onsite
            services, ensuring organisations receive timely, professional
            spreadsheet and reporting solutions from specialists who understand
            their unique data management challenges and industry-specific
            analytical needs.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-down" delay={0} duration={1.5}>
        <div className={styles.cards}>
          <CardIntersectionWrapper>
            <ServicesCard
              src={vba}
              alt={"VBA/Macro Development"}
              h3={"VBA/Macro Development"}
              li={[
                "Need experts in VBA/Macros to help automate tasks or extend Excel functionality?",
                "Our Australian experts each have at least 15 years' experience.",
              ]}
              link={"/vba-macro-development"}
              linkText={"VBA & Macros"}
            />
          </CardIntersectionWrapper>
          <CardIntersectionWrapper>
            <ServicesCard
              src={custom}
              alt={"Custom Design & Development"}
              h3={"Custom Design & Development"}
              li={[
                "Custom Workbook creation",
                "VBA/Macro Programming",
                "Professional advice from senior Australian experts",
                "Custom high-end Excel solutions",
              ]}
              link={"custom-design-and-development"}
              linkText={"Custom Development"}
            />
          </CardIntersectionWrapper>
          <CardIntersectionWrapper>
            <ServicesCard
              src={formula}
              alt={"Formulas"}
              h3={"Formulas"}
              li={[
                "Formula troubleshooting",
                "Complex formula coding",
                "Custom VBA formula setup",
                "Expert help with formulas, VBA or other built in functions.",
              ]}
              link={"/excel-formulas-and-custom-formulas"}
              linkText={"Formulas"}
            />
          </CardIntersectionWrapper>
          <CardIntersectionWrapper>
            <ServicesCard
              src={addIns}
              alt={"Add-In Development"}
              h3={"Add-In Development"}
              li={[
                "Add-in development for Excel and other Office products in VSTO?",
                "Macros setup on multiple computers for all Excel workbooks",
              ]}
              link={"/add-in-development"}
              linkText={"Add-Ins"}
            />
          </CardIntersectionWrapper>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Services;
