import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import TextMedia from '@/components/sections/TextMedia';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import DualCTA from '@/components/sections/DualCTA';
import CoreValues from './CoreValues';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Maxera Talent — our mission, values, and the experienced leadership team behind our staffing solutions.',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Building Alliances That Drive Success"
        subtitle="Workforce solutions built on experience and trust."
        backgroundImage="/images/hero-about.jpg"
        cta1={{ label: 'Contact Us', href: '/contact' }}
        compact
      />

      {/* Who We Are */}
      <TextMedia
        subtitle="Who We Are"
        title="Workforce Experts with a Commitment to Excellence"
        description="At Maxera Talent, we believe that great outcomes start with great people. Our team has extensive experience as a trusted workforce solutions provider. We deliver project-ready talent while fostering long-term success for clients and employees alike. With deep industry knowledge and a commitment to quality, we serve as a strategic partner in your growth."
        image="/images/about-team.jpg"
        imagePosition="right"
      />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Core Values */}
      <CoreValues />

      {/* Leadership */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-500 mb-3">Our Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'John Reynolds', title: 'CEO & Founder', image: '/images/leader-1.jpg' },
              { name: 'Maria Santos', title: 'COO', image: '/images/leader-2.jpg' },
              { name: 'David Kim', title: 'VP of Talent Acquisition', image: '/images/leader-3.jpg' },
            ].map((leader) => (
              <div key={leader.name} className="text-center group">
                <div className="w-48 h-48 mx-auto mb-5 rounded-full overflow-hidden shadow-lg">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${leader.image})` }}
                  />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{leader.name}</h3>
                <p className="text-sm text-gray-500">{leader.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DualCTA />
    </>
  );
}
