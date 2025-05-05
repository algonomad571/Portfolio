import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { type Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 } 
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="glassmorphism overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {project.featured && (
          <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </div>
        )}
        <div className={`absolute top-3 right-3 ${project.category === 'web2' ? 'bg-secondary' : 'bg-primary'} text-white px-3 py-1 rounded-full text-xs font-medium`}>
          {project.category === 'web2' ? 'Web2' : 'Web3'}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-white/70 mb-4 text-sm">{project.description}</p>
        
        <div className="mb-4 flex flex-wrap gap-1">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-background rounded-md text-white/60">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-white/80 hover:text-primary text-sm transition-colors"
          >
            <Github className="w-4 h-4 mr-1" />
            Code
          </a>
          {project.comingSoon ? (
            <span className="flex items-center text-white/40 text-sm cursor-not-allowed">
              <ExternalLink className="w-4 h-4 mr-1" />
              Coming Soon!
            </span>
          ) : (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-white/80 hover:text-secondary text-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;