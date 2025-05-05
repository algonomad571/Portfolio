import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TechStack from './TechStack';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-background-light">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1">
            <motion.h2 variants={itemVariants} className="section-title">
              About Me
            </motion.h2>
            
            <motion.div variants={itemVariants} className="space-y-4 text-white/80">
              <p>
                I'm a student developer passionate about creating innovative solutions that span both traditional web platforms and blockchain technologies. Currently, I'm focused on my academic studies while actively participating in hackathons and building personal projects.
              </p>
              <p>
                My journey in tech started with Web2 development, mastering frameworks like React and Node.js. As I discovered the potential of blockchain, I expanded my skills to include Solidity, Hardhat, and other Web3 technologies.
              </p>
              <p>
                I'm particularly interested in DeFi protocols and MEV (Maximal Extractable Value) - areas where traditional finance meets cutting-edge blockchain innovation. When I'm not coding, I'm contributing to the developer community and sharpening my skills as the subject head for Mathematics.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-2 text-white">My Tech Stack</h3>
                <TechStack />
              </div>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-sm">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden animated-border-accent p-1">
                <img
                  src="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg"
                  alt="Muskan working on code"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glassmorphism p-4 rounded-lg">
                <p className="font-mono text-sm">
                  <span className="text-secondary">function</span>{" "}
                  <span className="text-primary">solveProblems</span>() &#123; 
                  <span className="block pl-4">return <span className="text-secondary">solutions</span>;</span>
                  &#125;
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;