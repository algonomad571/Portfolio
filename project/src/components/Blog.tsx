import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding MEV and Its Impact on DeFi',
    excerpt: 'An exploration of Maximal Extractable Value, how it affects DeFi protocols, and strategies for mitigation.',
    date: 'April 15, 2025',
    readTime: '7 min read',
    tags: ['web3', 'defi', 'mev'],
  },
  {
    id: 2,
    title: 'Building Responsive UIs with React and Framer Motion',
    excerpt: 'A deep dive into creating fluid, responsive interfaces using React hooks and animation libraries.',
    date: 'March 22, 2025',
    readTime: '5 min read',
    tags: ['web2', 'react', 'ui'],
  },
  {
    id: 3,
    title: 'My Journey Through siNUsoid v8 Hackathon',
    excerpt: 'A personal account of the challenges, insights, and victory at one of the most competitive hackathons.',
    date: 'February 10, 2025',
    readTime: '9 min read',
    tags: ['collegeLife', 'hackathon'],
  },
];

const Blog = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            className="section-title mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.h2>
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Documenting my journey, sharing insights, and exploring technical concepts through my writing.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants} className="glassmorphism overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-3 text-xs text-white/50">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-white/70 mb-4 text-sm">{post.excerpt}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`text-xs px-2 py-1 rounded-full ${
                        tag === 'web3' || tag === 'defi' || tag === 'mev'
                          ? 'bg-primary/20 text-primary'
                          : tag === 'web2' || tag === 'react' || tag === 'ui'
                          ? 'bg-secondary/20 text-secondary'
                          : 'bg-accent/20 text-accent'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-10">
          <a href="#" className="btn btn-secondary inline-flex items-center">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;