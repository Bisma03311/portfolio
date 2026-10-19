'use client';

import { motion, Variants } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  const { personal, stats } = portfolioData;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col justify-center items-center py-12 lg:py-24 text-center">
          
          <motion.div 
            className="w-full max-w-4xl flex flex-col items-center justify-center space-y-8 z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter text-white">
                {personal.name.toUpperCase()}
              </h1>
              <h2 className="text-accent uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
                {personal.titles.join(' | ')}
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold font-display tracking-tight leading-tight mt-6">
                {personal.headline.split(' ').map((word, i) => (
                  <span key={i} className="inline-block mx-1.5 mb-2">
                    {word === 'AI' || word === 'creativity.' ? (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary drop-shadow-[0_0_10px_rgba(255,85,0,0.5)]">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                  </span>
                ))}
              </h3>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              {personal.summary}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/projects" className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-accent border border-accent rounded-sm overflow-hidden interactive-card">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center gap-2">
                  Explore My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-text-primary bg-transparent border border-border rounded-sm hover:border-accent hover:text-accent transition-all duration-300 interactive-card">
                <span className="relative flex items-center gap-2">
                  Let&apos;s Connect
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}
