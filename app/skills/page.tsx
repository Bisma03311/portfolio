'use client';

import { motion } from 'motion/react';
import PageTransition from '@/components/PageTransition';
import { portfolioData } from '@/data/portfolio';
import { Sparkles, Code2, PenTool, Video, Briefcase, Lightbulb } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    { id: 'aiDesign', title: 'AI & Design', icon: Sparkles, data: skills.aiDesign },
    { id: 'programming', title: 'Programming', icon: Code2, data: skills.programming },
    { id: 'contentMarketing', title: 'Content & Marketing', icon: PenTool, data: skills.contentMarketing },
    { id: 'videoMedia', title: 'Video & Media', icon: Video, data: skills.videoMedia },
    { id: 'productivity', title: 'Productivity', icon: Briefcase, data: skills.productivity },
    { id: 'coreCompetencies', title: 'Core Competencies', icon: Lightbulb, data: skills.coreCompetencies },
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
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Technical Arsenal</h1>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
            A diverse toolkit combining analytical engineering capabilities with creative design and communication skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-sm bg-surface border border-border flex items-center justify-center text-accent">
                    <Icon size={20} />
                  </div>
                  <h2 className="text-xl font-display font-semibold">{category.title}</h2>
                </div>

                <div className="flex-grow bg-surface/30 border border-border rounded-sm p-6 relative overflow-hidden group hover:border-accent transition-all duration-300">
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors"></div>
                  
                  <ul className="space-y-4 relative z-10">
                    {category.data.map((skill, j) => (
                      <li key={j} className="flex items-start gap-3 group/item interactive-card">
                        <span className="text-accent mt-1 opacity-70 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-300">▹</span>
                        <span className="text-text-primary group-hover/item:text-white transition-colors">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Terminal UI snippet to emphasize tech context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="rounded-sm border border-border bg-surface overflow-hidden shadow-2xl">
            <div className="flex items-center px-4 py-2 border-b border-border bg-[#1A1A20]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="ml-4 text-xs font-mono text-text-secondary">skills.sh</div>
            </div>
            <div className="p-6 font-mono text-sm leading-loose">
              <p><span className="text-accent">~</span> <span className="text-white">./analyze_profile.sh</span></p>
              <p className="text-text-secondary mt-2">Loading core modules...</p>
              <p className="text-green-400">[OK] Design Patterns initialized.</p>
              <p className="text-green-400">[OK] Python runtime active.</p>
              <p className="text-green-400">[OK] Content Generation systems ready.</p>
              <p className="text-text-secondary mt-4">System ready for deployment.</p>
              <p className="mt-2"><span className="text-accent">~</span> <span className="animate-pulse">_</span></p>
            </div>
          </div>
        </motion.div>

      </div>
    </PageTransition>
  );
}
