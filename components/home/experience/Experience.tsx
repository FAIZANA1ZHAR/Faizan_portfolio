import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Tekenable ltd",
    position: "Senior Software Engineer (Full Stack) & Technical Consultant",
    time: "Feb 2022 - Present",
    location: "Remote, Ireland",
    description:
      "Led development and support for EPassport ERA, creating user stories and presenting weekly demos to clients. Developed and managed Power Apps solutions pipelines, created custom connectors in C#, developed media stream services and third-party endpoints. Implemented horse pedigree system using PCF in React with React Query and deployed CI/CD pipelines for Azure Functions.",
    tech: [
      "Azure OpenAI",
      "Azure Document Intelligence",
      "Azure Cognitive Search",
      "React",
      "Fast API",
      ".NET",
      ".NET Core",
      "Python",
      "Angular",
      "Power Apps",
      "DevOps",
      "Docker"
    ],
  },
  {
    title: "Code Breakers",
    position: "Full-Stack Developer",
    time: "Oct 2020 - Jan 2022",
    location: "Remote, USA",
    description:
      "Developed online hotel management system and online taxi system, implementing various web and mobile functionalities to enhance user experience and operational efficiency.",
    tech: [
      "Node.js",
      "React",
      "React Native",
      "Google Maps",
      "Firebase"
    ],
  },
  {
    title: "AlphaSquad",
    position: "Full-Stack Developer",
    time: "Jan 2020 - Sep 2020",
    location: "Onsite, Islamabad",
    description:
      "Developed and deployed a major Online Education System for a Saudi client project, working with modern technologies and implementing responsive design principles for optimal user experience.",
    tech: [
      "Node.js",
      "React",
      "React Native",
      "Serverless",
      "GraphQL",
      "Firebase"
    ],
  },
  {
    title: "Open-Source Contribution",
    position: "SQL Query Conversion to Sentence using Hugging Face",
    time: "",
    location: "",
    description:
      "Built a custom control for Dynamics 365 that converts SQL queries into natural language using the Hugging Face model, enhancing usability and accessibility for non-technical users.",
    tech: [
      "Dynamics 365",
      "PCF Control",
      "React",
      "FastAPI",
      "Hugging Face",
      "Docker"
    ],
  }
];
