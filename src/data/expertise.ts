export type Accent = 'emerald' | 'cyan' | 'coral' | 'blue';
export type Expertise = {
  id: 'azure' | 'ai' | 'platform';
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  metadata: string;
  accent: Accent;
};
export const expertise: Expertise[] = [
  { id: 'azure', number: '01', title: 'Azure Engineering', description: 'Secure foundations for enterprise applications and AI workloads.', capabilities: ['Landing zones & private networking', 'Bicep & Azure Verified Modules', 'Azure DevOps & DevSecOps', 'Multi-region deployment'], metadata: 'NETWORK / GOVERNANCE / DELIVERY', accent: 'emerald' },
  { id: 'ai', number: '02', title: 'Applied AI', description: 'Grounded intelligence that connects your knowledge to real business tasks.', capabilities: ['Azure AI Foundry & OpenAI', 'RAG, KAG & graph-based AI', 'LangChain & LangGraph agents', 'Document Intelligence & AI Search'], metadata: 'KNOWLEDGE / RETRIEVAL / REASONING', accent: 'cyan' },
  { id: 'platform', number: '03', title: 'Power Platform', description: 'Business applications shaped around people, processes, and data.', capabilities: ['Model-driven & Canvas Apps', 'Dataverse & Power Pages', 'Copilot Studio & Power Automate', 'PCF with React & TypeScript'], metadata: 'DATA / APPLICATIONS / AUTOMATION', accent: 'coral' },
];