'use client';

import { useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowUpRight, BrainCircuit, Cloud, Code2, Database, FileText, GitBranch, Workflow, X } from 'lucide-react';
import { selectedWork, type Project as ProjectCaseStudy } from '@/data/projects';
import { FadeIn, RevealHeading, SectionLabel, useDialog } from './motion';
import { SystemPattern } from './content';

export function ProjectVisual({ project }: { project: ProjectCaseStudy }) {
  return <div className={`project-visual visual-${project.accent}`} aria-hidden="true"><div className="preview-top mono"><span>{project.number} / SYSTEM STUDY</span><span className="preview-dot" /></div>
    {project.accent === 'emerald' && <div className="cloud-preview"><div className="preview-label mono"><Cloud size={26} />AZURE FOUNDATION</div><SystemPattern kind="azure" /><div className="preview-modules"><span><GitBranch size={18} />BICEP / AVM</span><span><Database size={18} />PRIVATE ENDPOINTS</span></div></div>}
    {project.accent === 'cyan' && <div className="knowledge-preview"><div className="document-pages"><FileText size={32} /><span className="document-line" /><span className="document-line" /><span className="document-line short" /></div><SystemPattern kind="ai" /><div className="model-output"><BrainCircuit size={26} /><span className="mono">GROUNDED ANSWER</span></div></div>}
    {project.accent === 'coral' && <div className="entity-preview"><div className="entity-table"><span className="mono"><Database size={18} />DATAVERSE</span><div>Entities <span>Relationships</span></div><div>Forms <span>Business rules</span></div><div>Applications <span>PCF</span></div></div><SystemPattern kind="platform" /><Workflow className="entity-icon" size={36} /></div>}
    {project.accent === 'blue' && <div className="code-preview"><div className="code-window"><span className="mono"><Code2 size={16} />QUERY INPUT</span><code>SELECT name<br />FROM customers<br /><span>WHERE active = true;</span></code></div><ArrowUpRight size={26} /><div className="language-output"><span className="mono">MODEL OUTPUT</span><p>Find the names of active customers.</p><span className="output-underline" /></div></div>}
    <p className="preview-caption mono">{project.category}</p>
  </div>;
}

export function ProjectCard({ project, showDetails }: { project: ProjectCaseStudy; showDetails: (project: ProjectCaseStudy) => void }) {
  const reduced = useReducedMotion();
  const tiltHorizontal = useMotionValue(0);
  const tiltVertical = useMotionValue(0);
  const highlightX = useMotionValue('50%');
  const highlightY = useMotionValue('50%');
  const rotateY = useSpring(tiltHorizontal, { stiffness: 150, damping: 25 });
  const rotateX = useSpring(tiltVertical, { stiffness: 150, damping: 25 });
  return <motion.article className={`case-study-card accent-${project.accent} case-study-${project.number}`} style={{ rotateX, rotateY, '--highlight-x': highlightX, '--highlight-y': highlightY } as React.ComponentProps<typeof motion.article>['style']} onPointerMove={(event) => {
    if (reduced || event.pointerType !== 'mouse' || !window.matchMedia('(min-width: 1100px) and (hover: hover)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width;
    const vertical = (event.clientY - bounds.top) / bounds.height;
    tiltHorizontal.set((horizontal - 0.5) * 3);
    tiltVertical.set(-(vertical - 0.5) * 3);
    highlightX.set(`${horizontal * 100}%`); highlightY.set(`${vertical * 100}%`);
  }} onPointerLeave={() => { tiltHorizontal.set(0); tiltVertical.set(0); }}>
    <ProjectVisual project={project} /><div className="case-study-copy"><p className="mono project-category">{project.number} / {project.category}</p><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><div className="case-study-brief"><div><span className="mono">CHALLENGE</span><p>{project.challenge}</p></div><div><span className="mono">APPROACH</span><p>{project.approach}</p></div></div><ul className="technology-tags">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul><button onClick={() => showDetails(project)} className="details-button" aria-label={`View details: ${project.title}`}>View details <ArrowUpRight size={18} /></button></div>
  </motion.article>;
}

export function ProjectModal({ project, close }: { project: ProjectCaseStudy | null; close: () => void }) {
  const ref = useDialog(!!project);
  return <dialog ref={ref} className={`project-dialog accent-${project?.accent || 'emerald'}`} aria-labelledby="project-dialog-title" onCancel={(event) => { event.preventDefault(); close(); }} onClose={close} onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
    {project && <div className="project-dialog-inner"><button className="icon-button dialog-close" onClick={close} aria-label="Close project details" title="Close project details" autoFocus><X size={22} /></button><p className="section-label">{project.number} / {project.category}</p><h2 id="project-dialog-title">{project.title}</h2><p className="dialog-summary">{project.summary}</p><ProjectVisual project={project} /><div className="dialog-brief"><div><h3>Technical challenge</h3><p>{project.challenge}</p></div><div><h3>Approach</h3><p>{project.approach}</p></div></div><h3>Delivery details</h3><ul className="responsibility-list">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><ul className="technology-tags">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>{project.githubUrl && <a className="details-button" href={project.githubUrl} target="_blank" rel="noopener noreferrer">View source <ArrowUpRight size={18} /></a>}{project.liveUrl && <a className="details-button" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit project <ArrowUpRight size={18} /></a>}</div>}
  </dialog>;
}

export default function ProjectsSection() {
  const [project, setProject] = useState<ProjectCaseStudy | null>(null);
  return <section id="projects" className="section selected-work-section"><div className="shell"><FadeIn><SectionLabel number="03">SELECTED WORK</SectionLabel><div className="section-heading-row"><RevealHeading>Complex problems.<br />Considered solutions.</RevealHeading><p className="section-intro">A selection of enterprise systems, intelligent applications, and practical engineering contributions.</p></div></FadeIn><div className="case-studies">{selectedWork.map((item) => <FadeIn key={item.id} className={`case-study-wrapper wrapper-${item.number}`}><ProjectCard project={item} showDetails={setProject} /></FadeIn>)}</div></div><ProjectModal project={project} close={() => setProject(null)} /></section>;
}