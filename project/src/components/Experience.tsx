import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Code, Book, Users } from 'lucide-react';

const experiences = [
  {
    title: 'Hackathon Winner - Mapmy India Hackathon',
    date: 'March 2025',
    description: 'Secured 1st place by building a location-based platform for NGO event and volunteer management using MapmyIndia APIs.',
    icon: <Award className="h-6 w-6 text-primary" />,
    category: 'achievement'
  },
  {
    title: 'Hackathon RunnerUp - Taipei Blockchain Week',
    date: 'December 2024',
    description: 'Secured 4th place by building a telegram gateweay for a decentralized exchange using Solidity and React on BNB chain.',
    icon: <Award className="h-6 w-6 text-primary" />,
    category: 'achievement'
  },
  {
    title: 'Web3 Development Certification',
    date: 'December 2024',
    description: 'Completed an intensive 3-month program on blockchain technology, smart contracts, and dApp development.',
    icon: <Book className="h-6 w-6 text-accent" />,
    category: 'education'
  },
  {
    title: 'Open Source Contributor',
    date: 'October 2024 - November 2024',
    description: 'Implemented secure session handling, Dijkstra’s pathfinding, and dynamic graph input to enhance backend functionality. Integrated React and Node.js for real-time messaging, enabling smooth, low-latency user interactions. Ranked 99 overall with 12+ merged PRs; adhered to best coding practices and open-source standards.',
    icon: <Code className="h-6 w-6 text-secondary" />,
    category: 'hackathon'
  },
  {
    title: 'Technical and RnD Team- Blockchain Club',
    date: 'September 2024 - Present',
    description: 'Collaborating with a team of 20+ members to develop innovative blockchain solutions. Leading the development of a decentralized application for secure data sharing and storage.',
    icon: <Users className="h-6 w-6 text-primary" />,
    category: 'leadership'
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="section-padding bg-background-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            className="section-title mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Experience & Achievements
          </motion.h2>
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My journey through hackathons, education, and leadership roles has shaped my approach to problem-solving and collaboration.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div ref={ref} className="timeline-container">
            {experiences.map((experience, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex">
                  <div className="glassmorphism p-4 flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg">{experience.title}</h3>
                      <span className="text-xs text-white/50 font-mono">{experience.date}</span>
                    </div>
                    <p className="text-white/70">{experience.description}</p>
                  </div>
                  <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full glassmorphism">
                    {experience.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;