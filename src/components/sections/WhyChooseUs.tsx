'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { UisStopwatch, UisBriefcase } from '@iconscout/react-unicons-solid';
import { UilUsersAlt, UilGlobe } from '@iconscout/react-unicons';

const benefits = [
  {
    icon: <UisStopwatch size="36" />,
    title: 'Fast Hiring',
    description: 'Reduce time-to-hire with our streamlined recruitment process and pre-vetted talent pool.',
  },
  {
    icon: <UilUsersAlt size="36" />,
    title: 'Qualified Talent Pool',
    description: 'Access thousands of thoroughly screened professionals ready to make an immediate impact.',
  },
  {
    icon: <UisBriefcase size="36" />,
    title: 'Industry Expertise',
    description: 'Our specialized recruiters understand the unique demands of each industry we serve.',
  },
  {
    icon: <UilGlobe size="40" />,
    title: 'Nationwide Reach',
    description: 'We connect talent and companies across all 50 states with localized market knowledge.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            subtitle="Why Choose Maxera Talent?"
            title="Professionalism and Results That Last"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 0.1} direction="up">
              <div className="text-center group p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    borderColor: 'transparent',
                    color: '#0891B2',
                    backgroundColor: '#E0F7FA',
                    boxShadow: '0 8px 30px rgba(8, 145, 178, 0.12)',
                  }}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#0B2340' }}>{benefit.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
