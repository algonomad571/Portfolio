import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, FileDown, Briefcase, Mail } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <ParticlesBackground />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <span className="text-secondary font-mono mb-2">Hello there! 👋</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hey, I'm <span className="gradient-text">Muskan</span>
              <span className="block mt-2">
                Web2 & Web3 Developer <span className="text-primary">|</span> DeFi + MEV Enthusiast
              </span>
            </h1>
            <p className="text-white/70 text-lg mb-8 max-w-lg">
              Building innovative solutions at the intersection of traditional web development and blockchain technology. Let's create something amazing together.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn btn-primary">
                <Briefcase className="mr-2 h-4 w-4" />
                View Projects
              </a>
              <a href="/Resume.pdf" download className="btn btn-secondary">
                <FileDown className="mr-2 h-4 w-4" />
                Download Resume
              </a>
              <a href="#contact" className="btn btn-accent">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative inline-block">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative profile-glow">
                <img
                  src="/1721759514220.jpeg"
                  alt="Muskan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glassmorphism p-3 rounded-lg">
                <span className="text-sm font-mono text-primary">Student Developer</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ opacity: scrolled ? 0 : 1, transition: 'opacity 0.5s' }}
        >
          <a href="#about" className="text-white/50 hover:text-white transition-colors">
            <ArrowDownCircle className="h-10 w-10" />
            <span className="sr-only">Scroll down</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;