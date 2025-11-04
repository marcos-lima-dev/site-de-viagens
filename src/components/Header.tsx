// src/components/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button, Sheet, SheetContent, SheetTrigger } from '@/components/ui' // ← LIMPO!

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Top Destinations', href: '#destinations' },
  { label: 'Recommended Places', href: '#recommended' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClasses = `
    fixed inset-x-0 top-0 z-50 transition-all duration-300
    ${scrolled ? 'h-16 bg-white shadow-md' : 'h-20 bg-transparent'}
  `

  const logoSize = scrolled ? 'text-2xl' : 'text-3xl'
  const iconSize = scrolled ? 'w-8 h-8' : 'w-10 h-10'

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className={`${iconSize} rounded-lg bg-primary flex items-center justify-center transition-all`}>
            <ChevronDown className="h-5 w-5 text-white rotate-180" />
          </div>
          <span className={`font-bold ${logoSize} ${scrolled ? 'text-gray-900' : 'text-white'} transition-all`}>
            JOURNEY
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`font-medium transition-colors ${
                scrolled
                  ? 'text-gray-800 hover:text-highlight'
                  : 'text-white hover:text-highlight'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className={scrolled ? 'text-gray-800' : 'text-white'}>
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 p-6">
            <nav className="flex flex-col gap-4 mt-8">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-highlight transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}