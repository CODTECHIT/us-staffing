'use client';

import Hero from '@/components/sections/Hero';
import { UilMapPin, UilUpload, UilFacebookF, UilTwitter, UilLinkedin, UilAngleLeftB, UilEnvelopeAlt } from '@iconscout/react-unicons';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function JobDetailPage() {
  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* Search Jobs Hero Banner */}
      <Hero
        title="SEARCH JOBS"
        subtitle=""
        backgroundImage="/images/hero.jpeg"
        compact
      />

      {/* Utility Bar */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-gray-500">
            <Link href="/jobs" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              <UilAngleLeftB size="14" />
              New Search
            </Link>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Column */}
          <div className="lg:w-2/3">
            {/* Header Area */}
            <div className="mb-8">
              <h1 className="text-4xl font-black text-[#0B2340] mb-4 leading-tight">
                Scope Manager - Electrical and I&C
              </h1>
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <UilMapPin size="18" className="text-blue-600" />
                <span className="text-sm font-bold uppercase tracking-wider">APPLETON, WI 54911</span>
              </div>
              
              {/* Metadata strip */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 py-4 border-y border-gray-100 text-[11px] font-black uppercase tracking-widest text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">POSTED:</span>
                  <span className="text-gray-600">03/12/2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">INDUSTRY:</span>
                  <Link href="/jobs" className="text-blue-600 hover:underline">Construction</Link>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">JOB NUMBER:</span>
                  <span className="text-gray-600">13696998</span>
                </div>
              </div>
            </div>

            {/* Job Description Sections */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-8 py-4 border-b border-gray-100">
                <h2 className="text-[13px] font-black text-[#0B2340] uppercase tracking-[0.2em]">Job Description</h2>
              </div>
              
              <div className="p-8 space-y-10">
                {/* Intro */}
                <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
                  <p className="text-base">
                    This role serves as the technical bridge between engineering, estimating, procurement, and field execution—ensuring scopes are complete, constructible, cost-aligned, and schedule-ready. The Scope Manager must possess strong electrical and I&C technical knowledge, the ability to read and interpret ISO drawings and P&IDs, and experience supporting gas or steam turbine projects.
                  </p>
                  <p className="text-base font-bold text-[#0B2340] mt-4">
                    This is a high-impact role requiring both technical depth and commercial awareness to protect project margins and execution certainty.
                  </p>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <h3 className="text-lg font-black text-[#0B2340] mb-6">Key Responsibilities</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-[#0B2340] mb-3">Scope Development & Validation</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                        <li>Review and interpret Electrical single lines, Wiring diagrams, P&IDs, and ISO drawings.</li>
                        <li>Translate engineering deliverables into executable field work packages.</li>
                        <li>Identify scope gaps, constructability risks, and potential cost exposures.</li>
                        <li>Validate scope alignment with contracts, specifications, and client requirements.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B2340] mb-3">Electrical & I&C Oversight</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                        <li>Develop and validate scopes for MV and LV distribution systems and Switchgear.</li>
                        <li>Protection & controls systems, DCS integration, and field instrumentation.</li>
                        <li>Ensure compliance with applicable codes and standards (NEC, IEEE, NFPA, etc.).</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Qualifications */}
                <div>
                  <h3 className="text-lg font-black text-[#0B2340] mb-6">Qualifications</h3>
                  <div className="space-y-4 text-gray-600 text-sm">
                    <p><strong className="text-[#0B2340]">Required:</strong> 7+ years of experience in power generation construction.</p>
                    <p><strong className="text-[#0B2340]">Technical:</strong> Strong Electrical and I&C background with proven ability to read ISO drawings and P&IDs.</p>
                    <p><strong className="text-[#0B2340]">Prefered:</strong> Experience with major OEM turbine packages (GE, Siemens, Mitsubishi, etc.).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              {/* Action Buttons */}
              <div className="space-y-4">
                <Button 
                  href="/contact" 
                  className="w-full py-5 bg-white border-2 border-gray-200 text-[#0B2340] hover:bg-gray-50 flex items-center justify-center gap-3 shadow-md"
                >
                  <UilUpload size="18" />
                  APPLY ONLINE
                </Button>
                <button className="w-full py-5 bg-[#0B2340] text-white rounded-md hover:bg-blue-900 transition-all flex items-center justify-center gap-3 shadow-lg group">
                  <UilEnvelopeAlt size="18" />
                  APPLY LATER
                </button>
              </div>

              {/* Share This Job */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-6">Share This Job:</h4>
                <div className="flex items-center gap-4">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-110 transition-all shadow-md">
                    <UilFacebookF size="18" />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-400 text-white hover:scale-110 transition-all shadow-md">
                    <UilTwitter size="18" />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:scale-110 transition-all shadow-md">
                    <UilLinkedin size="18" />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 text-white hover:scale-110 transition-all shadow-md">
                    <UilEnvelopeAlt size="18" />
                  </button>
                </div>
              </div>

              {/* Related Jobs placeholder */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-[#0B2340]">Related Jobs</h4>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { title: 'Electrical Engineer', loc: 'Phoenix, AZ' },
                    { title: 'Project Manager', loc: 'Dallas, TX' }
                  ].map((job, i) => (
                    <Link key={i} href="/jobs" className="block px-6 py-4 hover:bg-blue-50 transition-colors group">
                      <span className="block text-sm font-bold text-[#0B2340] group-hover:text-blue-600 mb-1">{job.title}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{job.loc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
