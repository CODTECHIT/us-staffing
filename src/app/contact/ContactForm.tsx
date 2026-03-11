'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';
import UilCheckCircle from '@iconscout/react-unicons/icons/uil-check-circle';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  role: string;
  message: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div className="bg-[#E0F7FA] border-2 border-[#0891B2] rounded-2xl p-10 text-center">
        <div className="flex justify-center mb-6 text-[#0891B2]">
          <UilCheckCircle size="64" />
        </div>
        <h3 className="text-2xl font-bold text-[#0B2340] mb-3">Message Sent!</h3>
        <p className="text-gray-600 text-lg">We&apos;ll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <ScrollReveal delay={0.2}>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 space-y-6">
        <p className="text-xs text-gray-500 mb-2"><span className="text-red-500">*</span> Indicates required fields</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-[#0B2340] mb-2">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-bold text-[#0B2340] mb-2">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-[#0B2340] mb-2">Phone <span className="text-red-500">*</span></label>
            <input
              type="tel"
              {...register('phone', { required: 'Phone is required' })}
              placeholder="(555) 123-4567"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-bold text-[#0B2340] mb-2">Company</label>
            <input
              type="text"
              {...register('company')}
              placeholder="Company name (optional)"
            />
          </div>
        </div>

        {/* Role selector matching vpausa.com */}
        <div className="bg-gray-50 rounded-xl p-5">
          <label className="block text-sm font-bold text-[#0B2340] mb-4">I am a...</label>
          <div className="flex flex-col sm:flex-row gap-4">
            {['Job Seeker', 'Employer', 'Neither'].map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer group bg-white px-5 py-3 rounded-lg border border-gray-200 hover:border-[#0891B2] transition-colors flex-1">
                <input
                  type="radio"
                  value={option}
                  {...register('role')}
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#0B2340] transition-colors">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-[#0B2340] mb-2">Questions / Comments</label>
          <textarea
            {...register('message')}
            rows={5}
            placeholder="How can we help you?"
          />
        </div>

        <Button type="submit" variant="solid" size="lg" className="w-full">
          Send Message
        </Button>
      </form>
    </ScrollReveal>
  );
}
