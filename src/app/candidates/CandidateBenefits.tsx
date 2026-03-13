'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { UilDollarSign, UilShieldCheck, UilGlobe } from '@iconscout/react-unicons';

const benefits = [
  {
    icon: <UilDollarSign size="40" />,
    title: 'Competitive Pay',
    description: 'We negotiate top market rates and ensure you receive fair, competitive compensation for your expertise.',
  },
  {
    icon: <UilShieldCheck size="40" />,
    title: 'Career Stability',
    description: 'Access consistent opportunities with leading companies and build a stable, rewarding career path.',
  },
  {
    icon: <UilGlobe size="40" />,
    title: 'Nationwide Reach',
    description: 'Explore opportunities across all 50 states. Relocate or work remotely — the choice is yours.',
  },
];

export default function CandidateBenefits() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            subtitle="Why Work With Us"
            title="Your Career, Our Priority"
            description="We invest in the success of every professional we place."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 0.15} direction="up">
              <div className="text-center group p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-navy-900 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
