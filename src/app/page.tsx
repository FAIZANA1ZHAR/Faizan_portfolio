import { Metadata } from 'next';
import { portfolioConfig } from '@/data/portfolioConfig';
import Navigation from '@/components/portfolio/navigation';
import Hero from '@/components/portfolio/hero';
import { ExpertiseSection, ExperienceTimeline, TechnologyMarquee, CredentialsSection } from '@/components/portfolio/content';
import ProjectsSection from '@/components/portfolio/projects';
import ContactSection from '@/components/portfolio/contact';
import Footer from '@/components/portfolio/footer';
import { ReducedMotionProvider, CustomCursor, ScrollProgress } from '@/components/portfolio/motion';
import { ScrollHandler } from '@/components/ui/ScrollHandler';

export const metadata: Metadata = {
  title: { absolute: `${portfolioConfig.fullName} | Azure, AI & Power Platform Consultant` },
  description: portfolioConfig.summary,
};

export default function Home() {
  return (
    <ReducedMotionProvider>
      <ScrollHandler />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollProgress />
      <CustomCursor />
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ExpertiseSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <TechnologyMarquee />
        <CredentialsSection />
        <ContactSection />
      </main>
      <Footer />
    </ReducedMotionProvider>
  );
}