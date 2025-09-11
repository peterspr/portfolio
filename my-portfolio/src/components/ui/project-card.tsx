'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { Github, ExternalLink, Download } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-border"
    >
      <div className="aspect-video relative overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Project Links Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <Link 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/90 hover:bg-background rounded-full transition-colors"
            >
              <Github className="w-4 h-4" />
            </Link>
          )}
          {project.demo && (
            <Link 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/90 hover:bg-background rounded-full transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          )}
          {project.download && (
            <Link 
              href={project.download}
              download
              className="p-2 bg-background/90 hover:bg-background rounded-full transition-colors"
            >
              <Download className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <Link 
          href={`/projects/${project.id}`}
          className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
        >
          Learn more
          <ExternalLink className="w-3 h-3 ml-1" />
        </Link>
      </div>
    </motion.div>
  );
}