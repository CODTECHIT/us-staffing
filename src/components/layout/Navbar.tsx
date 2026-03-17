'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { UilAngleDown } from '@iconscout/react-unicons';
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
  { label: 'Locations',
    href: '/locations/usa',
    dropdown: [
      { label: 'USA', href: '/locations/usa' },
    ],
  },
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
      className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-200 ${
        scrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline text-white">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight transition-colors duration-300">
              <span className="font-heading" style={{ color: scrolled ? '#0B2340' : '#ffffff' }}>Maxera</span>
              <span className="font-heading" style={{ color: scrolled ? '#0891B2' : '#5eead4' }}> Talent</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`px-3 py-2 text-[14px] font-bold transition-all duration-200 flex items-center gap-1 rounded-lg no-underline ${
                    pathname === link.href
                      ? scrolled ? 'text-teal-600' : 'text-teal-300'
                      : scrolled ? 'text-navy-800 hover:text-teal-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  {link.dropdown && <UilAngleDown size="16" />}
                </Link>

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
                            className="block px-5 py-3 text-sm text-navy-800 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150 no-underline font-medium"
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
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/jobs" variant={scrolled ? 'ghost' : 'ghost-white'} size="sm">
                Browse Jobs
              </Button>
              <Button href="/employers" variant="solid" size="sm">
                Hire Talent
              </Button>
            </div>

            <button
              onClick={() => {
                if (mobileOpen) setActiveDropdown(null);
                setMobileOpen(!mobileOpen);
              }}
              className={`lg:hidden flex flex-col justify-center items-center w-11 h-11 rounded-xl transition-all duration-300 z-[80] ${
                mobileOpen 
                  ? 'bg-navy-900 text-white shadow-lg rotate-180' 
                  : scrolled 
                    ? 'bg-navy-900 text-white shadow-lg' 
                    : 'bg-white/10 backdrop-blur-md text-white border border-white/20'
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span 
                  className={`absolute left-0 block w-full h-0.5 bg-current transition-all duration-300 ${
                    mobileOpen ? 'top-2 rotate-45' : 'top-0'
                  }`} 
                />
                <span 
                  className={`absolute left-0 top-2 block w-full h-0.5 bg-current transition-all duration-300 ${
                    mobileOpen ? 'opacity-0 -translate-x-2' : 'opacity-100'
                  }`} 
                />
                <span 
                  className={`absolute left-0 block w-full h-0.5 bg-current transition-all duration-300 ${
                    mobileOpen ? 'top-2 -rotate-45' : 'top-4'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setMobileOpen(false);
                setActiveDropdown(null);
              }}
              className="fixed inset-0 bg-navy-900/60 backdrop-blur-sm z-[70] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[75] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <div className="text-xl font-bold tracking-tight">
                  <span className="font-heading text-navy-900">Maxera</span>
                  <span className="font-heading text-teal-600"> Talent</span>
                </div>
              </div>
              
              <nav className="flex-1 overflow-y-auto px-6 py-4">
                <ul className="space-y-1">
                  {navLinks.map((link, idx) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      {link.dropdown ? (
                        <div>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                            className={`w-full flex items-center justify-between py-2 text-xl font-bold transition-colors ${
                              pathname.startsWith(link.href) ? 'text-teal-600' : 'text-navy-900'
                            }`}
                          >
                            <span>{link.label}</span>
                            <motion.div
                              animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <UilAngleDown size="24" className="text-teal-600" />
                            </motion.div>
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === link.label && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden ml-4 border-l-2 border-teal-50/50"
                              >
                                <li className="px-4 pt-2 pb-1">
                                  <Link
                                    href={link.href}
                                    className="text-[10px] font-bold text-navy-300 uppercase tracking-widest"
                                  >
                                    View All {link.label}
                                  </Link>
                                </li>
                                {link.dropdown.map((item) => (
                                  <li key={item.label}>
                                    <Link
                                      href={item.href}
                                      className={`block px-4 py-2 text-base font-medium transition-colors ${
                                        pathname === item.href ? 'text-teal-600' : 'text-navy-600 hover:text-teal-600'
                                      }`}
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className={`block py-2 text-xl font-bold transition-colors ${
                            pathname === link.href ? 'text-teal-600' : 'text-navy-900 hover:text-teal-600'
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="p-6 bg-gray-50/50 mt-auto space-y-3">
                <Button href="/jobs" variant="ghost" size="lg" className="w-full">
                  Browse Jobs
                </Button>
                <Button href="/employers" variant="solid" size="lg" className="w-full shadow-lg">
                  Hire Talent
                </Button>
                <p className="text-center text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-bold">
                  Expert Staffing Solutions
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
