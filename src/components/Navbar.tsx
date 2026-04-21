import { motion } from 'motion/react';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'À propos', href: '#about' },
    { name: 'Nos Actions', href: '#actions' },
    { name: 'Activités', href: '#activites' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-warm-bg/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <img 
                src="/Logo.png" 
                alt="TARAR Logo" 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = 'https://picsum.photos/seed/charity-logo/200/200';
                }}
              />
              <div className="flex flex-col border-l border-primary/20 pl-3">
                <span className="font-serif text-xl font-bold tracking-tight text-primary leading-none">TARAR</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-secondary -mt-0.5">L'action du cœur</span>
              </div>
            </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-warm-bg border-b border-primary/10 px-4 pt-2 pb-6 space-y-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
