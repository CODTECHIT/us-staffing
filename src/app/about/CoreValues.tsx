'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';

const values = [
  {
    title: 'Our Mission',
    description: 'Guiding Everything We Do',
    isIntro: true,
  },
  {
    title: 'Quality',
    description: 'Delivering excellence in every placement.',
    image: '/images/value-quality.jpg',
  },
  {
    title: 'Integrity',
    description: 'Honesty, accountability, and clear communication at every step.',
    image: '/images/value-integrity.jpg',
  },
  {
    title: 'Partnership',
    description: 'Building lasting relationships with clients and candidates.',
    image: '/images/value-partnership.jpg',
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 0.1} direction="up">
              {value.isIntro ? (
                <div className="bg-gray-100 rounded-2xl p-10 flex flex-col items-center justify-center h-64">
                  <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-white text-2xl mb-4">
                    ★
                  </div>
                  <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-2">Our Core Values</p>
                  <h3 className="text-2xl font-bold text-navy-900 text-center">{value.description}</h3>
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${value.image})` }}
                  />
                  <div className="absolute inset-0 bg-transparent" />
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-xl font-bold mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-300 text-center">{value.description}</p>
                  </div>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
