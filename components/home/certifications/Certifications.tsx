import { SectionHeader } from "@/components/utils/SectionHeader";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./certifications.module.scss";

export const Certifications = () => {
  return (
    <section className="section-wrapper" id="certifications">
      <SectionHeader title="Certifications" dir="r" />
      <div className={styles.certifications}>
        {certificationsList.map((cert, index) => (
          <Reveal key={index}>
            <div className={styles.certification}>
              <div className={styles.certHeader}>
                <h3>{cert.name}</h3>
                <span>{cert.issuer}</span>
              </div>
              <p>{cert.date}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certLink}>
                  View Certificate
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

const certificationsList = [
  {
    name: "DP-100: Azure Data Scientist Associate",
    issuer: "Microsoft",
    date: "January 2025 - Present",
    link: "https://learn.microsoft.com/en-us/certifications/azure-data-scientist/"
  },
  {
    name: "AI-102: Designing and Implementing a Microsoft Azure AI Solution",
    issuer: "Microsoft",
    date: "June 2023 - Present",
    link: "https://learn.microsoft.com/en-us/certifications/exams/ai-102/"
  },
  {
    name: "AI-900: Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "July 2023 - Present",
    link: "https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/"
  },
  {
    name: "PL-900: Microsoft Power Platform Fundamentals",
    issuer: "Microsoft",
    date: "August 2023 - Present",
    link: "https://learn.microsoft.com/en-us/certifications/power-platform-fundamentals/"
  },
  {
    name: "AZ-900: Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "July 2023 - Present",
    link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/"
  }
];
