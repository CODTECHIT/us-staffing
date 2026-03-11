'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import UilCheckCircle from '@iconscout/react-unicons/icons/uil-check-circle';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  positions: string;
  message: string;
}

export default function EmployerForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Employer form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="hire-form" className="py-24" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            subtitle="Hire Talent"
            title="Tell Us About Your Staffing Needs"
            description="Fill out the form below and our team will get back to you within 24 hours."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {submitted ? (
            <div className="bg-[#E0F7FA] border-2 border-[#0891B2] rounded-2xl p-10 text-center">
              <div className="flex justify-center mb-6 text-[#0891B2]">
                <UilCheckCircle size="64" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#0B2340' }}>Thank You!</h3>
              <p className="text-gray-600 text-lg">We&apos;ve received your request and will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0B2340' }}>Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0B2340' }}>Company <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    {...register('company', { required: 'Company is required' })}
                    placeholder="Company name"
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1 font-medium">{errors.company.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0B2340' }}>Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0B2340' }}>Phone <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone is required' })}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: '#0B2340' }}>Positions Needed</label>
                <input
                  type="text"
                  {...register('positions')}
                  placeholder="e.g. 3 Software Engineers, 2 Data Analysts"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: '#0B2340' }}>Message</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="Tell us more about your staffing needs..."
                />
              </div>

              <Button type="submit" variant="solid" size="lg" className="w-full">
                Submit Request
              </Button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
