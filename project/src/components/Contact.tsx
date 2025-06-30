import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, url: 'https://github.com/algonomad571' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: 'https://www.linkedin.com/in/algonomad571/' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: 'https://x.com/muskan571' },
    { name: 'Email', icon: <Mail className="h-5 w-5" />, url: 'mailto:muskansrivastav517@gmail.com' },
  ];

  return (
    <section id="contact" className="section-padding bg-background-light relative z-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            className="section-title mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind or just want to connect? Feel free to reach out through any of these channels.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 z-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary w-full flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
              </button>

              {submitted && (
                <div className="p-3 rounded-lg bg-success/20 text-success text-center">
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:pl-10"
          >
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

            <div className="space-y-6">
              <p className="text-white/70">
                Whether you have a question, project idea, or just want to say hello, I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <h4 className="text-lg font-bold">Find me on</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-background hover:bg-white/10 transition-colors"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 glassmorphism rounded-lg">
                <h4 className="text-lg font-bold mb-2">Wallet Address</h4>
                <p className="text-sm font-mono bg-background p-3 rounded-md overflow-x-auto">
                  0x71C7656EC7ab88b098defB751B7401B5f6d8976F
                </p>
                <p className="text-xs text-white/50 mt-2">
                  Available for Web3 collaborations
                </p>
              </div>

              <div className="p-6 glassmorphism rounded-lg">
                <h4 className="text-lg font-bold mb-2">Looking for</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                    Web3 development projects
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-2"></span>
                    Hackathon teammates
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2"></span>
                    Open source contributions
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
