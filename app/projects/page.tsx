'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageTransition from '@/components/PageTransition';
import { portfolioData } from '@/data/portfolio';
import { Github, ExternalLink, X, Terminal } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = ['All', 'Python', 'AI', 'Design', 'Content', 'Marketing'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <PageTransition>
      <div className="container mx-auto px-6 max-w-7xl py-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Selected Works</h1>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
            Exploring the intersection of logic and creativity through functional prototypes, designs, and content.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f 
                  ? 'bg-accent text-white border-accent' 
                  : 'bg-surface/50 text-text-secondary border-border hover:border-accent hover:text-white'
              } border`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative bg-surface/30 border border-border rounded-sm overflow-hidden interactive-card flex flex-col h-full cursor-pointer hover:border-accent/50 transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                {/* Decorative glowing gradient */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-mono px-3 py-1 bg-border/50 rounded-sm text-text-secondary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <span className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all text-text-secondary">
                        <ArrowRightIcon />
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="text-xs font-mono text-text-secondary">
                        {tech}{idx < Math.min(project.technologies.length, 4) - 1 ? ' • ' : ''}
                      </span>
                    ))}
                    {project.technologies.length > 4 && <span className="text-xs font-mono text-text-secondary"> • +{project.technologies.length - 4}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="py-20 text-center"
          >
            <p className="text-text-secondary text-lg">No projects found for this category yet.</p>
          </motion.div>
        )}

      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-background/90 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-surface border border-border rounded-sm shadow-2xl overflow-hidden my-auto"
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/50 hover:bg-accent hover:text-white rounded-full flex items-center justify-center border border-border hover:border-accent transition-all backdrop-blur-md"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-12 max-h-[85vh] overflow-y-auto custom-scrollbar">
                <span className="text-accent text-sm font-mono tracking-widest uppercase mb-4 block">
                  {selectedProject.platform}
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{selectedProject.title}</h2>
                
                <p className="text-lg text-text-secondary leading-relaxed mb-10">
                  {selectedProject.description}
                </p>

                {selectedProject.demo === 'terminal' && (
                  <div className="mb-10 rounded-sm border border-border bg-[#0A0A0C] overflow-hidden shadow-xl">
                    <div className="flex items-center px-4 py-3 border-b border-border bg-[#16161A]">
                      <Terminal size={16} className="text-text-secondary mr-2" />
                      <div className="text-xs font-mono text-text-secondary">chatbot.py</div>
                    </div>
                    <div className="p-6 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                      <p className="text-green-400 mb-2">$ python chatbot.py</p>
                      <p className="text-text-secondary mb-1">Initializing chatbot...</p>
                      <p className="text-white mb-1">[OK] Python loaded</p>
                      <p className="text-white mb-1">[OK] Rules loaded</p>
                      <p className="text-white mb-1">[OK] Random responses loaded</p>
                      <p className="text-white mb-4">[OK] Datetime module loaded</p>
                      <p className="text-accent mb-4">Chatbot ready.</p>
                      
                      <div className="space-y-3">
                        <p><span className="text-text-secondary">You:</span> <span className="text-white">hello</span></p>
                        <p><span className="text-accent">Bot:</span> <span className="text-white">Hey! How can I help?</span></p>
                        <p><span className="text-text-secondary">You:</span> <span className="text-white">what time is it?</span></p>
                        <p><span className="text-accent">Bot:</span> <span className="text-white">Current time: 10:42 PM</span></p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 border-b border-border pb-2">Features</h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-accent mt-1">▹</span>
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 border-b border-border pb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, idx: number) => (
                        <span key={idx} className="px-3 py-1.5 bg-background border border-border text-text-primary rounded-sm text-sm font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-background border border-border hover:border-white hover:text-white rounded-sm transition-all interactive-card">
                    <Github size={18} />
                    <span>View Repository</span>
                  </a>
                  {selectedProject.demo && selectedProject.demo !== 'terminal' && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent border border-accent text-white hover:bg-accent-hover rounded-sm transition-all interactive-card">
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </PageTransition>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
