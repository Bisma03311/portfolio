'use client';

import { motion } from 'motion/react';
import PageTransition from '@/components/PageTransition';
import { portfolioData } from '@/data/portfolio';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <PageTransition>
      <div className="container mx-auto px-6 max-w-7xl py-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Let&apos;s Build Something</h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            Have a project, idea, or opportunity? Let&apos;s connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-sm bg-surface/30 border border-border interactive-card group hover:border-accent/50 transition-colors flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
              <Mail size={24} />
            </div>
            <h3 className="text-sm font-mono text-text-secondary uppercase tracking-wider mb-3">Email</h3>
            <a href={`mailto:${personal.email}`} className="text-lg font-medium hover:text-accent transition-colors break-all">
              {personal.email}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-sm bg-surface/30 border border-border interactive-card group hover:border-accent/50 transition-colors flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
              <Phone size={24} />
            </div>
            <h3 className="text-sm font-mono text-text-secondary uppercase tracking-wider mb-3">Phone</h3>
            <a href={`tel:${personal.phone}`} className="text-lg font-medium hover:text-accent transition-colors">
              {personal.phone}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 rounded-sm bg-surface/30 border border-border interactive-card group hover:border-accent/50 transition-colors flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
              <MapPin size={24} />
            </div>
            <h3 className="text-sm font-mono text-text-secondary uppercase tracking-wider mb-3">Location</h3>
            <p className="text-lg font-medium">
              {personal.location}
            </p>
          </motion.div>
          
        </div>

      </div>
    </PageTransition>
  );
}
