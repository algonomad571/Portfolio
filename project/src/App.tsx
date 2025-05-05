import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CodingProfiles from './components/CodingProfiles';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MotionConfig } from 'framer-motion';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
        <div className="flex flex-col min-h-screen bg-background">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <CodingProfiles />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </QueryClientProvider>
  );
}

export default App;