'use client';

import { motion } from 'motion/react';
import PageTransition from '@/components/PageTransition';
import { Users, Target, Heart, Palette, Calendar, Flag } from 'lucide-react';

export default function Leadership() {
  const categories = [
    { title: 'Leadership', icon: Flag, color: 'text-blue-400' },
    { title: 'Teamwork', icon: Users, color: 'text-green-400' },
    { title: 'Community', icon: Heart, color: 'text-red-400' },
    { title: 'Creative Activities', icon: Palette, color: 'text-purple-400' },
    { title: 'Events', icon: Calendar, color: 'text-yellow-400' },
    { title: 'Initiatives', icon: Target, color: 'text-orange-400' }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-6 max-w-7xl py-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Leadership & Extracurricular</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-text-secondary leading-relaxed">
            A space dedicated to showcasing leadership experiences, teamwork, community involvement, creative initiatives, events, and extracurricular contributions.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto rounded-sm border border-border/50 bg-surface/30 p-8 md:p-12 overflow-hidden text-center backdrop-blur-sm"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10"></div>
          
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
            <Users size={28} />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">More activities coming soon.</h2>
          <p className="text-text-secondary mb-12 max-w-lg mx-auto">
            This section will be populated with specific achievements, organizations, and roles as they develop.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div 
                  key={cat.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center justify-center p-6 rounded-sm border border-dashed border-border/50 bg-background/50 text-text-secondary hover:border-border hover:text-text-primary transition-all group"
                >
                  <Icon size={24} className={`mb-3 opacity-50 group-hover:opacity-100 group-hover:${cat.color} transition-all`} />
                  <span className="text-sm font-medium">{cat.title}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </PageTransition>
  );
}
