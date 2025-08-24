export interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  remote: boolean;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Tekenable Ltd",
    position: "Senior Software Engineer (Full Stack) & Technical Consultant",
    location: "Remote, Ireland",
    remote: true,
    period: "Feb 2022 - Present",
    description: "Leading enterprise software development and delivering innovative Azure-based solutions for international clients. Successfully managing the complete software development lifecycle from requirements gathering to deployment.",
    achievements: [
      "Successfully delivered and led EPassport ERA system for international clients with weekly client demos",
      "Developed AI-powered 'chat with docs' POC that converted to successful client acquisition",
      "Architected and deployed CI/CD pipelines for Azure Functions and PCF controls",
      "Created custom Power Apps connectors in C# and media streaming services",
      "Built 5-level horse pedigree system using PCF in React with React Query",
      "Developed third-party endpoints for media broadcasting for France and UK markets"
    ],
    technologies: ["Azure OpenAI", "Azure Document Intelligence", "Azure Cognitive Search", "React", "FastAPI", ".NET", ".NET Core", "Python", "Angular", "Power Apps", "Azure", "DevOps", "Docker", "C#"]
  },
  {
    company: "Code Breakers",
    position: "Full-Stack Developer",
    location: "Remote, USA",
    remote: true,
    period: "Oct 2020 - Jan 2022",
    description: "Developed comprehensive web applications for hospitality and transportation sectors, focusing on scalable solutions and modern architecture patterns.",
    achievements: [
      "Developed complete online hotel management system with booking and payment integration",
      "Built online taxi system with real-time GPS tracking and route optimization",
      "Implemented scalable backend architecture using Node.js and modern databases",
      "Integrated Google Maps API for location-based services",
      "Delivered mobile-responsive applications for better user experience"
    ],
    technologies: ["Node.js", "React", "React Native", "Google Maps API", "Firebase", "JavaScript", "REST APIs"]
  },
  {
    company: "AlphaSquad",
    position: "Full-Stack Developer",
    location: "Onsite, Islamabad",
    remote: false,
    period: "Jan 2020 - Sep 2020",
    description: "Developed and deployed major online education system for Saudi Arabian client, implementing modern web technologies and serverless architecture.",
    achievements: [
      "Successfully delivered major online education platform for international Saudi client",
      "Implemented serverless architecture for scalability and cost optimization",
      "Built interactive learning modules with real-time features",
      "Integrated GraphQL for efficient data fetching and management",
      "Developed mobile applications for cross-platform accessibility"
    ],
    technologies: ["Node.js", "React", "React Native", "Serverless", "GraphQL", "Firebase", "JavaScript"]
  }
];
