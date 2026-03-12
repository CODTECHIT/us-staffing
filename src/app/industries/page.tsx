import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Industries from '@/components/sections/Industries';
import DualCTA from '@/components/sections/DualCTA';
import IndustryDetail from './IndustryDetail';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Maxera Talent serves Technology, Healthcare, Finance, Engineering, and Business Operations sectors.',
};

export default function IndustriesPage() {
  return (
    <>
      <Hero
        title="Expertise That Drives Success"
        subtitle="Deep industry knowledge that enables us to find the right talent for specialized roles."
        backgroundImage="/images/hero-industries.jpg"
        compact
      />

      <Industries />

      <IndustryDetail
        id="technology"
        title="Technology"
        overview="The tech landscape moves fast, and your staffing solutions need to keep pace. We provide skilled professionals across software development, cloud infrastructure, data science, cybersecurity, and IT operations."
        challenges={[
          'Rapid pace of technological change',
          'High demand and competitive talent market',
          'Need for specialized and niche skill sets',
          'Retention of top-performing engineers',
        ]}
        solutions={[
          'Access to pre-vetted software engineers, data scientists, and DevOps professionals',
          'Rapid deployment for project-based and contract roles',
          'Deep understanding of tech stacks and certification requirements',
          'Flexible engagement models — contract, contract-to-hire, and direct placement',
        ]}
        image="/images/industry-tech-detail.jpg"
        imagePosition="right"
        slug="technology"
      />

      <IndustryDetail
        id="healthcare"
        title="Healthcare"
        overview="Healthcare organizations face unique staffing challenges. We provide qualified clinical and administrative professionals who meet strict credentialing and compliance requirements."
        challenges={[
          'Critical shortage of qualified healthcare workers',
          'Complex credentialing and compliance requirements',
          'High turnover in clinical and support roles',
          'Demand for specialized medical professionals',
        ]}
        solutions={[
          'Credentialed nursing, clinical, and administrative staff',
          'Full compliance management and verification',
          'Rapid response for urgent staffing needs',
          'Long-term workforce planning partnerships',
        ]}
        image="/images/industry-health-detail.jpg"
        imagePosition="left"
        dark
        slug="healthcare"
      />

      <IndustryDetail
        id="finance"
        title="Finance"
        overview="Financial institutions require professionals with precision, regulatory knowledge, and analytical expertise. We deliver talent that understands the stakes."
        challenges={[
          'Stringent regulatory and compliance requirements',
          'Need for specialized financial analysis skills',
          'Demand for professionals with specific certifications',
          'Risk management and audit readiness',
        ]}
        solutions={[
          'CPA, CFA, and compliance-certified professionals',
          'Financial analysts, accountants, and risk managers',
          'Understanding of banking regulations and fintech trends',
          'Scalable teams for audit seasons and special projects',
        ]}
        image="/images/industry-finance-detail.jpg"
        imagePosition="right"
        slug="finance"
      />

      <IndustryDetail
        id="engineering"
        title="Engineering"
        overview="From design to implementation, engineering projects demand skilled professionals who can deliver results safely and on time. We supply engineers across multiple disciplines."
        challenges={[
          'Specialized skill requirements across engineering disciplines',
          'Safety and regulatory compliance',
          'Project timelines and deadline pressures',
          'Geographic distribution of project sites',
        ]}
        solutions={[
          'Electrical, mechanical, civil, and industrial engineers',
          'Safety-first professionals with relevant certifications',
          'Nationwide coverage for distributed projects',
          'Flexible deployment for project-based needs',
        ]}
        image="/images/industry-engineering-detail.jpg"
        imagePosition="left"
        dark
        slug="engineering"
      />

      <IndustryDetail
        id="business"
        title="Business Operations"
        overview="Efficient operations are the backbone of any successful organization. We provide skilled professionals in project management, HR, administration, and operations leadership."
        challenges={[
          'Need for experienced operational leadership',
          'Scaling administrative functions during growth',
          'Finding professionals who align with company culture',
          'Cross-functional expertise requirements',
        ]}
        solutions={[
          'Project managers, operations analysts, and HR specialists',
          'Administrative professionals with industry experience',
          'Cultural fit assessment as part of our screening process',
          'Contract and permanent placement options',
        ]}
        image="/images/industry-business-detail.jpg"
        imagePosition="right"
        slug="business-operations"
      />

      <DualCTA />
    </>
  );
}
