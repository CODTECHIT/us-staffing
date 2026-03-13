'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import UilAngleLeft from '@iconscout/react-unicons/icons/uil-angle-left';
import UilAngleRight from '@iconscout/react-unicons/icons/uil-angle-right';

const testimonials = [
  {
    quote:
      'Maxera Talent transformed our hiring process. They delivered highly qualified candidates within days, not weeks. Their understanding of our industry was exceptional.',
    name: 'Sarah Mitchell',
    title: 'VP of Operations',
    company: 'TechForward Inc.',
  },
  {
    quote:
      'Working with Maxera Talent was a game-changer for our growth. They found us exceptional engineering talent that integrated seamlessly with our existing team.',
    name: 'James Rodriguez',
    title: 'CTO',
    company: 'Innovate Solutions',
  },
  {
    quote:
      'The professionalism and responsiveness of the Maxera team is unmatched. They truly care about making the right match for both the candidate and the employer.',
    name: 'Emily Chen',
    title: 'HR Director',
    company: 'Global Health Systems',
  },
  {
    quote:
      'We needed specialized finance professionals on a tight timeline. Maxera delivered four qualified candidates in under a week. Highly recommended.',
    name: 'Michael Thompson',
    title: 'CFO',
    company: 'CapitalBridge Partners',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-12" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
          />
        </ScrollReveal>

        <div className="relative bg-gray-50 rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100">
          {/* Testimonial */}
          <div className="min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.25 }}
                className="text-center max-w-3xl mx-auto"
              >
                {/* Quote marks */}
                <div className="text-7xl leading-none mb-6 font-heading" style={{ color: '#80DEEA' }}>&ldquo;</div>

                <p className="text-lg md:text-xl leading-relaxed italic mb-8" style={{ color: '#374151' }}>
                  {testimonials[current].quote}
                </p>

                <div>
                  <p className="text-base font-bold" style={{ color: '#0B2340' }}>
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm" style={{ color: '#6b7280' }}>
                    {testimonials[current].title}, {testimonials[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
              style={{
                border: '2px solid #C0CAD9',
                color: '#0B2340',
              }}
              aria-label="Previous testimonial"
            >
              <UilAngleLeft size="24" />
            </button>

            {/* Dots */}
            <div className="flex gap-2.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className="rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    width: index === current ? '28px' : '10px',
                    height: '10px',
                    backgroundColor: index === current ? '#0891B2' : '#d1d5db',
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
              style={{
                border: '2px solid #C0CAD9',
                color: '#0B2340',
              }}
              aria-label="Next testimonial"
            >
              <UilAngleRight size="24" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
