import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';
import DualCTA from '@/components/sections/DualCTA';
import { UilCheckCircle, UilAngleRight } from '@iconscout/react-unicons';

export const metadata: Metadata = {
  title: 'Contingent Recruitment | Maxera Talent',
  description: 'Flexible staffing solutions to scale your workforce up or down based on project demands and seasonal needs.',
};

export default function ContingentRecruitmentPage() {
  return (
    <>
      <Hero
        title="Contingent Recruitment"
        subtitle="Scaling your workforce with speed and agility."
        backgroundImage="/images/service-contingent.jpg"
        cta1={{ label: 'Request Talent', href: '/employers' }}
        compact
      />

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Primary Content */}
            <div className="lg:w-2/3">
              <ScrollReveal direction="left">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 font-heading">
                  Elevating Your Strategy with Contingent Recruitment
                </h2>
                <p className="text-xl text-navy-300 mb-10 leading-relaxed font-light italic border-l-4 border-teal-500 pl-6">
                  Scale your team up or down based on project demands. Our contingent staffing solutions provide the agility you need to respond to market changes while maintaining quality and compliance.
                </p>
                <div className="prose prose-lg text-gray-600 mb-12 max-w-none">
                  <p>In today&apos;s rapidly changing business environment, flexibility is key to maintaining a competitive edge. Our contingent recruitment services are designed to give you the talent you need, exactly when you need it, without the long-term commitments of permanent hires. Whether you&apos;re facing seasonal peaks, project-based surges, or temporary leaves, we provide pre-vetted professionals ready to hit the ground running.</p>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-12 border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-bold text-navy-900 mb-8 flex items-center gap-3">
                    <UilCheckCircle size="28" className="text-teal-400" />
                    Our Proven Process
                  </h3>
                  <div className="space-y-8">
                    {[
                      { title: 'Requirement Assessment', desc: 'We analyze your project scope, timeline, and the specific skills required to ensure a perfect match.' },
                      { title: 'Talent Sourcing & Screening', desc: 'Our team identifies and rigorously vets candidates from our extensive database of top-tier professionals.' },
                      { title: 'Rapid Deployment', desc: 'We handle onboarding and deployment quickly, minimizing downtime and getting your project moving.' },
                      { title: 'Ongoing Support', desc: 'We provide continuous management and support throughout the assignment to ensure success.' }
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
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full mr-0 mt-0 blur-3xl"></div>

                  <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
                    Key Benefits
                  </h3>

                  <ul className="space-y-6 mb-10">
                    {[
                      'Rapid scaling of your workforce',
                      'Reduced overhead and administrative burden',
                      'Access to pre-vetted, qualified professionals',
                      'Full compliance and risk management'
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
                    <p className="text-navy-300 text-sm mb-6">Ready to see how Contingent Recruitment can transform your hiring?</p>
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
                      { title: 'Contract Staffing', href: '/services/contract-staffing' },
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
