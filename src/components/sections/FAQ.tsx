'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { UilAngleDown } from '@iconscout/react-unicons';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does project-based staffing work in the USA?",
    answer: "Our project-based model focus on delivering teams of specialized professionals for specific durations or milestones. We handle the entire lifecycle from sourcing and vetting to mobilization and site management, ensuring your project remains on schedule."
  },
  {
    question: "Do you provide traveling skilled professionals across US states?",
    answer: "Yes, we maintain a national network of 'road warriors'—highly skilled professionals who are mobile and ready to deploy to project sites anywhere in the 50 states within short notice."
  },
  {
    question: "How quickly can labor be mobilized to US job sites?",
    answer: "Depending on the complexity and volume, we can typically begin mobilization within 48 to 72 hours. Our pre-vetted talent pool allows for rapid response to critical project needs."
  },
  {
    question: "Do you support large-scale industrial and infrastructure projects?",
    answer: "Absolutely. Maxera Talent has the infrastructure to support massive projects requiring dozens or hundreds of specialized professionals simultaneously, with dedicated project managers on-site if required."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-black text-navy-900 text-center mb-16 italic">
            Frequently Asked Questions About Staffing in <span className="text-teal-600">the USA</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left bg-navy-900 text-white"
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <UilAngleDown />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="p-8 bg-gray-50 text-navy-400 font-medium leading-relaxed italic border-l-4 border-teal-500">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
