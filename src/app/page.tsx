import { Metadata } from 'next';
import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import { TechStack } from '@/components/sections/tech-stack';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import { Certifications } from '@/components/sections/certifications';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import BlogPreview from '@/components/sections/blog-preview';
import { ScrollHandler } from '@/components/ui/ScrollHandler';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Senior Full Stack Developer specializing in Azure, AI solutions, and modern web technologies. View my projects, experience, and certifications.',
};

export default function Home() {
  return (
    <>
      <ScrollHandler />
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Certifications />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}