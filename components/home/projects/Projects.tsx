import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "FinTech Dashboard",
    imgSrc: "/project-imgs/elancerz.png",
    code: "https://github.com/FAIZANA1ZHAR",
    projectLink: "https://fintech-dashboard.example.com",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Material UI"],
    description:
      "A comprehensive financial dashboard that visualizes market data and helps users track investments with real-time updates.",
    modalContent: (
      <>
        <p>
          Led the development of a financial dashboard that processes and visualizes large datasets in real-time. The application helps users track market trends and manage their investment portfolios efficiently.
        </p>
        <p>
          The tech stack includes React with TypeScript for the frontend, Node.js and Express for the backend API, with MongoDB for data storage. Material UI was used for the component library to ensure a consistent and professional look.
        </p>
        <p>
          Key features include real-time market data visualization, portfolio tracking, and customizable alerts for price movements.
        </p>
      </>
    ),
  },
  {
    title: "Enterprise CRM System",
    imgSrc: "/project-imgs/agency-iron-crm.png",
    code: "https://github.com/FAIZANA1ZHAR",
    projectLink: "https://enterprise-crm.example.com",
    tech: ["C#", ".NET Core", "React", "SQL Server", "Azure", "Redux"],
    description:
      "An enterprise-grade customer relationship management system built on .NET Core with a React frontend.",
    modalContent: (
      <>
        <p>
          Developed a comprehensive CRM solution for enterprise clients that manages customer interactions, sales pipelines, and business analytics.
        </p>
        <p>
          The application was built using C# and .NET Core for the backend services, with React and Redux managing the frontend state. The system is hosted on Azure with SQL Server for data persistence.
        </p>
        <p>
          Key achievements include implementing advanced search functionality, designing a scalable architecture that supports thousands of concurrent users, and creating a customizable reporting system.
        </p>
      </>
    ),
  },
  {
    title: "Mobile Payment App",
    imgSrc: "/project-imgs/wh_app.png",
    code: "https://github.com/FAIZANA1ZHAR",
    projectLink: "https://play.google.com/store",
    tech: ["React Native", "Node.js", "Firebase", "Redux", "Payment Gateway Integration"],
    description:
      "A cross-platform mobile application for secure peer-to-peer payments and financial transactions.",
    modalContent: (
      <>
        <p>
          Built a React Native mobile application that allows users to send and receive payments securely. The app includes features like transaction history, spending analytics, and integration with multiple payment gateways.
        </p>
        <p>
          This project involved significant security implementation, including biometric authentication and encrypted data storage. Firebase was used for the backend services and real-time database.
        </p>
        <p>
          The app achieved a 4.7-star rating on app stores and processes over 10,000 transactions daily.
        </p>
      </>
    ),
  },
  {
    title: "E-commerce Platform",
    imgSrc: "/project-imgs/worshiphim.png",
    code: "https://github.com/FAIZANA1ZHAR",
    projectLink: "https://ecommerce.example.com",
    tech: ["Vue.js", "TypeScript", "GraphQL", "PostgreSQL", "Docker", "AWS"],
    description:
      "A fully-featured e-commerce platform with inventory management, payment processing, and customer analytics.",
    modalContent: (
      <>
        <p>
          Designed and developed a modern e-commerce platform that supports multiple vendors, various payment methods, and comprehensive inventory management.
        </p>
        <p>
          The application was built using Vue.js with TypeScript for the frontend, GraphQL for efficient API queries, and PostgreSQL for the database. The entire system was containerized with Docker and deployed on AWS.
        </p>
        <p>
          Notable features include real-time inventory updates, an intelligent search system, and an analytics dashboard for business owners to track sales and customer behavior.
        </p>
      </>
    ),
  },
];
