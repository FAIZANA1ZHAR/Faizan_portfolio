'use client';

import { useState, type CSSProperties } from 'react';
import { motion, useMotionValue, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { portfolioConfig } from '@/data/portfolioConfig';
import { createDraftUrl, validateContactField, type ContactFields, type EmailClient } from '@/lib/email';
import { FadeIn, RevealHeading, SectionLabel } from './motion';

const fieldNames: (keyof ContactFields)[] = ['name', 'email', 'subject', 'message'];
const fieldLabels: Record<keyof ContactFields, string> = { name: 'Name', email: 'Email', subject: 'Subject', message: 'Message' };
const placeholders: ContactFields = { name: 'Your name', email: 'you@company.com', subject: 'Project or opportunity', message: 'A little about your challenge, goals, and timeline...' };

export function ContactForm() {
  const [fields, setFields] = useState<ContactFields>({ name: '', email: '', subject: '', message: '' });
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFields, boolean>>>({});
  const [client, setClient] = useState<EmailClient>('default');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('');
  const errors = Object.fromEntries(fieldNames.map((field) => [field, validateContactField(field, fields[field])])) as Record<keyof ContactFields, string>;
  const valid = fieldNames.every((field) => !errors[field]);
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!valid || company) { setStatus('Please check the form before opening a draft.'); return; }
    const url = createDraftUrl(fields, client, portfolioConfig.email);
    if (client === 'default') window.location.href = url;
    else window.open(url, '_blank', 'noopener,noreferrer');
    setStatus('Draft requested. Review and send it in your email application. If nothing opened, choose Gmail or Outlook on the web.');
  }
  return <form className="consulting-form" onSubmit={submit} noValidate autoComplete="off">
    <div className="form-intro"><Mail size={18} /><h3>Start a conversation</h3><span className="mono">EMAIL DRAFT</span></div>
    <div className="form-fields">{fieldNames.map((field) => {
      const showError = !!touched[field] && !!errors[field];
      const attributes = { id: `contact-${field}`, name: field, value: fields[field], required: true, placeholder: placeholders[field], maxLength: field === 'message' ? 5000 : field === 'email' ? 254 : field === 'name' ? 100 : 200, 'aria-invalid': showError, 'aria-describedby': `${field}-error${field === 'message' ? ' message-counter' : ''}`, onBlur: () => setTouched((previous) => ({ ...previous, [field]: true })), onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { setFields((previous) => ({ ...previous, [field]: event.target.value })); setStatus(''); } };
      return <div key={field} className={`form-field field-${field}`}><label htmlFor={attributes.id}>{fieldLabels[field]}</label>{field === 'message' ? <textarea {...attributes} rows={5} /> : <input {...attributes} type={field === 'email' ? 'email' : 'text'} autoComplete={field === 'name' ? 'name' : field === 'email' ? 'email' : 'off'} />}<div className="field-feedback"><span id={`${field}-error`} className="field-error" aria-live="polite">{showError ? errors[field] : ''}</span>{field === 'message' && <span id="message-counter" className="character-counter mono">{fields.message.length} / 5000</span>}</div></div>;
    })}</div>
    <div className="honeypot" aria-hidden="true"><label htmlFor="contact-company">Company website</label><input id="contact-company" name="company_website" tabIndex={-1} autoComplete="off" value={company} onChange={(event) => setCompany(event.target.value)} /></div>
    <div className="draft-controls"><label htmlFor="email-client">Email application</label><select id="email-client" value={client} onChange={(event) => { setClient(event.target.value as EmailClient); setStatus(''); }}><option value="default">Default email application</option><option value="gmail">Gmail</option><option value="outlook">Outlook on the web</option></select><button type="submit" className="action-button" disabled={!valid || !!company}>Open email draft <ArrowUpRight size={18} /></button></div>
    <p className="draft-notice">A draft will open in your chosen email application. Nothing is sent automatically.</p><p className="form-status" role="status">{status}</p>
  </form>;
}

export default function ContactSection() {
  const reduced = useReducedMotion();
  const highlightX = useMotionValue('50%');
  const highlightY = useMotionValue('50%');
  return <motion.section id="contact" className="section consulting-contact" style={{ '--highlight-x': highlightX, '--highlight-y': highlightY } as CSSProperties} onPointerMove={(event) => {
    if (reduced || event.pointerType !== 'mouse' || !window.matchMedia('(min-width: 1100px) and (hover: hover)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    highlightX.set(`${(event.clientX - bounds.left) / bounds.width * 100}%`); highlightY.set(`${(event.clientY - bounds.top) / bounds.height * 100}%`);
  }}><div className="shell consulting-contact-layout"><FadeIn className="contact-statement"><SectionLabel number="05">LET&apos;S CONNECT</SectionLabel><RevealHeading>Let&apos;s build<br /><span>something that matters.</span></RevealHeading><p className="section-intro">Have an enterprise challenge, an AI idea, or a role in mind? Let&apos;s talk.</p><div className="contact-methods"><a href={`mailto:${portfolioConfig.email}`}><Mail size={20} /><span>{portfolioConfig.email}</span><ArrowUpRight size={16} /></a>{portfolioConfig.professionalEmail && <a href={`mailto:${portfolioConfig.professionalEmail}`}><Mail size={20} /><span>{portfolioConfig.professionalEmail}</span></a>}{portfolioConfig.phone && <a href={`tel:${portfolioConfig.phone}`}><Phone size={20} /><span>{portfolioConfig.phone}</span></a>}<p><MapPin size={20} /><span>{portfolioConfig.location}</span></p></div><div className="contact-socials">{portfolioConfig.socials.linkedin && <a href={portfolioConfig.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} />LinkedIn <ArrowUpRight size={15} /></a>}{portfolioConfig.socials.github && <a href={portfolioConfig.socials.github} target="_blank" rel="noopener noreferrer"><Github size={18} />GitHub <ArrowUpRight size={15} /></a>}</div></FadeIn><FadeIn className="contact-form-wrap"><ContactForm /></FadeIn></div></motion.section>;
}