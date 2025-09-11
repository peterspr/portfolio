'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ContactForm } from '@/components/ui/contact-form';
import { Github, Linkedin, Mail, MapPin, Clock } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Work Together
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and interesting projects. 
            Whether you&apos;re a company looking for a developer or have a project in mind, 
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <Link 
                      href={`mailto:${personalInfo.email}`}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {personalInfo.email}
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <Link 
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors group"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors group"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link 
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors group"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-foreground">Available for Work</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently open to full-time opportunities, consulting projects, 
                and interesting collaborations.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send me a message
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}