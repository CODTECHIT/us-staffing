'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { UilUsersAlt, UilClipboardAlt, UilBriefcaseAlt } from '@iconscout/react-unicons';

const services = [
  {
    icon: <UilUsersAlt size="36" />,
    title: 'Contingent Recruitment',
    description:
      'Flexible staffing solutions to scale your workforce up or down based on project demands and seasonal needs.',
    image: '/images/service-contingent.jpg',
  },
  {
    icon: <UilClipboardAlt size="36" />,
    title: 'Contract Staffing',
    description:
      'Access specialized professionals on contract for defined project timelines with full compliance management.',
    image: '/images/service-contract.jpg',
  },
  {
    icon: <UilBriefcaseAlt size="36" />,
    title: 'Direct Hire',
    description:
      'Permanent placement solutions to find and secure top-tier talent for your most critical roles.',
    image: '/images/service-direct.jpg',
  },
];

interface ServicesProps {
  overlapping?: boolean;
}

export default function Services({ overlapping = false }: ServicesProps) {
  return (
    <section
      className={`relative ${overlapping ? '-mt-16 z-20 pb-20' : 'py-24'}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {!overlapping && (
          <ScrollReveal>
            <SectionHeading
              subtitle="What We Do"
              title="Our Core Services"
              description="Comprehensive staffing solutions tailored to your business needs."
            />
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-10">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.15} direction="up">
              <motion.div
                whileHover={{ scale: 1.04, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl h-80"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-115"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                />

                {/* Bottom V-shape clip decorative element */}
                {overlapping && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-12"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 0%, 50% 100%, 0 0%)',
                      backgroundColor: 'rgba(11, 35, 64, 0.9)',
                    }}
                  />
                )}

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-8">
                  <div className="mb-5 transition-transform duration-300 group-hover:scale-110" style={{ color: '#26C6DA' }}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3 drop-shadow-md">{service.title}</h3>
                  <p className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs leading-relaxed" style={{ color: '#C0CAD9' }}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {!overlapping && (
          <ScrollReveal delay={0.5}>
            <div className="text-center mt-14">
              <Button href="/services" variant="ghost">
                View All Services
              </Button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
