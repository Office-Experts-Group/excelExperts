import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/whyChoose.module.css";

import semi from "../../../public/shapes/semi600x600.webp";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

const WhyChooseUs = () => {
  const faqs = [
    {
      question: "25+ Years of Excel Expertise",
      answer:
        "With over two decades of experience serving Australian businesses, our team has developed deep expertise in all aspects of Microsoft Excel. We've tackled thousands of spreadsheet challenges across diverse industries, giving us the insight to deliver solutions that truly work.",
    },
    {
      question: "Senior Consultants with 15+ Years Experience",
      answer:
        "Every consultant on our team brings a minimum of 15 years of professional Excel development experience. Our senior developers specialise in VBA programming, complex formula development, and creating sophisticated spreadsheet solutions that exceed client expectations.",
    },
    {
      question: "Australia-wide Service",
      answer:
        "We provide Excel consulting services across all Australian states and territories. With consultants in major cities including Sydney, Melbourne, Brisbane, Perth, Adelaide, and Canberra, we offer both remote consulting and on-site services to meet your specific requirements.",
    },
    {
      question: "Part of Office Experts Group",
      answer:
        "As part of the Office Experts Group, we provide seamless access to specialists across all Microsoft Office applications. When your Excel solution needs to integrate with Access databases, Word documents, PowerPoint presentations, or other Office tools, our broader team ensures complete compatibility.",
    },
    {
      question: "Business-Focused Solutions",
      answer:
        "We don't just understand Excel technology - we understand business processes. Our consultants take time to learn your workflows, challenges, and objectives, delivering solutions that address real business needs rather than simply implementing technical features.",
    },
    {
      question: "Quality Assurance & Ongoing Support",
      answer:
        "Every solution undergoes rigorous testing before deployment. We provide comprehensive documentation, user training, and ongoing support to ensure your Excel solutions continue to deliver value. Our commitment extends beyond project completion to long-term success.",
    },
  ];

  return (
    <section className={styles.whyChoose}>
      <Image
        src={semi}
        alt="Semi Circle"
        height={900}
        width={900}
        className={styles.semi}
      />
      <AnimateOnScroll animation="fade-up-right" delay={0} duration={1.5}>
        <div className={styles.content}>
          <p>Why Choose Us?</p>
          <h2>Australia's Leading Excel Consultants</h2>
          <p>
            We provide high-quality Excel solutions and offer personalised
            customer service. We aim to exceed expectations and become your
            trusted Microsoft Experts, The Excel department of developers,
            programmers and consultants work closely alongside the entire{" "}
            <Link href="https://www.officeexperts.com.au">
              Office Experts Group
            </Link>{" "}
            to provide practical solutions across the Microsoft Office suite.
            From <Link href={"/vba-macro-development"}>VBA automation</Link>,{" "}
            <Link href={"/custom-design-and-development"}>
              custom development{" "}
            </Link>
            and comprehensive spreadsheet solutions, to
            <Link href={"https://www.accessexperts.com.au"}>
              {" "}
              database integrations
            </Link>
            ,
            <Link
              href={
                "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi"
              }
            >
              {" "}
              Power BI Dashboards
            </Link>{" "}
            and much more .
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="slide-right" delay={0} duration={1.5}>
        <div className={styles.dropdowns}>
          <div className={styles.faqContainer} role="group">
            {faqs.map(({ question, answer }, index) => (
              <details
                key={`faq-${index}`}
                className={styles.faqItem}
                name="faq-group"
              >
                <summary>
                  <p className={styles.questionText}>{question}</p>
                </summary>
                <div className={styles.faqContent}>
                  <p>{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default WhyChooseUs;
