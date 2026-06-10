// app/services/excel/(components)/WhyChooseUs.jsx

import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/whyChoose.module.css";

// ── Accordion items — text unchanged from original ────────────────────────────
const faqs = [
  {
    num: "01",
    question: "25+ Years of Excel Expertise",
    answer:
      "With over two decades of experience serving Australian businesses, our team has developed deep expertise in all aspects of Microsoft Excel. We've tackled thousands of spreadsheet challenges across diverse industries, giving us the insight to deliver solutions that truly work.",
  },
  {
    num: "02",
    question: "Senior Consultants with 15+ Years Experience",
    answer:
      "Every consultant on our team brings a minimum of 15 years of professional Excel development experience. Our senior developers specialise in VBA programming, complex formula development, and creating sophisticated spreadsheet solutions that exceed client expectations.",
  },
  {
    num: "03",
    question: "Australia-wide Service",
    answer:
      "We provide Excel consulting services across all Australian states and territories. With consultants in major cities including Sydney, Melbourne, Brisbane, Perth, Adelaide, and Canberra, we offer both remote consulting and on-site services to meet your specific requirements.",
  },
  {
    num: "04",
    question: "Part of Office Experts Group",
    answer:
      "As part of the Office Experts Group, we provide seamless access to specialists across all Microsoft Office applications. When your Excel solution needs to integrate with Access databases, Word documents, PowerPoint presentations, or other Office tools, our broader team ensures complete compatibility.",
  },
  {
    num: "05",
    question: "Business-Focused Solutions",
    answer:
      "We don't just understand Excel technology - we understand business processes. Our consultants take time to learn your workflows, challenges, and objectives, delivering solutions that address real business needs rather than simply implementing technical features.",
  },
  {
    num: "06",
    question: "Quality Assurance & Ongoing Support",
    answer:
      "Every solution undergoes rigorous testing before deployment. We provide comprehensive documentation, user training, and ongoing support to ensure your Excel solutions continue to deliver value. Our commitment extends beyond project completion to long-term success.",
  },
];

const WhyChooseUs = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {/* ── Left column — intro content + SVG ── */}
      <AnimateOnScroll animation="fade-up" duration={0.65}>
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>Why Choose Us?</span>

          <h2 className={styles.heading}>
            Australia&rsquo;s Leading{" "}
            <span className={styles.headingAccent}>Excel Consultants</span>
          </h2>

          <p className={styles.body}>
            We provide high-quality Excel solutions and offer personalised
            customer service. We aim to exceed expectations and become your
            trusted Microsoft Experts. The Excel department of developers,
            programmers and consultants work closely alongside the entire{" "}
            <Link href="https://www.officeexperts.com.au">
              Office Experts Group
            </Link>{" "}
            to provide practical solutions across the Microsoft Office suite.
            From <Link href="/vba-macro-development">VBA automation</Link>,{" "}
            <Link href="/custom-design-and-development">
              custom development
            </Link>{" "}
            and comprehensive spreadsheet solutions, to{" "}
            <Link href="https://www.accessexperts.com.au">
              database integrations
            </Link>
            ,{" "}
            <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi">
              Power BI Dashboards
            </Link>{" "}
            and much more.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── Right column — numbered accordion ── */}
      <AnimateOnScroll animation="fade-up" duration={0.65} delay={0.12}>
        <div className={styles.rightCol}>
          {faqs.map(({ num, question, answer }) => (
            <details key={num} className={styles.item} name="why-choose-group">
              <summary className={styles.summary}>
                <span className={styles.itemNum}>{num}</span>
                <span className={styles.itemQuestion}>{question}</span>
                {/* Chevron — rotates via CSS [open] selector */}
                <span className={styles.chevron} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 6l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className={styles.answer}>
                <p className={styles.answerText}>{answer}</p>
              </div>
            </details>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default WhyChooseUs;
