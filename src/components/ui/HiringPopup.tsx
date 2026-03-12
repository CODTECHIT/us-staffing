'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { UilTimes } from '@iconscout/react-unicons';

export default function HiringPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (pathname === '/' && window.scrollY > 400 && !isDismissed) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed, pathname]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 0.1, ease: 'linear' }}
          className="fixed left-0 top-[20%] md:top-[30%] z-50 w-[92%] md:w-[28rem] overflow-hidden rounded-r-[1.5rem] md:rounded-r-[2rem] shadow-[20px_0_60px_rgba(0,0,0,0.5)] border-y border-r border-white/20"
          style={{ height: '220px' }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/hiring-popup.png)' }}
          />

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(11, 35, 64, 0.75)' }}
          />

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 z-20 text-white/80 hover:text-white transition-colors p-1"
            aria-label="Close popup"
          >
            <UilTimes size="30" />
          </button>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-start justify-center p-10 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg font-heading">Looking for Work?</h3>
            <p className="text-base md:text-lg text-teal-300 mb-8 drop-shadow-md font-bold uppercase tracking-[0.2em]">We&apos;re Hiring.</p>

            <Link
              href="/jobs"
              className="inline-block px-8 py-3 rounded-full bg-teal-500 text-white font-bold text-sm uppercase tracking-widest hover:bg-teal-400 transform hover:scale-105 transition-all duration-300 no-underline shadow-lg"
            >
              Apply Now!
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
