'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { UilDesktop, UilHeartbeat, UilDollarSign, UilSetting, UilBuilding } from '@iconscout/react-unicons';

const industries = [
  {
    icon: <UilDesktop size="40" />,
    title: 'Technology',
    description: 'Software engineers, data scientists, cloud architects, and IT specialists.',
    image: '/images/industry-tech.jpg',
  },
  {
    icon: <UilHeartbeat size="40" />,
    title: 'Healthcare',
    description: 'Clinical professionals, medical administrators, and healthcare IT specialists.',
    image: '/images/industry-health.jpg',
  },
  {
    icon: <UilDollarSign size="40" />,
    title: 'Finance',
    description: 'Financial analysts, accountants, compliance officers, and banking professionals.',
    image: '/images/industry-finance.jpg',
  },
  {
    icon: <UilSetting size="40" />,
    title: 'Engineering',
    description: 'Electrical, mechanical, civil, and industrial engineers for complex projects.',
    image: '/images/industry-engineering.jpg',
  },
  {
    icon: <UilBuilding size="40" />,
    title: 'Business Operations',
    description: 'Project managers, operations analysts, HR specialists, and administrative professionals.',
    image: '/images/industry-business.jpg',
  },
];

export default function Industries() {
  return (
    <section className="py-24" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            subtitle="Industries We Serve"
            title="Expertise Across Key Sectors"
            description="Deep industry knowledge that enables us to find the right talent for specialized roles."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.title} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ scale: 1.04, y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-115"
                  style={{ backgroundImage: `url(${industry.image})` }}
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-6">
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: '#26C6DA' }}>
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-bold text-center mb-2 drop-shadow-md">{industry.title}</h3>
                  <p className="text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed" style={{ color: '#C0CAD9' }}>
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
