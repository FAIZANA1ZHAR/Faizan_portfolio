'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, MotionConfig, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue, type Variants } from 'framer-motion';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const fadeUp: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };
export const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6, ease } } };
export const scaleIn: Variants = { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } } };
export const staggerContainer: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
export const staggerItem = fadeUp;
export const maskedHeading: Variants = { hidden: { y: 32, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease } } };
export const blurReveal: Variants = { hidden: { opacity: 0, filter: 'blur(6px)', y: 12 }, visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.7, ease } } };
export const slideFromLeft: Variants = { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } } };
export const slideFromRight: Variants = { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } } };

export function ReducedMotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function FadeIn({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} transition={{ delay }}>{children}</motion.div>;
}

export function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <p className="section-label"><span>{number}</span><span aria-hidden="true" className="label-line" />{children}</p>;
}

export function RevealHeading({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <h2 className={`reveal-heading ${className}`}><motion.span initial={reduced ? false : 'hidden'} whileInView="visible" viewport={{ once: true }} variants={maskedHeading}>{children}</motion.span></h2>;
}

export function MagneticButton({ href, children, secondary = false, external = false }: { href: string; children: ReactNode; secondary?: boolean; external?: boolean }) {
  const reduced = useReducedMotion();
  const horizontal = useMotionValue(0);
  const vertical = useMotionValue(0);
  const x = useSpring(horizontal, { stiffness: 220, damping: 24 });
  const y = useSpring(vertical, { stiffness: 220, damping: 24 });
  return <motion.a href={href} className={`action-button ${secondary ? 'action-secondary' : ''}`} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} style={{ x, y }} onPointerMove={(event) => {
    if (reduced || event.pointerType !== 'mouse' || !window.matchMedia('(min-width: 1100px) and (hover: hover)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    horizontal.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 6);
    vertical.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 6);
  }} onPointerLeave={() => { horizontal.set(0); vertical.set(0); }}>{children}</motion.a>;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="scroll-progress" aria-hidden="true" style={{ scaleX: scrollYProgress }} />;
}

function CursorTrail({ horizontal, vertical, opacity, index }: { horizontal: MotionValue<number>; vertical: MotionValue<number>; opacity: MotionValue<number>; index: number }) {
  const x = useSpring(horizontal, { stiffness: 170 - index * 35, damping: 23 });
  const y = useSpring(vertical, { stiffness: 170 - index * 35, damping: 23 });
  return <motion.span className={`cursor-trail cursor-trail-${index}`} style={{ x, y, opacity }} />;
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number; id: number } | null>(null);
  const clickId = useRef(0);
  const horizontal = useMotionValue(-100);
  const vertical = useMotionValue(-100);
  const opacity = useMotionValue(0);
  const hover = useMotionValue(0);
  const scale = useMotionValue(1);
  const x = useSpring(horizontal, { stiffness: 400, damping: 35 });
  const y = useSpring(vertical, { stiffness: 400, damping: 35 });
  const size = useSpring(scale, { stiffness: 200, damping: 20 });
  const trailX = useTransform(horizontal, (value) => value + 12);
  const trailY = useTransform(vertical, (value) => value + 12);
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1100px) and (pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)');
    const update = () => { setEnabled(query.matches); opacity.set(0); setRipple(null); };
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, [opacity]);
  useEffect(() => {
    if (!enabled) return;
    function move(event: PointerEvent) {
      if (event.pointerType !== 'mouse') { opacity.set(0); return; }
      horizontal.set(event.clientX - 14); vertical.set(event.clientY - 14); opacity.set(1);
    }
    function highlight(event: PointerEvent) {
      const interactive = event.target instanceof Element && !!event.target.closest('a, button:not(:disabled), input, textarea, select, summary');
      scale.set(interactive ? 1.7 : 1); hover.set(interactive ? 1 : 0);
    }
    function click(event: PointerEvent) {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
      setRipple({ x: event.clientX - 20, y: event.clientY - 20, id: ++clickId.current });
    }
    function hide() { opacity.set(0); }
    function keyboard(event: KeyboardEvent) { if (event.key === 'Tab') hide(); }
    function visibility() { if (document.hidden) { hide(); setRipple(null); } }
    document.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerover', highlight, { passive: true });
    document.addEventListener('pointerdown', click, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);
    document.addEventListener('keydown', keyboard);
    document.addEventListener('visibilitychange', visibility);
    window.addEventListener('blur', hide);
    return () => {
      document.removeEventListener('pointermove', move); document.removeEventListener('pointerover', highlight);
      document.removeEventListener('pointerdown', click); document.documentElement.removeEventListener('pointerleave', hide);
      document.removeEventListener('keydown', keyboard); document.removeEventListener('visibilitychange', visibility);
      window.removeEventListener('blur', hide);
    };
  }, [enabled, horizontal, vertical, scale, hover, opacity]);
  return enabled ? <div aria-hidden="true" className="cursor-effects">
    {[0, 1, 2].map((index) => <CursorTrail key={index} index={index} horizontal={trailX} vertical={trailY} opacity={opacity} />)}
    <motion.div className="cursor-enhancement" style={{ x, y, scale: size, opacity }}>
      <motion.span className="cursor-orbit" style={{ opacity: hover }} />
      <span className="cursor-center" />
    </motion.div>
    {ripple && <motion.span key={ripple.id} className="cursor-ripple" style={{ x: ripple.x, y: ripple.y }} initial={{ scale: 0.45, opacity: 0.6 }} animate={{ scale: 2.2, opacity: 0 }} transition={{ duration: 0.55, ease }} onAnimationComplete={() => setRipple((current) => current?.id === ripple.id ? null : current)} />}
  </div> : null;
}

export function useDialog(open: boolean) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!open || !ref.current) return;
    const dialog = ref.current;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    function keyboard(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        dialog.close();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>('a[href], button, input, textarea, select, [tabindex]')).filter((element) => element.tabIndex >= 0 && !element.hasAttribute('disabled') && element.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first && last) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last && first) { event.preventDefault(); first.focus(); }
    }
    dialog.addEventListener('keydown', keyboard);
    return () => {
      dialog.removeEventListener('keydown', keyboard);
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [open]);
  return ref;
}