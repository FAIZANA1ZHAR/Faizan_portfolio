import { Metadata } from 'next';
import Header from '@/components/layout/header';
import HeroScene from '@/components/sections/hero-scene';
import PortfolioContent, { PortfolioFooter } from '@/components/sections/portfolio-content';
import Contact from '@/components/sections/contact-draft';
import { ScrollHandler } from '@/components/ui/ScrollHandler';

export const metadata: Metadata = {
  title: 'Azure, AI & Power Platform Consultant',
  description: 'Faizan Azhar, Senior Technical & Functional Consultant. 6+ years delivering enterprise Azure infrastructure, applied AI, and Microsoft Power Platform solutions.',
};

export default function Home() {
  return (
    <>
      <ScrollHandler />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content" className="portfolio-main">
        <HeroScene />
        <PortfolioContent />
        <Contact />
      </main>
      <PortfolioFooter />
    </>
  );
}