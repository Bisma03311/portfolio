import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-surface/50 border-t border-border mt-20 pt-16 pb-8">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tighter mb-4 inline-block hover:text-accent transition-colors">
              BISMA<span className="text-accent">.</span>
            </Link>
            <p className="text-text-secondary mb-4 max-w-sm">
              {portfolioData.personal.summary}
            </p>
            <div className="flex space-x-4">
              <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white transition-all interactive-card">
                <Linkedin size={18} />
              </a>
              <a href={portfolioData.personal.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white transition-all interactive-card">
                <Github size={18} />
              </a>
              <a href={portfolioData.personal.socials.portfolio} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white transition-all interactive-card">
                <Globe size={18} />
              </a>
              <a href={`mailto:${portfolioData.personal.email}`} className="w-10 h-10 rounded-full bg-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white transition-all interactive-card">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects'].map(item => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-text-secondary hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">More</h4>
            <ul className="space-y-3">
              {['Experience', 'Leadership', 'Contact'].map(item => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-text-secondary hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
          <p>© {currentYear} Bisma Ahmad. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="hover:text-text-primary transition-colors cursor-pointer">AI Engineer</span>
            <span className="hover:text-text-primary transition-colors cursor-pointer">Designer</span>
            <span className="hover:text-text-primary transition-colors cursor-pointer">Writer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
