'use client';

import { useState } from 'react';
import { ArrowUpRight,Mail,MapPin,Phone } from 'lucide-react';
import { personalInfo } from '@/data/personal-info';

export default function Contact() {
  const [client,setClient]=useState('default');
  const [opened,setOpened]=useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields=new FormData(event.currentTarget);
    const subject=String(fields.get('subject')||'Portfolio enquiry');
    const body=`${fields.get('message')}\n\nFrom: ${fields.get('name')}\nReply to: ${fields.get('email')}`;
    const query=new URLSearchParams({ subject,body });
    if(client==='gmail') {
      const params=new URLSearchParams({ view: 'cm',fs: '1',to: personalInfo.email,su: subject,body });
      window.open(`https://mail.google.com/mail/?${params}`,'_blank','noopener,noreferrer');
    } else if(client==='outlook') {
      query.set('to',personalInfo.email);
      window.open(`https://outlook.live.com/mail/0/deeplink/compose?${query}`,'_blank','noopener,noreferrer');
    } else {
      window.location.href=`mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    setOpened(true);
  }

  return (
    <section id="contact" className="portfolio-contact">
      <div className="portfolio-container contact-grid">
        <div>
          <p className="eyebrow">05 / CONTACT</p>
          <h2>Let&apos;s build<br />something that matters.</h2>
          <p className="section-intro">Have an enterprise challenge, an AI idea, or a role in mind? Let&apos;s talk.</p>
          <div className="contact-details">
            <a href={`mailto:${personalInfo.email}`}><Mail size={20} />{personalInfo.email}</a>
            <a href={`tel:${personalInfo.phone}`}><Phone size={20} />{personalInfo.phone}</a>
            <span><MapPin size={20} />{personalInfo.location}</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} onChange={() => setOpened(false)} className="contact-form">
          <div className="form-row">
            <label>Name<input name="name" autoComplete="name" required placeholder="Your name" maxLength={100} /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" maxLength={254} /></label>
          </div>
          <label>Subject<input name="subject" required placeholder="What do you have in mind?" maxLength={200} /></label>
          <label>Message<textarea name="message" required rows={5} placeholder="A little about your project or opportunity..." maxLength={5000} /></label>
          <label>Email application
            <select value={client} onChange={(event) => { setClient(event.target.value); setOpened(false); }}>
              <option value="default">Default email app (Outlook, Apple Mail, etc.)</option>
              <option value="gmail">Gmail</option>
              <option value="outlook">Outlook on the web</option>
            </select>
          </label>
          <button type="submit" className="portfolio-button">Open email draft <ArrowUpRight size={18} /></button>
          {opened&&<p role="status" className="draft-status">Draft requested. Send it from your email application. If nothing opened, select Gmail or Outlook on the web.</p>}
        </form>
      </div>
    </section>
  );
}