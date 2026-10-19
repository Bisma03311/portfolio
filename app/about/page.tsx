'use client';

import { motion } from 'motion/react';
import PageTransition from '@/components/PageTransition';
import { portfolioData } from '@/data/portfolio';
import { ArrowDown } from 'lucide-react';

export default function About() {
  const { education } = portfolioData;

  const timelineSteps = [
    { title: 'Education', desc: 'Foundational studies' },
    { title: 'Creative Skills', desc: 'Design & content' },
    { title: 'Freelance Experience', desc: 'Global clients' },
    { title: 'AI Engineering', desc: 'Current focus' },
    { title: 'Future Projects', desc: 'Building ideas' }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-6 max-w-7xl py-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Me</h1>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <p className="text-xl text-text-secondary max-w-3xl leading-relaxed">
            I am a creative and detail-oriented professional with interests spanning AI engineering, graphic design, logo design, content writing, marketing, branding, and technology. My goal is to combine creative and analytical skills to deliver impactful technology-driven solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
              <span className="text-accent">/</span> The Journey
            </h2>
            
            <div className="relative border-l border-border ml-3 space-y-12 pb-8">
              {timelineSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative pl-8 group"
                >
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-surface border border-border rounded-full group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_10px_rgba(255,85,0,0.5)] transition-all duration-300"></div>
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">{step.title}</h3>
                  <p className="text-text-secondary mt-1">{step.desc}</p>
                  
                  {i < timelineSteps.length - 1 && (
                    <div className="absolute left-[-24px] bottom-[-32px] text-border group-hover:text-accent/50 transition-colors">
                      <ArrowDown size={16} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
              <span className="text-accent">/</span> Education
            </h2>

            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="p-6 bg-surface/30 border border-border rounded-sm hover:border-accent/50 transition-colors interactive-card group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{edu.degree}</h3>
                    <span className="text-xs font-mono px-2 py-1 bg-border/50 rounded-sm text-text-secondary uppercase tracking-wider">{edu.status}</span>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-8 border border-border/50 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-surface to-surface rounded-sm">
              <h3 className="text-xl font-semibold mb-4 text-white">Continuous Learning</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Constantly expanding my horizons through hands-on projects, self-directed study, and professional courses in both technical and creative domains.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </PageTransition>
  );
}
