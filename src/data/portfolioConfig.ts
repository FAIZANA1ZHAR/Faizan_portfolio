export type SocialLinks = { linkedin?: string; github?: string };
export type PortfolioConfig = {
  name: string;
  fullName: string;
  role: string;
  email: string;
  professionalEmail?: string;
  phone?: string;
  location: string;
  availability: string;
  summary: string;
  resumeUrl?: string;
  profileImage: string;
  siteUrl?: string;
  ogImage: string;
  socials: SocialLinks;
};

export const portfolioConfig: PortfolioConfig = {
  name: 'Faizan',
  fullName: 'Faizan Azhar',
  role: 'Senior Technical & Functional Consultant',
  email: 'faizanazhar1@gmail.com',
  phone: '+923435391151',
  location: 'Remote | Ireland & worldwide',
  availability: 'Available for enterprise consulting and technical collaboration',
  summary: '6+ years delivering enterprise solutions across Azure, applied AI, and Microsoft Power Platform. From requirements and architecture to secure, production-ready deployment.',
  resumeUrl: '/resume/Faizan%20Azhar%20%E2%80%93%20CV%20(Technical%20Consultant).pdf',
  profileImage: '/faizanpic.jpg',
  siteUrl: 'https://faizanazhar.dev',
  ogImage: '/opengraph-image',
  socials: { linkedin: 'https://www.linkedin.com/in/faizan-azhar-25a49b149/', github: 'https://github.com/FAIZANA1ZHAR' },
};