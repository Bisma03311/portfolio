'use client';

import { motion } from 'motion/react';
import PageTransition from '@/components/PageTransition';
import { portfolioData } from '@/data/portfolio';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <PageTransition>
      <div className="container mx-auto px-6 max-w-7xl py-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Experience</h1>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
            Professional trajectory and applied creative skills in real-world scenarios.
          </p>
        </motion.div>

        <div className="max-w-4xl">
          <div className="relative border-l-2 border-border/50 ml-4 md:ml-6 space-y-16 pb-12">
            
            {/* Present Node */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-accent bg-background"
            />
            
            <div className="absolute -left-[5px] top-6 text-xs font-mono text-accent -rotate-90 origin-left tracking-widest bg-background px-2">
              PRESENT
            </div>

            {experience.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                className="relative pl-10 md:pl-16 group"
              >
                {/* Timeline Node */}
                <div className="absolute -left-[11px] top-6 w-5 h-5 rounded-full border-2 border-border bg-surface group-hover:border-accent group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-accent transition-colors"></div>
                </div>

                {/* Experience Card */}
                <div className="bg-surface/30 border border-border rounded-sm p-6 md:p-8 hover:border-accent/50 transition-colors interactive-card">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-text-secondary mt-2 font-mono text-sm">
                        <Briefcase size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-sm text-sm font-mono whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="border-t border-border/50 pt-6 mt-2">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">Key Responsibilities</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                      {exp.responsibilities.map((resp, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="text-accent mt-1">▹</span>
                          <span className="text-text-primary text-sm leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Start Node */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="absolute -left-[9px] bottom-0 w-4 h-4 rounded-full border-2 border-border bg-background"
            />
            <div className="absolute -left-[5px] bottom-6 text-xs font-mono text-text-secondary -rotate-90 origin-left tracking-widest bg-background px-2">
              2023
            </div>

          </div>
        </div>

      </div>
    </PageTransition>
  );
}
