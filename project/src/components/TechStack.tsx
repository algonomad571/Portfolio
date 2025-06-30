import React from 'react';
import { motion } from 'framer-motion';

interface TechCategory {
  icon: string;
  title: string;
  skills: string[];
}

const techCategories: TechCategory[] = [
  {
    icon: '',
    title: 'Blockchain & Smart Contracts',
    skills: ['Solidity', 'Ethereum', 'Binance Smart Chain', 'ERC-20', 'ERC-721', 'ERC-1155'],
  },
  {
    icon: '',
    title: 'Development Tools',
    skills: ['Hardhat', 'Foundry', 'Truffle', 'Ganache', 'Web3.js', 'Ethers.js', 'Infura', 'IPFS'],
  },
  {
    icon: '',
    title: 'Security & Debugging',
    skills: ['Code Analysis', 'Git', 'VSCode','GitHub','Postman'],
  },
  {
    icon: '',
    title: 'Programming Languages',
    skills: ['C++', 'Python', 'JavaScript','SQL'],
  },
  {
    icon: '',
    title: 'Backend & APIs',
    skills: ['Node.js', 'Flask', 'REST APIs', 'FastAPI', 'MongoDB','JWT','OAuth 2.0'],
  }
];

const TechStack = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {techCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glassmorphism p-6"
        >
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <span className="mr-2">{category.icon}</span>
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-background rounded-full text-sm text-white/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;