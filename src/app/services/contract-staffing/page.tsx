import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';
import DualCTA from '@/components/sections/DualCTA';
import { UilCheckCircle, UilAngleRight } from '@iconscout/react-unicons';

export const metadata: Metadata = {
  title: 'Contract Staffing | Maxera Talent',
  description: 'Access top-tier professionals for defined project timelines. Our contract staffing services include full employment management.',
};

export default function ContractStaffingPage() {
  return (
    <>
      <Hero
        title="Contract Staffing"
        subtitle="Agile talent solutions for project-based demands."
        backgroundImage="/images/service-contract.jpg"
        cta1={{ label: 'Request Talent', href: '/employers' }}
        compact
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Primary Content */}
            <div className="lg:w-2/3">
              <ScrollReveal direction="left">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 font-heading">
                  Elevating Your Strategy with Contract Staffing
                </h2>
                <p className="text-xl text-navy-300 mb-10 leading-relaxed font-light italic border-l-4 border-teal-500 pl-6">
                  Access top-tier professionals for defined project timelines. Our contract staffing services include full employment management, from payroll to compliance, so you can focus on your core business.
                </p>
                <div className="prose prose-lg text-gray-600 mb-12 max-w-none">
                  <p>Our contract staffing model is built to support your most ambitious projects without the complexities of direct employment. We provide specialists who bring deep expertise and a focused mindset, ensuring your project goals are met on time and within budget. From IT transformations to operational scaling, our contractors integrate seamlessly with your culture and workflows.</p>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-12 border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-bold text-navy-900 mb-8 flex items-center gap-3">
                    <UilCheckCircle size="28" className="text-teal-400" />
                    Our Proven Process
                  </h3>
                  <div className="space-y-8">
                    {[
                      { title: 'Project Scope Definition', desc: 'We work with you to understand the technical requirements and project milestones.' },
                      { title: 'Specialist Selection', desc: 'We present a shortlist of candidates who possess the exact skills needed for your success.' },
                      { title: 'Seamless Onboarding', desc: 'We handle all paperwork, payroll, and compliance, allowing the contractor to start immediately.' },
                      { title: 'Performance Monitoring', desc: 'We stay involved to ensure the contractor is meeting expectations and delivering value.' }
                    ].map((step, index) => (
                      <div key={index} className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-lg">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-lg font-bold text-navy-900 mb-1">{step.title}</p>
                          <p className="text-gray-500 text-sm">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar / Key Benefits */}
            <aside className="lg:w-1/3 w-full sticky top-32">
              <ScrollReveal direction="right">
                <div className="bg-navy-900 rounded-3xl p-8 text-white shadow-2xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                  
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
                    Key Benefits
                  </h3>
                  
                  <ul className="space-y-6 mb-10">
                    {[
                      'Access specialized skills for specific projects',
                      'No long-term employment commitments',
                      'We handle payroll, benefits, and compliance',
                      'Seamless integration with your existing team'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-4 group">
                        <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          <UilCheckCircle size="16" />
                        </div>
                        <span className="text-navy-100 leading-relaxed font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-navy-300 text-sm mb-6">Ready to see how Contract Staffing can transform your hiring?</p>
                    <Button href="/contact" variant="ghost-white" className="w-full">
                      Get a Quote
                    </Button>
                  </div>
                </div>

                {/* Related Links */}
                <div className="mt-8 px-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#0B2340] mb-6">Explore Other Services</h4>
                  <div className="space-y-3">
                    {[
                      { title: 'Contingent Recruitment', href: '/services/contingent-recruitment' },
                      { title: 'Direct Hire', href: '/services/direct-hire' }
                    ].map(s => (
                      <a 
                        key={s.href} 
                        href={s.href}
                        className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-teal-500 hover:bg-teal-50/30 transition-all group no-underline"
                      >
                        <span className="text-navy-700 font-bold text-sm group-hover:text-teal-600">{s.title}</span>
                        <UilAngleRight size="18" className="text-gray-400 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>

      <DualCTA />
    </>
  );
}
