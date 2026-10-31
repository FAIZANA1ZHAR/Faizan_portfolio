import { ArrowUpRight,Cloud,BrainCircuit,Workflow,ShieldCheck,GraduationCap,Github,Linkedin } from 'lucide-react';
import { personalInfo } from '@/data/personal-info';

const capabilities=[
  { icon: Cloud,title: 'Azure engineering',description: 'Secure foundations for enterprise applications and AI workloads.',skills: ['Landing zones & private networking','Bicep & Azure Verified Modules','Azure DevOps & DevSecOps','Multi-region deployment'] },
  { icon: BrainCircuit,title: 'Applied AI',description: 'Grounded intelligence that connects your knowledge to real business tasks.',skills: ['Azure AI Foundry & OpenAI','RAG, KAG & graph-based AI','LangChain & LangGraph agents','Document Intelligence & AI Search'] },
  { icon: Workflow,title: 'Power Platform',description: 'Business applications shaped around people, processes, and data.',skills: ['Model-driven & Canvas Apps','Dataverse & Power Pages','Copilot Studio & Power Automate','PCF with React & TypeScript'] },
];

const work=[
  { number: '01',title: 'Enterprise Azure foundations',category: 'CLOUD INFRASTRUCTURE',icon: Cloud,description: 'Delivered Azure environment setup for Acorn, MIBI, Tek Voice, MFCU, and other client projects. Landing zones, private endpoints, DNS, and AI workloads deployed through reusable infrastructure as code.',tags: ['Azure','Bicep / AVM','Private networking','Azure DevOps'] },
  { number: '02',title: 'Chat with Docs',category: 'KNOWLEDGE & APPLIED AI',icon: BrainCircuit,description: 'Built a document-grounded AI proof of concept using Azure OpenAI, Document Intelligence, and AI Search, later extended into a production client solution.',tags: ['Azure OpenAI','RAG','AI Search','Document Intelligence'] },
  { number: '03',title: 'EPassport ERA & custom PCF',category: 'ENTERPRISE APPLICATIONS',icon: Workflow,description: 'Led EPassport ERA from requirements and user stories to delivery and client demos. Developed advanced PCF controls, including a five-level horse pedigree visualiser with React and TypeScript.',tags: ['Dataverse','Power Apps','React / TypeScript','PCF'] },
  { number: '04',title: 'SQL queries, in plain language',category: 'OPEN-SOURCE CONTRIBUTION',icon: Github,description: 'A custom Dynamics 365 PCF control that converts SQL queries into natural language using a Hugging Face model, backed by FastAPI and Docker.',tags: ['Hugging Face','FastAPI','PCF','Docker'],link: personalInfo.socialLinks.github },
];

const certifications=[
  ['PL-200','Power Platform Functional Consultant','Oct 2025'],
  ['DP-100','Azure Data Scientist Associate','Jan 2025'],
  ['AI-102','Azure AI Engineer','Jun 2023'],
  ['AI-900','Azure AI Fundamentals','Jul 2023'],
  ['PL-900','Power Platform Fundamentals','Aug 2023'],
  ['AZ-900','Azure Fundamentals','Jul 2023'],
];

export default function PortfolioContent() {
  return (
    <>
      <section id="about" className="portfolio-section about-section">
        <div className="portfolio-container">
          <div className="section-heading"><p className="eyebrow">01 / EXPERTISE</p><h2>From business challenge<br />to production-ready solution.</h2></div>
          <p className="section-intro about-intro">I combine technical depth with functional consulting to turn complex requirements into secure, practical solutions. My work spans cloud architecture, intelligent applications, and end-to-end Power Platform delivery.</p>
          <div id="tech-stack" className="capability-grid">
            {capabilities.map(({ icon: Icon,title,description,skills }) => <article key={title} className="capability"><Icon size={32} strokeWidth={1.5} /><h3>{title}</h3><p>{description}</p><ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}
          </div>
          <div className="development-strip"><span>Also in my toolkit</span><p>Python / FastAPI / Django / .NET & C# / React / TypeScript / Angular / Docker</p></div>
        </div>
      </section>
      <section id="experience" className="portfolio-section experience-section">
        <div className="portfolio-container">
          <div className="section-heading"><p className="eyebrow">02 / EXPERIENCE</p><h2>Built on real delivery.</h2></div>
          <div className="experience-row"><div className="experience-date">FEB 2022 / PRESENT<span>Remote, Ireland</span></div><div><h3>Senior Technical & Functional Consultant</h3><p className="company">Tekenable Ltd <span>Azure, AI & Power Platform</span></p><ul className="experience-points"><li>Designed enterprise Azure infrastructure from landing zones to secured application and AI workloads across multiple client projects.</li><li>Established reusable Bicep / AVM deployments and a company-standard security analysis pipeline with SonarQube and Mend.</li><li>Delivered document AI, Copilot Studio agents, and multi-agent proofs of concept with grounded enterprise knowledge.</li><li>Led discovery workshops, Power Platform delivery, integrations, and automated ALM across environments.</li></ul></div></div>
          <div className="experience-row"><div className="experience-date">OCT 2020 / JAN 2022<span>Remote, USA</span></div><div><h3>Full-Stack Developer</h3><p className="company">Code Breakers</p><p>Built hotel management with real-time bookings and payments, and a taxi dispatch platform with GPS tracking, driver matching, and Google Maps integration.</p><p className="experience-tools">Node.js / React / React Native / Firebase</p></div></div>
          <div className="experience-row"><div className="experience-date">JAN 2020 / SEP 2020<span>Islamabad</span></div><div><h3>Full-Stack Developer</h3><p className="company">AlphaSquad</p><p>Delivered an online education system for a Saudi client, covering course management, live sessions, and authentication on a serverless architecture.</p><p className="experience-tools">Node.js / React / GraphQL / Serverless / Firebase</p></div></div>
        </div>
      </section>
      <section id="projects" className="portfolio-section work-section">
        <div className="portfolio-container">
          <div className="section-heading"><p className="eyebrow">03 / SELECTED WORK</p><h2>Complex problems.<br />Considered solutions.</h2></div>
          <div className="work-grid">{work.map(({ number,title,category,icon: Icon,description,tags,link }) => <article key={number} className="work-item"><div className={`work-visual work-visual-${number}`}><span>{number}</span><Icon size={80} strokeWidth={1} /><p>{category}</p></div><div className="work-copy"><h3>{title}</h3><p>{description}</p><ul className="tag-list">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>{link&&<a className="text-link" href={link} target="_blank" rel="noopener noreferrer">GitHub profile <ArrowUpRight size={16} /></a>}</div></article>)}</div>
        </div>
      </section>
      <section id="certifications" className="portfolio-section credentials-section">
        <div className="portfolio-container">
          <div className="section-heading"><p className="eyebrow">04 / CREDENTIALS</p><h2>Always learning.<br />Microsoft certified.</h2></div>
          <div className="certification-grid">{certifications.map(([code,title,date]) => <article key={code} className="certification"><ShieldCheck size={24} /><div><span className="certificate-code">{code}</span><h3>{title}</h3><p>{date}</p></div></article>)}</div>
          <div className="education"><GraduationCap size={28} /><div><h3>Bachelor of Engineering in Software Engineering</h3><p>Air University, Islamabad / 2017 - 2020</p><p>Research in churn prediction, biomedical NLP, and malware analysis.</p></div></div>
        </div>
      </section>
    </>
  );
}

export function PortfolioFooter() {
  return <footer className="portfolio-footer"><div className="portfolio-container footer-inner"><div><a href="#home" className="footer-name">Faizan Azhar<span>.</span></a><p>Engineering clarity. Delivering impact.</p></div><div className="footer-social"><a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={20} /></a><a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><Github size={20} /></a><span>&copy; {new Date().getFullYear()} Faizan Azhar</span></div></div></footer>;
}