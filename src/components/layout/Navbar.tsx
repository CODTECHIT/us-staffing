'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { UilBars, UilTimes, UilAngleDown } from '@iconscout/react-unicons';
import Button from '@/components/ui/Button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Contingent Recruitment', href: '/services/contingent-recruitment' },
      { label: 'Contract Staffing', href: '/services/contract-staffing' },
      { label: 'Direct Hire', href: '/services/direct-hire' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    dropdown: [
      { label: 'Technology', href: '/industries/technology' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Finance', href: '/industries/finance' },
      { label: 'Engineering', href: '/industries/engineering' },
      { label: 'Business Operations', href: '/industries/business-operations' },
    ],
  },
  { label: 'Employers', href: '/employers' },
  { label: 'Candidates', href: '/candidates' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileOpen(false);
      setActiveDropdown(null);
    }, 10);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight transition-colors duration-300">
              <span className="font-heading" style={{ color: scrolled ? '#0B2340' : '#ffffff' }}>Maxera</span>
              <span className="font-heading" style={{ color: scrolled ? '#0891B2' : '#5eead4' }}> Talent</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-3 text-[15px] font-medium transition-all duration-200 flex items-center gap-1 rounded-lg no-underline ${
                    pathname === link.href
                      ? scrolled ? 'text-teal-600' : 'text-teal-300'
                      : scrolled ? 'text-navy-800 hover:text-teal-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  {link.dropdown && <UilAngleDown size="18" />}
                </Link>

                {/* Active indicator */}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-teal-500"
                  />
                )}

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-5 py-3 text-sm text-navy-800 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Button href="/employers" variant="solid" size="sm">
                Hire Talent
              </Button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 shadow-lg ${
                scrolled 
                  ? 'bg-navy-900 text-white hover:bg-navy-800' 
                  : 'bg-white text-navy-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <UilTimes size="24" />
              ) : (
                <UilBars size="24" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-xl overflow-hidden"
          >
            <nav className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${pathname === link.href
                        ? 'bg-teal-50 text-teal-600'
                        : 'text-navy-800 hover:bg-gray-50'
                      }`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-xs text-gray-600 hover:text-teal-600"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button href="/employers" variant="solid" size="md" className="w-full">
                  Hire Talent
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
