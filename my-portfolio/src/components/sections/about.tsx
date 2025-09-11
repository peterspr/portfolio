'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {personalInfo.bio.detailed.map((paragraph, index) => (
              <p 
                key={index}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Facts */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Location:</span>
                  <span className="ml-2 text-foreground font-medium">{personalInfo.location}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <Link 
                    href={`mailto:${personalInfo.email}`}
                    className="ml-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    {personalInfo.email}
                  </Link>
                </div>
                <div>
                  <span className="text-muted-foreground">Status:</span>
                  <span className="ml-2 text-foreground font-medium">Open to opportunities</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <span 
                    key={interest}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <Link 
              href={personalInfo.resumeUrl}
              download
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}