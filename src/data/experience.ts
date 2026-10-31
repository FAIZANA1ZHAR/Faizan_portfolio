export type Experience = {
  id: string; startDate: string; endDate: string; location: string; role: string; company: string;
  workArea?: string; summary?: string; responsibilities: string[]; technologies: string[]; current?: boolean;
};

export const careerTimeline: Experience[] = [
  {
    id: 'tekenable', startDate: 'Feb 2022', endDate: 'Present', location: 'Remote, Ireland', role: 'Senior Technical & Functional Consultant', company: 'Tekenable Ltd', workArea: 'Azure, AI & Power Platform', current: true,
    summary: 'End-to-end enterprise consulting: discovery and architecture through to secure production deployment.',
    responsibilities: [
      'Designed enterprise Azure infrastructure from landing zones to secured application and AI workloads across multiple client projects.',
      'Established reusable Bicep / AVM deployments and a company-standard security analysis pipeline with SonarQube and Mend.',
      'Delivered document AI, Copilot Studio agents, and multi-agent proofs of concept with grounded enterprise knowledge.',
      'Led discovery workshops, Power Platform delivery, integrations, and automated ALM across environments.',
      'Configured private endpoints, Private DNS, least-privilege service connections, and multi-region deployments in North Europe and Sweden Central.',
      'Built custom C# connectors, Azure Functions, and broadcasting endpoints for France and UK markets.',
    ],
    technologies: ['Azure', 'AI Foundry', 'Bicep / AVM', 'Azure DevOps', 'SonarQube', 'Mend', 'Copilot Studio', 'Dataverse', 'PCF', 'Python', '.NET', 'React', 'Docker'],
  },
  { id: 'code-breakers', startDate: 'Oct 2020', endDate: 'Jan 2022', location: 'Remote, USA', role: 'Full-Stack Developer', company: 'Code Breakers', workArea: 'Hospitality & transportation', summary: 'Built hotel management with real-time bookings and payments, and a taxi dispatch platform with GPS tracking, driver matching, and Google Maps integration.', responsibilities: ['Built an online hotel management system with real-time booking, room inventory, and payment integration.', 'Developed online taxi dispatch with live GPS tracking, driver-passenger matching, and Google Maps integration.'], technologies: ['Node.js', 'React', 'React Native', 'Google Maps', 'Firebase'] },
  { id: 'alphasquad', startDate: 'Jan 2020', endDate: 'Sep 2020', location: 'Islamabad', role: 'Full-Stack Developer', company: 'AlphaSquad', workArea: 'Education & serverless applications', summary: 'Delivered an online education system for a Saudi client, covering course management, live sessions, and authentication on a serverless architecture.', responsibilities: ['Designed and deployed a full-scale Online Education System with course management, live sessions, and authentication.', 'Implemented serverless architecture and GraphQL-backed data integration.'], technologies: ['Node.js', 'React', 'React Native', 'GraphQL', 'Serverless', 'Firebase'] },
];
