'use client';

import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { portfolioConfig } from '@/data/portfolioConfig';
import { FadeIn } from './motion';

export default function Footer() {
  const reduced = useReducedMotion();
  return <footer className="consulting-footer"><div className="shell"><FadeIn className="footer-main"><a href="#home" className="brand"><span className="monogram">FA</span><span>{portfolioConfig.fullName}<small>{portfolioConfig.role}</small></span></a><div className="footer-links">{portfolioConfig.socials.linkedin && <a className="icon-button" href={portfolioConfig.socials.linkedin} aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={19} /></a>}{portfolioConfig.socials.github && <a className="icon-button" href={portfolioConfig.socials.github} aria-label="GitHub" title="GitHub" target="_blank" rel="noopener noreferrer"><Github size={19} /></a>}<a className="icon-button" href={`mailto:${portfolioConfig.email}`} aria-label="Email Faizan" title="Email Faizan"><Mail size={19} /></a><button className="icon-button back-to-top" aria-label="Back to top" title="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })}><ArrowUp size={19} /></button></div></FadeIn><div className="footer-bottom"><p><span className="status-dot" />Designing secure systems. Building useful intelligence.</p><span className="mono">&copy; {new Date().getFullYear()} {portfolioConfig.fullName}</span></div></div></footer>;
}