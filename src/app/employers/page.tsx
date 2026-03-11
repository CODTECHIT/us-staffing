import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Process from '@/components/sections/Process';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import EmployerForm from './EmployerForm';

export const metadata: Metadata = {
  title: 'Employers',
  description: 'Partner with Maxera Talent to find the best professionals for your team. Submit your hiring needs today.',
};

export default function EmployersPage() {
  return (
    <>
      <Hero
        title="Power Your Projects with Expert Talent"
        subtitle="Partner with Maxera Talent and discover the difference that strategic staffing makes."
        backgroundImage="/images/hero-employers.jpg"
        cta1={{ label: 'Request Talent', href: '#hire-form' }}
        compact
      />

      <Process />

      <WhyChooseUs />

      <EmployerForm />
    </>
  );
}
