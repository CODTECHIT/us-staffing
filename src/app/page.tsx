import Hero from '@/components/sections/Hero';
import TextMedia from '@/components/sections/TextMedia';
import Industries from '@/components/sections/Industries';
import Process from '@/components/sections/Process';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import DualCTA from '@/components/sections/DualCTA';

export default function HomePage() {
  return (
    <>
      {/* Hero Section + Overlapping Service Cards + Search Bar (vpausa-style) */}
      <Hero
        title="Expertise You Can Trust, Workforce You Can Count On"
        subtitle="Creating opportunities for professionals and delivering workforce solutions for businesses across the United States."
        backgroundImage="/images/hero.jpeg"
        cta1={{ label: 'Hire Talent', href: '/employers' }}
        cta2={{ label: 'Browse Jobs', href: '/jobs' }}
        showOverlappingCards
      />

      {/* Company Intro — Text Left, Image Right */}
      <TextMedia
        subtitle="Go Far In Your Career"
        title="Travel Where Your Experience Takes You"
        description="Join a company where your work is valued and you are respected. With Maxera Talent, you gain access to career opportunities with top-tier employers, competitive compensation, and the support you deserve."
        bullets={[
          'Consistent, project-based work with leading companies.',
          'Competitive pay and comprehensive benefits packages.',
          'Opportunities for career advancement and skill development.',
        ]}
        image="/images/career-growth.jpg"
        imagePosition="right"
        ctaLabel="View Opportunities"
        ctaHref="/jobs"
      />

      {/* Dark Workforce Solutions Section */}
      <TextMedia
        subtitle="Safety. Expertise. Service."
        title="Workforce Solutions You Can Count On"
        description="At Maxera Talent, we deliver skilled, proven professionals ready to tackle your toughest challenges. Trust our team with everything from technology implementations to specialized healthcare staffing. You'll gain access to a reliable workforce that meets the highest industry standards."
        image="/images/workforce-solutions.jpg"
        imagePosition="left"
        dark
        ctaLabel="People We Recruit"
        ctaHref="/services"
      />

      {/* Industries */}
      <Industries />

      {/* Hiring Process */}
      <Process />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Dual CTA */}
      <DualCTA />
    </>
  );
}
