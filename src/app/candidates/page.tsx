import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import DualCTA from '@/components/sections/DualCTA';
import CandidateBenefits from './CandidateBenefits';
import CandidateForm from './CandidateForm';

export const metadata: Metadata = {
  title: 'Candidates',
  description: 'Find your next career opportunity with Maxera Talent. Browse jobs, upload your resume, and connect with top employers.',
};

export default function CandidatesPage() {
  return (
    <>
      <Hero
        title="Build Your Future with Maxera Talent"
        subtitle="Discover exciting career opportunities with top employers across the United States."
        backgroundImage="/images/hero-candidates.jpg"
        cta1={{ label: 'Browse Jobs', href: '/jobs' }}
        compact
      />



      <CandidateBenefits />
      <CandidateForm />

      <Testimonials />

      <DualCTA />
    </>
  );
}
