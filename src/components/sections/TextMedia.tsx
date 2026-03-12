'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';
import { UilCheck } from '@iconscout/react-unicons';

interface TextMediaProps {
  subtitle?: string;
  title: string;
  description: string;
  bullets?: string[];
  image: string;
  imagePosition?: 'left' | 'right';
  dark?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function TextMedia({
  subtitle,
  title,
  description,
  bullets,
  image,
  imagePosition = 'right',
  dark = false,
  ctaLabel,
  ctaHref,
}: TextMediaProps) {
  return (
    <section
      className="py-24"
      style={dark ? { backgroundColor: '#0B2340' } : { backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div
          className={`flex flex-col lg:flex-row items-center gap-14 lg:gap-20 ${
            imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Text */}
          <div className="flex-1">
            <ScrollReveal direction={imagePosition === 'right' ? 'left' : 'right'}>
              {subtitle && (
                <p
                  className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
                  style={{ color: dark ? '#4DD0E1' : '#0891B2' }}
                >
                  {subtitle}
                </p>
              )}
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-6"
                style={{ color: dark ? '#ffffff' : '#0B2340' }}
              >
                {title}
              </h2>
              <p
                className="text-base leading-relaxed mb-7"
                style={{ color: dark ? '#c0cad9' : '#4b5563' }}
              >
                {description}
              </p>

              {bullets && (
                <ul className="space-y-4 mb-8">
                  {bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5"
                        style={{ backgroundColor: '#F59E0B' }}
                      >
                        <UilCheck size="16" />
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: dark ? '#c0cad9' : '#4b5563' }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {ctaLabel && ctaHref && (
                <Button
                  href={ctaHref}
                  variant={dark ? 'ghost-white' : 'ghost'}
                >
                  {ctaLabel}
                </Button>
              )}
            </ScrollReveal>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <ScrollReveal direction={imagePosition === 'right' ? 'right' : 'left'}>
              <div className="relative h-[400px] lg:h-[480px]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover object-center shadow-2xl"
                  style={{
                    borderRadius: '20px',
                    borderBottomLeftRadius: imagePosition === 'right' ? '60px' : '20px',
                    borderBottomRightRadius: imagePosition === 'left' ? '60px' : '20px',
                  }}
                />
                {/* Decorative accent */}
                <div
                  className={`absolute -bottom-4 ${
                    imagePosition === 'right' ? '-right-4' : '-left-4'
                  } w-28 h-28 rounded-2xl -z-10`}
                  style={{ backgroundColor: 'rgba(8, 145, 178, 0.15)' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
