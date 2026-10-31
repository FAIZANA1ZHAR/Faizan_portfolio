'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowDown, ArrowUpRight, BrainCircuit, Cloud, Database, FileText, GitBranch, LockKeyhole, Pause, Play, Workflow } from 'lucide-react';
import { portfolioConfig } from '@/data/portfolioConfig';
import { blurReveal, fadeUp, MagneticButton, maskedHeading, staggerContainer } from './motion';

const systems = [
  { id: 'cloud', title: 'AZURE', detail: 'CLOUD FOUNDATION', icon: Cloud, x: 250, y: 38, accent: 'emerald' },
  { id: 'ai', title: 'APPLIED AI', detail: 'GROUNDED INTELLIGENCE', icon: BrainCircuit, x: 430, y: 145, accent: 'cyan' },
  { id: 'platform', title: 'POWER PLATFORM', detail: 'BUSINESS APPLICATIONS', icon: Workflow, x: 310, y: 300, accent: 'coral' },
  { id: 'data', title: 'DATAVERSE', detail: 'CONNECTED DATA', icon: Database, x: 85, y: 290, accent: 'blue' },
  { id: 'devops', title: 'DEVSECOPS', detail: 'CODE TO PRODUCTION', icon: GitBranch, x: 35, y: 110, accent: 'emerald' },
] as const;

export function HeroArchitecture({ paused }: { paused: boolean }) {
  const reduced = useReducedMotion();
  const horizontal = useMotionValue(0);
  const vertical = useMotionValue(0);
  const rotateY = useSpring(horizontal, { stiffness: 90, damping: 22 });
  const rotateX = useSpring(vertical, { stiffness: 90, damping: 22 });
  return <div className={`hero-architecture ${paused || reduced ? 'motion-off' : ''}`} onPointerMove={(event) => {
    if (reduced || paused || event.pointerType !== 'mouse' || !window.matchMedia('(min-width: 1100px) and (hover: hover)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    horizontal.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 8);
    vertical.set(-((event.clientY - bounds.top) / bounds.height - 0.5) * 6);
  }} onPointerLeave={() => { horizontal.set(0); vertical.set(0); }}>
    <motion.div className="architecture-depth" style={{ rotateX, rotateY }}>
      <svg viewBox="0 0 640 460" role="presentation" aria-hidden="true" className="architecture-svg">
        <defs><pattern id="architecture-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeWidth="0.5" /></pattern><linearGradient id="architecture-edge" x1="0" x2="1"><stop stopColor="#25D0A7" /><stop offset="1" stopColor="#54C8E8" /></linearGradient></defs>
        <rect width="640" height="460" fill="url(#architecture-grid)" opacity="0.25" />
        <path className="security-boundary" d="M 40 85 L 315 8 L 604 140 L 560 378 L 229 448 L 18 307 Z" fill="none" stroke="currentColor" strokeDasharray="4 8" />
        <g fill="none" stroke="url(#architecture-edge)" strokeWidth="1.5"><path d="M 315 102 L 503 187 L 383 341 L 158 331 L 108 152 Z" /><path d="M 315 102 L 302 226 L 503 187 M 302 226 L 383 341 M 302 226 L 158 331 M 108 152 L 302 226" /></g>
        <path className="connection-pulse" d="M 108 152 L 302 226 L 503 187" fill="none" stroke="#8AE8CB" strokeWidth="3" strokeDasharray="14 340" />
        <path className="connection-pulse connection-delay" d="M 315 102 L 302 226 L 383 341" fill="none" stroke="#54C8E8" strokeWidth="2" strokeDasharray="12 290" />
        <g transform="translate(302 226)"><path d="M 0 -33 L 35 -15 L 35 18 L 0 38 L -35 18 L -35 -15 Z" fill="#163c31" stroke="#8AE8CB" /><path d="M -35 -15 L 0 5 L 35 -15 M 0 5 L 0 38" fill="none" stroke="#8AE8CB" opacity="0.6" /></g>
        {systems.map(({ id, title, detail, icon: Icon, x, y, accent }, index) => <motion.g key={id} initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reduced ? 0 : 0.8 + index * 0.1 }} className={`architecture-node accent-${accent}`} transform={`translate(${x} ${y})`}>
          <rect x="3" y="7" width="178" height="80" rx="6" fill="#07110F" stroke="currentColor" opacity="0.5" /><rect width="178" height="80" rx="6" fill="#10201C" stroke="currentColor" strokeOpacity="0.5" />
          <Icon x={12} y={12} width={24} height={24} strokeWidth={1.5} /><text x="12" y="52">{title}</text><text x="12" y="67" className="node-detail">{detail}</text>
        </motion.g>)}
        <text x="28" y="438" className="architecture-metadata">IaC / PRIVATE CONNECTIVITY / ALM</text>
      </svg>
      <ul className="mobile-system-labels">{systems.map(({ id, title, icon: Icon }) => <li key={id}><Icon size={14} />{title}</li>)}</ul>
      <div className="secure-label"><LockKeyhole size={13} /> Secure by design</div>
    </motion.div>
  </div>;
}

export default function Hero() {
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  return <section id="home" className="cinematic-hero">
    <div className="hero-grid-background" aria-hidden="true" />
    <div className="shell hero-layout">
      <motion.div className="hero-editorial" initial={reduced ? false : 'hidden'} animate="visible" variants={staggerContainer}>
        <motion.p variants={fadeUp} className="technical-eyebrow"><span className="status-dot" /> AZURE / APPLIED AI / POWER PLATFORM</motion.p>
        <h1><span className="name-mask"><motion.span variants={maskedHeading}>{portfolioConfig.name}</motion.span></span><span className="name-mask"><motion.span variants={maskedHeading} className="gradient-name">{portfolioConfig.fullName.split(' ').slice(1).join(' ')}</motion.span></span></h1>
        <motion.p variants={blurReveal} className="hero-role">{portfolioConfig.role}</motion.p>
        <motion.p variants={fadeUp} className="hero-description">I design and deliver secure, production-ready solutions across Azure, applied AI, DevOps, and Microsoft Power Platform.</motion.p>
        <motion.div variants={fadeUp} className="hero-actions"><MagneticButton href="#projects">Explore Selected Work <ArrowUpRight size={18} /></MagneticButton>{portfolioConfig.resumeUrl && <MagneticButton href={portfolioConfig.resumeUrl} secondary external><FileText size={18} /> View Resume</MagneticButton>}</motion.div>
        <motion.p variants={fadeUp} className="hero-availability"><span className="status-dot" />{portfolioConfig.availability}</motion.p>
      </motion.div>
      <motion.div className="hero-system" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: reduced ? 0 : 0.7 }}>
        <div className="system-index mono"><span>CONNECTED SYSTEMS</span><span>01 / 05 NODES</span></div>
        <HeroArchitecture paused={paused} />
        <motion.div className="profile-status" initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduced ? 0 : 1.3, duration: 0.6 }}>
          <Image src={portfolioConfig.profileImage} alt={`${portfolioConfig.fullName}, technical and functional consultant`} width={52} height={52} priority /><div><strong>{portfolioConfig.fullName}</strong><span>Enterprise delivery. Human perspective.</span></div><span className="status-dot" />
        </motion.div>
      </motion.div>
      <div className="hero-bottom"><a href="#expertise" className="scroll-cue"><ArrowDown size={18} /><span className="mono">DISCOVER THE PRACTICE</span></a><span className="hero-domain mono">INFRASTRUCTURE / INTELLIGENCE / IMPACT</span><button className="icon-button motion-toggle" onClick={() => setPaused(!paused)} title={paused ? 'Play architecture animation' : 'Pause architecture animation'} aria-label={paused ? 'Play architecture animation' : 'Pause architecture animation'}>{paused ? <Play size={16} /> : <Pause size={16} />}</button></div>
    </div>
  </section>;
}