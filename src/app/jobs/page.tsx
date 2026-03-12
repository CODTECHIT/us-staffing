'use client';

import { useState } from 'react';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import { UilSearch, UilAngleDown, UilUpload, UilAngleRight } from '@iconscout/react-unicons';

const allJobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    location: 'San Francisco, CA',
    type: 'Full-Time',
    description: 'Design and implement scalable software solutions for enterprise clients.',
    category: 'Technology',
    postedDate: '03/08/26',
  },
  {
    id: 2,
    title: 'Healthcare Data Analyst',
    location: 'Austin, TX',
    type: 'Contract',
    description: 'Analyze patient outcome data and develop reporting dashboards.',
    category: 'Healthcare',
    postedDate: '03/05/26',
  },
  {
    id: 3,
    title: 'Financial Controller',
    location: 'New York, NY',
    type: 'Full-Time',
    description: 'Oversee financial reporting, budgeting, and compliance.',
    category: 'Finance',
    postedDate: '03/02/26',
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    location: 'Remote',
    type: 'Contract',
    description: 'Build and maintain CI/CD pipelines, manage cloud infrastructure.',
    category: 'Technology',
    postedDate: '02/28/26',
  },
  {
    id: 5,
    title: 'Mechanical Engineer',
    location: 'Houston, TX',
    type: 'Full-Time',
    description: 'Design mechanical systems for industrial automation projects.',
    category: 'Engineering',
    postedDate: '02/25/26',
  },
  {
    id: 6,
    title: 'Registered Nurse (RN)',
    location: 'Chicago, IL',
    type: 'Contract',
    description: 'Provide patient care in a fast-paced hospital setting.',
    category: 'Healthcare',
    postedDate: '02/20/26',
  },
  {
    id: 7,
    title: 'Project Manager',
    location: 'Dallas, TX',
    type: 'Full-Time',
    description: 'Lead cross-functional teams to deliver enterprise software projects.',
    category: 'Business Operations',
    postedDate: '02/15/26',
  },
  {
    id: 8,
    title: 'Electrical Engineer',
    location: 'Phoenix, AZ',
    type: 'Contract',
    description: 'Design electrical systems for renewable energy projects.',
    category: 'Engineering',
    postedDate: '02/10/26',
  },
];

const jobTypes = ['All Types', 'Full-Time', 'Contract'];

export default function JobsPage() {
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredJobs = allJobs.filter((job) => {
    const matchLocation = locationFilter === 'All Locations' || job.location === locationFilter;
    const matchType = typeFilter === 'All Types' || job.type === typeFilter;
    return matchLocation && matchType;
  });

  return (
    <>
      <Hero
        title="Find Your Next Opportunity"
        subtitle="Browse open positions with top employers across the United States."
        backgroundImage="/images/hero-jobs.jpg"
        compact
      />

      <section className="py-12 md:py-20 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button 
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="w-full flex items-center justify-between px-6 py-4 bg-white rounded-xl border border-gray-200 shadow-sm font-bold text-[#0B2340]"
            >
              <div className="flex items-center gap-2">
                <UilSearch size="18" className="text-teal-500" />
                <span>Filters & Search</span>
              </div>
              <UilAngleDown className={`transition-transform duration-300 ${showMobileFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">

            {/* LEFT SIDEBAR: Filters */}
            <aside className={`lg:w-1/4 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
                <div className="space-y-6">
                  {/* Keywords */}
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-2">
                      Keywords
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="job title, skills, etc."
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm text-center transition-all"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-2">
                      Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter city or zip code"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm text-center transition-all"
                        value={locationFilter === 'All Locations' ? '' : locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value || 'All Locations')}
                      />
                    </div>
                  </div>

                  {/* Radius placeholder */}
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-2">
                      Radius
                    </label>
                    <input type="range" className="w-full accent-[#0B2340]" min="0" max="100" />
                    <div className="flex justify-between text-[10px] text-gray-400 font-bold mt-1">
                      <span>0 Miles</span>
                      <span>100 Miles</span>
                    </div>
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-2">
                      Industry
                    </label>
                    <div className="relative">
                      <select
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                        className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm appearance-none bg-white cursor-pointer transition-all"
                      >
                        <option value="All Types">Click to select Industry</option>
                        {jobTypes.filter(t => t !== 'All Types').map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <UilAngleDown size="18" className="text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-[#0B2340] text-white text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-blue-600 transition-all shadow-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98]">
                    <UilSearch size="16" />
                    Apply Filters
                  </button>
                </div>
              </div>
            </aside>

            {/* MAIN CONTENT: Job List */}
            <main className="lg:w-2/4">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Header inside list */}
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Sort By:</span>
                    <select className="px-2 py-1 border border-gray-300 rounded bg-white text-xs text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500">
                      <option>Date</option>
                      <option>Relevance</option>
                    </select>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                      <Link
                        key={job.id}
                        href={`/jobs/${job.id}`}
                        className="block px-6 py-5 hover:bg-blue-50/40 transition-colors group relative"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-sm font-black text-[#0B2340] group-hover:text-blue-600 transition-colors border-b-2 border-transparent group-hover:border-blue-600">
                            {job.title}
                          </h3>
                          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right">
                            {job.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                          <span className="flex items-center gap-1">
                            {/* Clock icon placeholder */}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" strokeWidth="2" />
                              <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            Posted {job.postedDate}
                          </span>
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                          <UilAngleRight size="20" className="text-blue-600" />
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="p-20 text-center">
                      <p className="text-gray-400 font-medium">No jobs match your current filters.</p>
                      <button
                        onClick={() => { setLocationFilter('All Locations'); setTypeFilter('All Types'); }}
                        className="mt-4 text-blue-600 font-bold hover:underline"
                      >
                        Clear All Filters
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Load More placeholder */}
              {filteredJobs.length > 0 && (
                <div className="mt-8 text-center">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    Showing {filteredJobs.length} positions
                  </p>
                </div>
              )}
            </main>

            {/* RIGHT SIDEBAR: CTAs */}
            <aside className="lg:w-1/4 space-y-6">
              {/* Submit Resume */}
              <div className="bg-[#0B2340]/95 p-8 rounded-xl text-white shadow-lg border border-white/10">
                <div className="flex items-start gap-3 mb-4">
                  <UilUpload size="24" className="text-blue-400 shrink-0" />
                  <h4 className="text-lg font-bold">Skip the Search</h4>
                </div>
                <p className="text-sm text-gray-300 mb-8 leading-relaxed">
                  Send us your resume, and we&apos;ll find the jobs that are the best match for you.
                </p>
                <Link
                  href="/candidates#register"
                  className="block w-full py-4 bg-white text-[#0B2340] text-center text-xs font-black uppercase tracking-widest rounded transition-all hover:bg-blue-50 shadow-md flex items-center justify-center gap-2"
                >
                  <UilUpload size="16" />
                  Submit Your Resume
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
