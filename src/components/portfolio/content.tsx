'use client';

import { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll } from 'framer-motion';
import { ArrowDown, ArrowUpRight, BrainCircuit, Cloud, Database, GraduationCap, Pause, Play, ShieldCheck, Workflow } from 'lucide-react';
import { expertise, type Expertise } from '@/data/expertise';
import { careerTimeline, type Experience } from '@/data/experience';
import { certifications, type Certification } from '@/data/certifications';
import { education } from '@/data/education';
import { technologies } from '@/data/technologies';
import { FadeIn, RevealHeading, SectionLabel, fadeUp } from './motion';

export function SystemPattern({ kind }: { kind: 'azure' | 'ai' | 'platform' }) {
  const points = kind === 'ai' ? [[35, 95], [85, 35], [140, 120], [210, 45], [245, 120], [305, 65]] : kind === 'azure' ? [[35, 105], [110, 40], [180, 105], [250, 40], [315, 105]] : [[45, 45], [45, 115], [165, 80], [280, 45], [280, 115]];
  return <svg viewBox="0 0 350 150" className="system-pattern" aria-hidden="true"><g fill="none" stroke="currentColor" strokeOpacity="0.45">{points.slice(1).map(([x, y], index) => <path key={`${x}-${y}`} d={`M ${points[index][0]} ${points[index][1]} L ${x} ${y}`} />)}{points.slice(0, -2).map(([x, y], index) => <path key={`branch-${x}`} d={`M ${x} ${y} L ${points[index + 2][0]} ${points[index + 2][1]}`} strokeDasharray="3 6" />)}</g>{points.map(([x, y], index) => <g key={`${x}-${y}`} className="pattern-node" style={{ animationDelay: `${index * 0.3}s` }}>{kind === 'platform' ? <rect x={x - 12} y={y - 10} width="24" height="20" rx="3" fill="#10201C" stroke="currentColor" /> : <circle cx={x} cy={y} r={kind === 'ai' ? 7 : 10} fill="#10201C" stroke="currentColor" />}<circle cx={x} cy={y} r="2" fill="currentColor" /></g>)}</svg>;
}

export function ExpertisePanel({ item, active, activate }: { item: Expertise; active: boolean; activate: () => void }) {
  const Icon = item.id === 'azure' ? Cloud : item.id === 'ai' ? BrainCircuit : Workflow;
  const [expanded, setExpanded] = useState(true);
  return <motion.article variants={fadeUp} className={`expertise-panel accent-${item.accent} ${active ? 'panel-active' : ''}`} onMouseEnter={activate}>
    <div className="panel-metadata mono"><span>{item.number} / PRACTICE</span><Icon size={28} strokeWidth={1.5} /></div>
    <SystemPattern kind={item.id} />
    <h3>{item.title}</h3><p className="panel-description">{item.description}</p>
    <button className="expertise-toggle" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls={`capabilities-${item.id}`}>Capabilities <ArrowDown size={16} className={expanded ? 'expanded-arrow' : ''} /></button>
    <ul id={`capabilities-${item.id}`} className={`capability-list ${expanded ? 'capabilities-expanded' : ''}`}>{item.capabilities.map((capability, index) => <li key={capability} style={{ transitionDelay: `${index * 35}ms` }}><span aria-hidden="true">/</span>{capability}</li>)}</ul>
    <p className="panel-footer mono">{item.metadata}</p>
  </motion.article>;
}

export function ExpertiseSection() {
  const [active, setActive] = useState('azure');
  return <section id="expertise" className="section expertise-section"><div className="shell"><FadeIn><SectionLabel number="01">THE PRACTICE</SectionLabel><div className="section-heading-row"><RevealHeading>From business challenge<br />to production-ready solution.</RevealHeading><p className="section-intro">Technical depth meets functional consulting. Secure foundations, useful intelligence, and applications built around real business needs.</p></div></FadeIn><div className="expertise-grid">{expertise.map((item) => <ExpertisePanel key={item.id} item={item} active={active === item.id} activate={() => setActive(item.id)} />)}</div><FadeIn className="practice-footnote"><ShieldCheck size={18} /><p>Discovery. Architecture. Delivery. Secure production deployment.</p><span className="mono">6+ YEARS / ENTERPRISE SOLUTIONS</span></FadeIn><div className="practice-toolkit"><p className="mono">TECHNICAL TOOLKIT</p><ul className="technology-tags">{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></div></div></section>;
}

export function TimelineItem({ item }: { item: Experience }) {
  return <motion.article className={`timeline-item ${item.current ? 'timeline-current' : ''}`} initial="rest" whileInView="active" viewport={{ amount: 0.35 }} variants={{ rest: { backgroundColor: 'rgba(37,208,167,0)' }, active: { backgroundColor: 'rgba(37,208,167,0.04)' } }}>
    <span className="timeline-dot" aria-hidden="true" /><div className="timeline-date"><p className="mono">{item.startDate} / {item.endDate}</p><span>{item.location}</span>{item.current && <span className="current-role mono"><span className="status-dot" />CURRENT ROLE</span>}</div>
    <div className="timeline-body"><div className="role-heading"><h3>{item.role}</h3><span className="work-area mono">{item.workArea}</span></div><p className="company-name">{item.company}</p>{item.summary && <p className="role-summary">{item.summary}</p>}<ul className="responsibility-list">{item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul><ul className="technology-tags">{item.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
  </motion.article>;
}

export function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });
  return <section id="experience" className="section experience-section"><div className="shell"><FadeIn><SectionLabel number="02">PRODUCTION EXPERIENCE</SectionLabel><RevealHeading>Built on real delivery.</RevealHeading></FadeIn><div className="career-timeline" ref={ref}><div className="timeline-track" aria-hidden="true"><motion.div style={{ scaleY: scrollYProgress }} /></div>{careerTimeline.map((item) => <TimelineItem key={item.id} item={item} />)}</div></div></section>;
}

export function TechnologyMarquee() {
  const [paused, setPaused] = useState(false);
  const rows = [technologies.slice(0, 14), technologies.slice(14)];
  return <section className="technology-marquee" aria-label="Technology toolkit"><div className="shell marquee-heading"><span className="mono">TOOLS OF THE PRACTICE</span><span>Infrastructure to intelligent applications.</span><button className="icon-button" onClick={() => setPaused(!paused)} aria-label={paused ? 'Play technology marquee' : 'Pause technology marquee'} title={paused ? 'Play technology marquee' : 'Pause technology marquee'} aria-pressed={paused}>{paused ? <Play size={16} /> : <Pause size={16} />}</button></div>{rows.map((row, index) => <div className="marquee-window" key={index} aria-hidden="true"><div className={`marquee-track ${index ? 'marquee-reverse' : ''}`} style={{ animationPlayState: paused ? 'paused' : undefined }}>{[0, 1].map((copy) => <div className="marquee-group" key={copy}>{row.map((technology) => <span key={technology}><Database size={14} />{technology}</span>)}</div>)}</div></div>)}<p className="sr-only">{technologies.join(', ')}</p></section>;
}

export function CredentialCard({ credential, index }: { credential: Certification; index: number }) {
  const accents = ['emerald', 'cyan', 'blue', 'coral'];
  const reduced = useReducedMotion();
  return <motion.article initial={reduced ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: reduced ? 0 : index * 0.06 }} className={`credential-card accent-${accents[index % accents.length]}`}><div className="credential-top"><span className="mono">MICROSOFT / CERTIFICATION</span><ShieldCheck size={28} strokeWidth={1.5} /></div><p className="credential-code mono">{credential.code}</p><h3>{credential.name}</h3><div className="credential-bottom"><span className="mono">{credential.date}</span>{credential.credentialUrl && <a href={credential.credentialUrl} target="_blank" rel="noopener noreferrer" aria-label={`Verify ${credential.code}`} className="icon-button"><ArrowUpRight size={18} /></a>}</div></motion.article>;
}

export function CredentialsSection() {
  const rail = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const moveRail = (direction: number) => rail.current?.scrollBy({ left: direction * 330, behavior: reduced ? 'auto' : 'smooth' });
  return <section id="credentials" className="section credentials-section"><div className="shell"><FadeIn><SectionLabel number="04">CREDENTIALS & CONTINUED LEARNING</SectionLabel><div className="section-heading-row"><RevealHeading>Always learning.<br />Microsoft certified.</RevealHeading><div className="rail-controls"><button className="icon-button" onClick={() => moveRail(-1)} aria-label="Previous certifications" title="Previous certifications"><ArrowUpRight className="arrow-left" size={20} /></button><button className="icon-button" onClick={() => moveRail(1)} aria-label="Next certifications" title="Next certifications"><ArrowUpRight className="arrow-right" size={20} /></button></div></div></FadeIn><div className="credentials-rail" ref={rail} role="region" aria-label="Microsoft certifications" tabIndex={0}>{certifications.map((credential, index) => <CredentialCard key={credential.code} credential={credential} index={index} />)}</div><div className="education-dossier"><div className="education-label"><GraduationCap size={30} strokeWidth={1.5} /><span className="mono">EDUCATION<br />& RESEARCH</span></div><div><p className="mono education-date">{education.years} / CGPA {education.cgpa}</p><h3>{education.degree}</h3><p className="university-name">{education.university}</p><div className="research-grid">{education.research.map((research) => <div key={research.title}><h4>{research.title}</h4><p>{research.description}</p></div>)}</div></div></div></div></section>;
}