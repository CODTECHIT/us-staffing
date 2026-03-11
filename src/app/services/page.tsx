import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import DualCTA from '@/components/sections/DualCTA';
import ServiceDetail from './ServiceDetail';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Maxera Talent staffing services: contingent recruitment, contract staffing, and direct hire solutions.',
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Power Your Projects with Expert Talent"
        subtitle="Comprehensive staffing solutions designed to meet your unique workforce needs."
        backgroundImage="/images/hero-services.jpg"
        cta1={{ label: 'Request Talent', href: '/employers' }}
        compact
      />

      <Services />

      <ServiceDetail
        id="contingent"
        subtitle="Contingent Staffing"
        title="Flexible Workforce Solutions"
        overview="Scale your team up or down based on project demands. Our contingent staffing solutions provide the agility you need to respond to market changes while maintaining quality and compliance."
        benefits={[
          'Rapid scaling of your workforce',
          'Reduced overhead and administrative burden',
          'Access to pre-vetted, qualified professionals',
          'Full compliance and risk management',
        ]}
        process={[
          'Assess your staffing requirements and timeline',
          'Identify and screen qualified candidates',
          'Deploy professionals to your project',
          'Provide ongoing support and management',
        ]}
        image="/images/service-contingent-detail.jpg"
        imagePosition="right"
      />

      <ServiceDetail
        id="contract"
        subtitle="Contract Staffing"
        title="Specialized Professionals On Demand"
        overview="Access top-tier professionals for defined project timelines. Our contract staffing services include full employment management, from payroll to compliance, so you can focus on your core business."
        benefits={[
          'Access specialized skills for specific projects',
          'No long-term employment commitments',
          'We handle payroll, benefits, and compliance',
          'Seamless integration with your existing team',
        ]}
        process={[
          'Define project scope and skill requirements',
          'We identify and present qualified candidates',
          'Manage contracts, payroll, and compliance',
          'Ensure successful project delivery',
        ]}
        image="/images/service-contract-detail.jpg"
        imagePosition="left"
        dark
      />

      <ServiceDetail
        id="direct-hire"
        subtitle="Direct Hire"
        title="Permanent Placement Solutions"
        overview="Find and secure top-tier talent for your most critical permanent roles. Our direct hire service combines deep industry knowledge with rigorous screening to deliver candidates who will drive long-term success."
        benefits={[
          'Thorough candidate vetting and assessment',
          'Deep industry expertise and market knowledge',
          'Guarantee period for all placements',
          'Reduced time-to-hire for critical roles',
        ]}
        process={[
          'Understand your organizational needs and culture',
          'Execute targeted search and recruitment',
          'Present shortlisted, fully vetted candidates',
          'Support through offer and onboarding',
        ]}
        image="/images/service-direct-detail.jpg"
        imagePosition="right"
      />

      <DualCTA />
    </>
  );
}
