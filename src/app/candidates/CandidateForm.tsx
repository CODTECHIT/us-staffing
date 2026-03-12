'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import UilCheckCircle from '@iconscout/react-unicons/icons/uil-check-circle';
import UilCloudUpload from '@iconscout/react-unicons/icons/uil-cloud-upload';

interface CandidateFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
}

export default function CandidateForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CandidateFormData>();

  const onSubmit = (data: CandidateFormData) => {
    console.log('Candidate form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="register" className="py-24" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            subtitle="Get Started"
            title="Submit Your Information"
            description="Let us connect you with your next career opportunity."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {submitted ? (
            <div className="bg-[#E0F7FA] border-2 border-[#0891B2] rounded-2xl p-10 text-center">
              <div className="flex justify-center mb-6 text-[#0891B2]">
                <UilCheckCircle size="64" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#0B2340' }}>Application Received!</h3>
              <p className="text-gray-600 text-lg">We&apos;ll review your information and reach out with relevant opportunities.</p>
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
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0B2340' }}>Email <span className="text-red-500">*</span></label>
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
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0B2340' }}>Phone</label>
                  <input
                    type="tel"
                    {...register('phone')}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0B2340' }}>Desired Position</label>
                  <input
                    type="text"
                    {...register('position')}
                    placeholder="e.g. Software Engineer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: '#0B2340' }}>Resume Upload</label>
                <div
                  className="rounded-xl p-8 text-center cursor-pointer transition-colors group"
                  style={{ border: '2px dashed #d1d5db' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0891B2'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; }}
                >
                  <div className="flex flex-col items-center justify-center">
                    <UilCloudUpload size="40" className="text-gray-400 mb-3 group-hover:text-[#0891B2] transition-colors" />
                    <p className="text-gray-500 text-sm font-medium">Drag and drop your resume here, or click to browse</p>
                    <p className="text-gray-400 text-xs mt-2">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: '#0B2340' }}>Message</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Tell us about your experience and career goals..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" variant="solid" size="lg" className="flex-1">
                  Submit Application
                </Button>
                <Button href="/jobs" variant="ghost" size="lg" className="flex-1">
                  Browse Jobs
                </Button>
              </div>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
