'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Top Destinations', href: '#destinations' },
  { label: 'Recommended Places', href: '#recommended' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerHeight = scrolled ? 'h-16' : 'h-20';
  const logoSize = scrolled ? 'text-2xl' : 'text-3xl';
  const logoIcon = scrolled ? 'w-8 h-8' : 'w-10 h-10';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        } ${headerHeight}`}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <div
            className={`${logoIcon} rounded-lg bg-primary flex items-center justify-center`}
          >
            <ChevronDown className="h-5 w-5 text-white rotate-180" />
          </div>
          <span
            className={`font-bold ${logoSize} ${scrolled ? 'text-gray-900' : 'text-white'
              }`}
          >
            JOURNEY
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`font-medium transition-colors ${scrolled
                  ? 'text-gray-800 hover:text-highlight'
                  : 'text-white hover:text-highlight'
                }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="absolute inset-x-0 top-full bg-white shadow-lg md:hidden">
          <div className="container mx-auto px-4 py-4">
            {LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-gray-800 hover:text-highlight"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}