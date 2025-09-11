'use client';

import { useEffect } from 'react';
import NavBar from './components/NavBar';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { ExperienceSection } from '@/components/sections/experience';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { ContactSection } from '@/components/sections/contact';
import Link from 'next/link';
import { personalInfo } from '@/data/personal';

export default function Home() {
  useEffect(() => {
    fetch(`/api/track?path=${encodeURIComponent(window.location.pathname)}`);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {personalInfo.name}
                </h3>
                <p className="text-muted-foreground mb-4 max-w-md">
                  {personalInfo.bio.short}
                </p>
                <p className="text-sm text-muted-foreground">
                  © {currentYear} {personalInfo.name}. All rights reserved.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
                <div className="space-y-2">
                  <Link href="#about" className="block text-muted-foreground hover:text-accent transition-colors">
                    About
                  </Link>
                  <Link href="#skills" className="block text-muted-foreground hover:text-accent transition-colors">
                    Skills
                  </Link>
                  <Link href="#projects" className="block text-muted-foreground hover:text-accent transition-colors">
                    Projects
                  </Link>
                  <Link href="#experience" className="block text-muted-foreground hover:text-accent transition-colors">
                    Experience
                  </Link>
                  <Link href="#contact" className="block text-muted-foreground hover:text-accent transition-colors">
                    Contact
                  </Link>
                </div>
              </div>

              {/* Connect */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Connect</h4>
                <div className="space-y-2">
                  <Link 
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-accent transition-colors"
                  >
                    GitHub
                  </Link>
                  <Link 
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </Link>
                  <Link 
                    href={`mailto:${personalInfo.email}`}
                    className="block text-muted-foreground hover:text-accent transition-colors"
                  >
                    Email
                  </Link>
                  <Link 
                    href={personalInfo.resumeUrl}
                    download
                    className="block text-muted-foreground hover:text-accent transition-colors"
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
