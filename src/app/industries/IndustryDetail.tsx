'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';

interface IndustryDetailProps {
  id: string;
  title: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  image: string;
  imagePosition?: 'left' | 'right';
  dark?: boolean;
}

export default function IndustryDetail({
  id,
  title,
  overview,
  challenges,
  solutions,
  image,
  imagePosition = 'right',
  dark = false,
}: IndustryDetailProps) {
  return (
    <section id={id} className={`py-20 ${dark ? 'bg-navy-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col lg:flex-row items-start gap-12 lg:gap-16 ${
            imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div className="flex-1">
            <ScrollReveal direction={imagePosition === 'right' ? 'left' : 'right'}>
              <p className={`text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${dark ? 'text-teal-300' : 'text-teal-500'}`}>
                Industry Focus
              </p>
              <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-5 ${dark ? 'text-white' : 'text-navy-900'}`}>
                {title}
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                {overview}
              </p>

              <h3 className={`text-lg font-bold mb-3 ${dark ? 'text-white' : 'text-navy-900'}`}>Staffing Challenges</h3>
              <ul className="space-y-2 mb-6">
                {challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs shrink-0 mt-0.5">!</span>
                    <span className={`text-sm ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{c}</span>
                  </li>
                ))}
              </ul>

              <h3 className={`text-lg font-bold mb-3 ${dark ? 'text-white' : 'text-navy-900'}`}>Our Solutions</h3>
              <ul className="space-y-2 mb-8">
                {solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</span>
                    <span className={`text-sm ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{s}</span>
                  </li>
                ))}
              </ul>

              <Button href="/employers" variant={dark ? 'ghost-white' : 'solid'}>
                Get Staffing Solutions
              </Button>
            </ScrollReveal>
          </div>

          <div className="flex-1 w-full">
            <ScrollReveal direction={imagePosition === 'right' ? 'right' : 'left'}>
              <div
                className="w-full h-[400px] lg:h-[520px] bg-cover bg-center rounded-2xl shadow-2xl"
                style={{
                  backgroundImage: `url(${image})`,
                  borderBottomLeftRadius: imagePosition === 'right' ? '60px' : '20px',
                  borderBottomRightRadius: imagePosition === 'left' ? '60px' : '20px',
                }}
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
