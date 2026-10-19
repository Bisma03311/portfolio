import Link from 'next/link';
import { Terminal, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center container mx-auto px-6">
      <div
        className="w-full max-w-2xl rounded-sm border border-border bg-[#0A0A0C] overflow-hidden shadow-[0_0_50px_rgba(255,85,0,0.1)]"
      >
        <div className="flex items-center px-4 py-3 border-b border-border bg-[#16161A]">
          <Terminal size={16} className="text-accent mr-2" />
          <div className="text-xs font-mono text-text-secondary">system_error.log</div>
        </div>
        
        <div className="p-8 md:p-12 font-mono text-sm leading-loose">
          <p className="text-accent text-6xl md:text-8xl font-bold mb-6">404</p>
          <p className="text-white text-xl md:text-2xl mb-2">SYSTEM ERROR</p>
          <p className="text-text-secondary mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved to another node.
          </p>
          
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors border-b border-accent pb-1"
          >
            <Home size={16} />
            <span>Return to Root Directory</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
