'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';

export default function DualCTA() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Employers */}
      <ScrollReveal direction="left" className="relative min-h-[400px] flex items-center justify-center overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: 'url(/images/dual-cta-employers.jpg)' }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        />
        <div className="relative z-10 text-center px-10 py-12">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Build Your Team
          </h3>
          <p className="text-gray-300 text-base mb-8 max-w-sm mx-auto leading-relaxed">
            Partner with us to find qualified professionals for your organization.
          </p>
          <Button href="/employers" variant="ghost-white" size="md">
            Request Talent
          </Button>
        </div>
      </ScrollReveal>

      {/* Candidates */}
      <ScrollReveal direction="right" className="relative min-h-[400px] flex items-center justify-center overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: 'url(/images/dual-cta-candidates.jpg)' }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        />
        <div className="relative z-10 text-center px-10 py-12">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Find Your Next Job
          </h3>
          <p className="text-gray-300 text-base mb-8 max-w-sm mx-auto leading-relaxed">
            Discover exciting career opportunities with top employers nationwide.
          </p>
          <Button href="/jobs" variant="ghost-white" size="md">
            Search Jobs
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}
