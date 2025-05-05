import React from 'react';
import { Code2, ChevronUp, Github } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-background py-8 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code2 className="w-6 h-6 text-primary mr-2" />
            <span className="font-mono text-lg">Muskan<span className="text-primary">.</span></span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Muskan. All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-end mt-2 space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-primary transition-colors text-sm flex items-center"
              >
                <Github className="w-4 h-4 mr-1" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;