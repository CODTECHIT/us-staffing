import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Maxera Talent. Submit your questions, comments, or staffing requests.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Building workforce partnerships that drive success."
        backgroundImage="/images/hero-contact.jpg"
        compact
      />

      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Thank you for visiting Maxera Talent. Whether you&apos;re looking for your next project or need
              to add talent to your team, we&apos;re here to help. Use the form below to submit your question,
              comment, or request — a team member will contact you shortly.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              <span className="text-amber-500">✦</span> Email: <strong>info@maxeratalent.com</strong>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
