'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { UilTimes } from '@iconscout/react-unicons';

export default function HiringPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

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
          initial={{ x: -400, y: "-50%", opacity: 0 }}
          animate={{ x: 0, y: "-50%", opacity: 1 }}
          exit={{ x: -400, y: "-50%", opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed left-8 z-50 w-80 sm:w-96 overflow-hidden rounded-2xl shadow-2xl"
          style={{ height: '200px', top: '50%' }}
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
          <div className="relative z-10 h-full flex flex-col items-start justify-center p-8 text-white">
            <h3 className="text-2xl font-bold mb-1 drop-shadow-md">Looking for Work?</h3>
            <p className="text-sm text-gray-200 mb-6 drop-shadow-sm font-semibold">We’re Hiring.</p>

            <Link
              href="/jobs"
              className="inline-block px-6 py-2 rounded-full border-2 border-white text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#0B2340] transition-all duration-300 no-underline"
            >
              Apply Now!
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
