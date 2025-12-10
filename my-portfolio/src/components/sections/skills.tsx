'use client';

import { motion } from 'framer-motion';
import { SkillCategory } from '@/components/ui/skill-category';
import { skills } from '@/data/experience';

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCategory 
              key={skill.category} 
              skill={skill} 
              index={index} 
            />
          ))}
        </div>

        {/* Additional Skills Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-card border border-border rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-foreground mb-3">Always Learning</h3>
            <p className="text-muted-foreground">
              I&apos;m committed to continuous learning. 
              Currently exploring advanced cloud architectures, microservices patterns, 
              and the latest developments in AI/ML.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}