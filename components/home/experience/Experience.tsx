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
    title: "Financial Technology Company",
    position: "Lead Software Engineer",
    time: "Jan 2023 - Present",
    location: "New York, NY (Remote)",
    description:
      "Leading a team of 5 engineers developing and maintaining financial applications. Architecting and implementing new features, optimizing code performance, and ensuring high code quality through robust testing practices.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "C#",
      ".NET Core",
      "SQL Server",
      "Azure",
      "Jest",
      "CI/CD"
    ],
  },
  {
    title: "Advance Technologies Integration, LLC.",
    position: "Senior Software Engineer",
    time: "Jun 2021 - Dec 2022",
    location: "Rocklin, California",
    description:
      "Developed and scaled enterprise-level JavaScript applications. Created reusable front-end components and implemented complex business logic. Integrated Azure APIs and led code review sessions to maintain quality standards.",
    tech: [
      "JavaScript",
      "Vue.js",
      "React",
      "Azure API",
      "SQL",
      "Unit Testing",
      "Git"
    ],
  },
  {
    title: "Rocky Mountain West Insurance LLC.",
    position: "Full Stack Developer",
    time: "Mar 2020 - May 2021",
    location: "Denver, CO (Remote)",
    description:
      "Built and maintained insurance management platform. Created responsive dashboards with real-time data visualization. Implemented RESTful APIs and database optimizations that improved system performance by 40%.",
    tech: [
      "Vue.js",
      "React",
      "MongoDB",
      "PostgreSQL",
      "Node.js",
      "RESTful APIs",
      "Git"
    ],
  },
  {
    title: "Simple Cloudology",
    position: "Software Developer",
    time: "Apr 2018 - Feb 2020",
    location: "Sheridan, Wyoming",
    description:
      "Developed cloud-based solutions including project management tools and client portals. Created reusable components, integrated third-party services, and implemented real-time messaging functionality using WebSockets.",
    tech: [
      "React",
      "Next.js",
      "Styled Components",
      "Firebase Auth",
      "WebSockets",
      "Third-party API Integration",
      "Git"
    ],
  }
];
