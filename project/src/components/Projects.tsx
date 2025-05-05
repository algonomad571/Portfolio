import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { type Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Hriday Tarni',
    description: 'A comprehensive healthcare platform connecting patients with doctors for remote consultations and health monitoring.',
    category: 'web2',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
    image: 'https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  },
  {
    id: 2,
    title: 'NGOConnect',
    description: 'Platform connecting NGOs with volunteers and donors, featuring real-time project tracking and impact measurement.',
    category: 'web2',
    technologies: ['React', 'Firebase', 'Node.js', 'Express'],
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    githubUrl: 'https://github.com/algonomad571/NGOConnect.git',
    demoUrl: 'https://ngo-connect-bice.vercel.app/'
  },
  {
    id: 3,
    title: 'UrbanEye',
    description: 'Smart city monitoring system using IoT sensors and real-time data analytics for urban planning.',
    category: 'web2',
    technologies: ['Python', 'FastAPI', 'TensorFlow', 'React'],
    image: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  },
  {
    id: 4,
    title: 'Aarogya Saarthi',
    description: 'AI-powered health assistant for rural communities, providing medical guidance in local languages.',
    category: 'web2',
    technologies: ['Python', 'Flask', 'React Native', 'TensorFlow'],
    image: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  },
  {
    id: 5,
    title: 'AutoQuant',
    description: 'Automated quantitative trading system for DeFi markets with ML-driven strategy optimization.',
    category: 'web3',
    technologies: ['Solidity', 'Python', 'Web3.js', 'TensorFlow'],
    image: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg',
    githubUrl: 'https://github.com',
    demoUrl: '',
    comingSoon: true
  },
  {
    id: 6,
    title: 'BanklessAIpro',
    description: 'Decentralized AI marketplace for trading trained models and datasets using blockchain.',
    category: 'web3',
    technologies: ['Solidity', 'IPFS', 'React', 'Hardhat'],
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg',
    githubUrl: 'https://github.com',
    demoUrl: '',
    comingSoon: true
  },
  {
    id: 7,
    title: 'Yield-Optimizer',
    description: 'Smart contract system for automated yield farming across multiple DeFi protocols.',
    category: 'web3',
    technologies: ['Solidity', 'Web3.js', 'React', 'The Graph'],
    image: 'https://images.pexels.com/photos/8370727/pexels-photo-8370727.jpeg',
    githubUrl: 'https://github.com',
    demoUrl: '',
    comingSoon: true
  }
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Web2', value: 'web2' },
  { label: 'Web3', value: 'web3' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredProjects = projects.filter((project) =>
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            className="section-title mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A collection of my work across Web2 and Web3 technologies. Each project represents a unique challenge and solution.
          </motion.p>
        </div>

        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-flex p-1 bg-background-light rounded-lg">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.value
                    ? 'bg-primary text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;