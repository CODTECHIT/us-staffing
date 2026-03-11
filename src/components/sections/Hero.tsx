'use client';

import Button from '@/components/ui/Button';
import { UilUsersAlt, UilHardHat, UilFileAlt, UilSearch, UilAngleDown } from '@iconscout/react-unicons';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  cta1?: { label: string; href: string };
  cta2?: { label: string; href: string };
  compact?: boolean;
  showOverlappingCards?: boolean;
}

const overlappingCards = [
  {
    title: 'Contingent Recruitment',
    image: '/images/service-contingent.jpg',
    icon: <UilUsersAlt size="48" />,
    href: '/services#contingent',
  },
  {
    title: 'Contract Staffing',
    image: '/images/service-contract.jpg',
    icon: <UilHardHat size="48" />,
    href: '/services#contract',
  },
  {
    title: 'Direct Hire',
    image: '/images/service-direct.jpg',
    icon: <UilFileAlt size="48" />,
    href: '/services#direct-hire',
  },
];

export default function Hero({
  title,
  subtitle,
  backgroundImage = '/images/hero.jpeg',
  cta1,
  cta2,
  compact = false,
  showOverlappingCards = false,
}: HeroProps) {
  return (
    <section className="relative w-full overflow-visible">
      {/* Hero main area — full viewport, content vertically centered */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          minHeight: compact ? '55vh' : '89vh',
          paddingTop: compact ? '96px' : '0',
          paddingBottom: compact ? '64px' : '0',
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1
            className="font-heading font-bold text-white leading-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                color: 'rgba(255,255,255,0.9)',
              }}
            >
              {subtitle}
            </p>
          )}

          {(cta1 || cta2) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              {cta1 && (
                <Button href={cta1.href} variant="ghost-white" size="lg">
                  {cta1.label}
                </Button>
              )}
              {cta2 && (
                <Button href={cta2.href} variant="ghost-white" size="lg">
                  {cta2.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ===== OVERLAPPING SERVICE CARDS (vpausa-style) ===== */}
      {showOverlappingCards && (
        <div className="relative z-20 max-w-6xl mx-auto px-6" style={{ marginTop: '-80px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {overlappingCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="block relative overflow-hidden group cursor-pointer no-underline"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
                  height: '380px',
                  borderRadius: '16px 16px 0 0',
                }}
              >
                {/* Card BG image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />

                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                />

                {/* Card Content — centered icon + title */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
                {/* Unicon icon */}
                <div
                  className="mb-5"
                  style={{ color: '#26C6DA', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                >
                  {card.icon}
                </div>
                  <h3
                    className="text-xl lg:text-2xl font-bold text-center leading-snug"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}
                  >
                    {card.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          {/* ===== REFERENCE-STYLE SEARCH BAR ===== */}
          <div className="mt-16 w-full max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 py-6 px-10 bg-white/95 backdrop-blur-sm rounded-[2rem] shadow-xl border border-white/50">
              
              {/* Label */}
              <div className="shrink-0">
                <span className="text-sm font-black uppercase tracking-[0.2em] text-[#0B2340]">
                  Search Jobs
                </span>
              </div>

              {/* Title Input */}
              <div className="w-full lg:w-64">
                <input
                  type="text"
                  placeholder="job title, skills, etc."
                  className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700 placeholder:text-gray-400 text-sm"
                />
              </div>

              {/* Location Select (Pill) */}
              <div className="w-full lg:w-48 relative">
                <select 
                  className="w-full pl-6 pr-10 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700 text-sm appearance-none bg-white cursor-pointer" 
                  defaultValue=""
                >
                  <option value="" disabled>Location</option>
                  <option value="SF">San Francisco, CA</option>
                  <option value="NY">New York, NY</option>
                  <option value="Remote">Remote</option>
                </select>
                <div className="absolute right-4 inset-y-0 flex items-center pointer-events-none">
                  <div className="flex flex-col -gap-1">
                    <UilAngleDown size="14" className="text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Industry Select (Pill) */}
              <div className="w-full lg:w-48 relative">
                <select 
                  className="w-full pl-6 pr-10 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700 text-sm appearance-none bg-white cursor-pointer" 
                  defaultValue=""
                >
                  <option value="" disabled>Industry</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Engineering</option>
                </select>
                <div className="absolute right-4 inset-y-0 flex items-center pointer-events-none">
                  <UilAngleDown size="14" className="text-gray-400" />
                </div>
              </div>

              {/* Search Button (Circle) */}
              <button 
                className="w-12 h-12 rounded-full bg-[#0B2340] hover:bg-blue-600 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 shrink-0"
              >
                <UilSearch size="20" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
