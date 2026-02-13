"use client";
import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X, ChevronRight } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className={`mx-[5vw] rounded-full transition-all duration-500 ${scrolled ? 'glass shadow-lg' : 'bg-white/60 backdrop-blur-sm'}`}>
          <div className="px-6 md:px-8 flex items-center justify-between h-14">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--gapah-accent)] to-[#2563EB] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-[var(--gapah-text)]">Gapah</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm font-medium text-[var(--gapah-text-secondary)] hover:text-[var(--gapah-text)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a href="/contact" className="hidden md:flex gapah-button gapah-button-primary text-sm py-2.5 px-5">
              Get early access
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 transition-all duration-500 ${
            menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">{link.label}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <a href="/contact" onClick={() => setMenuOpen(false)} className="gapah-button gapah-button-primary w-full">
              Get early access
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
