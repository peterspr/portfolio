'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/data/experience';

interface SkillCategoryProps {
  skill: Skill;
  index: number;
}

export function SkillCategory({ skill, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-3"
    >
      <h3 className="font-semibold text-foreground text-lg">
        {skill.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item, itemIndex) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.3, 
              delay: (index * 0.1) + (itemIndex * 0.05) 
            }}
            className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/80 transition-colors cursor-default"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}