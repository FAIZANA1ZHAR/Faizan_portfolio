export type Certification = { code: string; name: string; date: string; credentialUrl?: string };
export const certifications: Certification[] = [
  { code: 'PL-200', name: 'Power Platform Functional Consultant', date: 'Oct 2025' },
  { code: 'DP-100', name: 'Azure Data Scientist Associate', date: 'Jan 2025' },
  { code: 'AI-102', name: 'Azure AI Engineer', date: 'Jun 2023' },
  { code: 'AI-900', name: 'Azure AI Fundamentals', date: 'Jul 2023' },
  { code: 'PL-900', name: 'Power Platform Fundamentals', date: 'Aug 2023' },
  { code: 'AZ-900', name: 'Azure Fundamentals', date: 'Jul 2023' },
];