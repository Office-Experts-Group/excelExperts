import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/howWeWork.module.css";

import magnify from "../../../public/magnify.webp";
import pencils from "../../../public/pencils.webp";
import gears from "../../../public/gears.webp";
import rocket from "../../../public/rocket.webp";
import support from "../../../public/supportIcon.webp";
import analysis from "../../../public/analysis.webp";
import testing from "../../../public/testing.webp";

const HowWeWork = () => {
  const steps = [
    {
      icon: magnify,
      title: "Discovery",
      subtitle: "Understanding Your Needs",
      description:
        "We begin by listening. Our consultants meet with your team to understand your business processes, spreadsheet challenges and objectives. We identify inefficiencies in your current workflows, discuss your vision for automation, and establish clear project goals that align with your business strategy.",
    },
    {
      icon: analysis,
      title: "Analysis",
      subtitle: "Requirements and Feasibility Assessment",
      description:
        "We conduct thorough analysis of your requirements, evaluating technical feasibility, data sources and system integration needs. Our team assesses whether Excel is the optimal solution or if alternative technologies better suit your needs, providing honest recommendations based on factors like data volume, complexity and scalability requirements.",
    },
    {
      icon: pencils,
      title: "Design",
      subtitle: "Solution Architecture and Planning",
      description:
        "With requirements defined, we architect your Excel solution. This includes designing spreadsheet structure, planning formulas and calculations, mapping VBA automation workflows, and creating detailed specifications. We present mockups and prototypes for your review, ensuring the design meets your needs before development begins.",
    },
    {
      icon: gears,
      title: "Development",
      subtitle: "Building Your Solution",
      description:
        "Our developers bring the design to life, building custom formulas, VBA macros, user forms, pivot tables and dashboards. We follow coding best practices, implement robust error handling, and build with future maintenance in mind. Throughout development, we maintain regular communication, providing progress updates and incorporating your feedback.",
    },
    {
      icon: testing,
      title: "Testing",
      subtitle: "Quality Assurance and Validation",
      description:
        "Rigorous testing ensures your Excel solution performs flawlessly. We conduct functional testing of all features, validate calculation accuracy, test edge cases and error scenarios, and verify integration with other systems. We involve your team in user acceptance testing, addressing any issues before deployment.",
    },
    {
      icon: rocket,
      title: "Deployment",
      subtitle: "Implementation and Rollout",
      description:
        "We manage the deployment process carefully, whether implementing a new solution or upgrading an existing one. This includes data migration, template distribution, add-in installation, and integration with your IT environment. We can stage rollouts to minimise disruption or implement comprehensive system-wide deployment based on your preferences.",
    },
    {
      icon: support,
      title: "Support",
      subtitle: "Ongoing Maintenance and Training",
      description:
        "Our relationship doesn't end at deployment. We provide comprehensive training for your team, create detailed documentation and user guides, and offer ongoing support to ensure long-term success. Whether you need ad-hoc assistance or a comprehensive maintenance agreement, we're here to help your Excel solutions evolve with your business.",
    },
  ];

  return (
    <section className={styles.pageSegment}>
      <div className={styles.underline}>
        <h2>How We Work</h2>
      </div>
      <div className={styles.ourProcess}>
        {steps.map((step, index) => (
          <AnimateOnScroll
            key={index}
            animation="slide-up"
            duration={1}
            delay={0.1 * index}
          >
            <div className={styles.flexHolder}>
              <Image
                src={step.icon}
                width={100}
                height={100}
                alt={step.title}
              />
              <div>
                <h3>{step.title}</h3>
                <h4>{step.subtitle}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
