'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigation, type SectionId } from '@/data/navigation';
import { portfolioConfig } from '@/data/portfolioConfig';
import { staggerContainer, staggerItem, useDialog } from './motion';

export function MobileMenu({ open, close }: { open: boolean; close: () => void }) {
  const ref = useDialog(open);
  const reduced = useReducedMotion();
  return <dialog ref={ref} className="mobile-menu" aria-labelledby="mobile-menu-title" onCancel={(event) => { event.preventDefault(); close(); }} onClose={close}>
    <div className="mobile-menu-top"><a href="#home" onClick={close} className="brand"><span className="monogram">FA</span><span id="mobile-menu-title">{portfolioConfig.fullName}</span></a><button onClick={close} className="icon-button" aria-label="Close navigation" title="Close navigation" autoFocus><X size={24} /></button></div>
    <motion.nav aria-label="Mobile navigation" initial={reduced ? false : 'hidden'} animate={open ? 'visible' : 'hidden'} variants={staggerContainer}>
      {navigation.map((item, index) => <motion.a variants={staggerItem} key={item.id} href={`#${item.id}`} onClick={close}><span className="mono">0{index + 1}</span>{item.label}<ArrowUpRight size={24} /></motion.a>)}
    </motion.nav>
    <div className="mobile-menu-contact"><p>{portfolioConfig.role}</p><a href={`mailto:${portfolioConfig.email}`}>{portfolioConfig.email}</a></div>
  </dialog>;
}

export default function Navigation() {
  const [active, setActive] = useState<SectionId>('home');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  useMotionValueEvent(scrollY, 'change', (value) => {
    const next = value > 24;
    if (next !== scrolledRef.current) { scrolledRef.current = next; setScrolled(next); }
  });
  useEffect(() => {
    const sections = navigation.map(({ id }) => document.getElementById(id)).filter((section): section is HTMLElement => !!section);
    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
      const closest = Array.from(visible).sort((first, second) => Math.abs(first.getBoundingClientRect().top) - Math.abs(second.getBoundingClientRect().top))[0];
      const item = navigation.find(({ id }) => id === closest?.id);
      if (item) setActive(item.id);
    }, { rootMargin: '-15% 0px -50% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <>
    <motion.header className={`floating-navigation ${scrolled ? 'navigation-scrolled' : ''}`} initial={reduced ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <a href="#home" className="brand" aria-label={`${portfolioConfig.fullName}, home`}><span className="monogram">FA</span><Image className="nav-profile" src={portfolioConfig.profileImage} width={36} height={36} alt={portfolioConfig.fullName} /><span className="brand-name">{portfolioConfig.fullName}</span></a>
      <nav className="desktop-navigation" aria-label="Main navigation">{navigation.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} onClick={() => setActive(item.id)}><span>{item.label}</span>{active === item.id && <motion.span className="navigation-active" layoutId="navigation-active" transition={{ duration: 0.2 }} />}</a>)}</nav>
      <a href="#contact" className="nav-cta">Let&apos;s Talk <ArrowUpRight size={16} /></a>
      <button className="menu-toggle icon-button" onClick={() => setOpen(true)} aria-label="Open navigation" aria-haspopup="dialog" aria-expanded={open} title="Open navigation"><Menu size={23} /></button>
    </motion.header>
    <AnimatePresence><MobileMenu open={open} close={() => setOpen(false)} /></AnimatePresence>
  </>;
}