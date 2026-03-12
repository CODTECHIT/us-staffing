import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';
import DualCTA from '@/components/sections/DualCTA';
import { UilCheckCircle, UilAngleRight } from '@iconscout/react-unicons';

export const metadata: Metadata = {
  title: 'Finance Industry Staffing | Maxera Talent',
  description: 'Precision financial staffing for banks, fintech, and accounting firms.',
};

export default function FinanceIndustryPage() {
  return (
    <>
      <Hero
        title="Finance"
        subtitle="Ensuring Financial Precision with Expert Talent."
        backgroundImage="/images/industry-finance.jpg"
        cta1={{ label: 'View Jobs', href: '/jobs?industry=Finance' }}
        compact
      />

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Primary Content */}
            <div className="lg:w-2/3">
              <ScrollReveal direction="left">
                <div className="mb-14">
                  <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-4 inline-block">Industry Focus</span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-8 font-heading leading-tight">
                    Powering Progress in <span className="text-teal-500 whitespace-nowrap">Finance</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-6 font-light">
                    From investment banking to emerging fintech, we provide the numerical accuracy and strategic leadership that financial institutions depend on to thrive.
                  </p>
                  <p className="text-lg text-gray-500 leading-relaxed italic border-l-4 border-amber-400 pl-6">
                    In an industry where precision is non-negotiable, we vet our candidates for both technical mastery and ethical leadership.
                  </p>
                </div>

                {/* Challenges Section */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-navy-900 mb-8 flex items-center gap-3">
                    <UilCheckCircle size="28" className="text-amber-500" />
                    Key Challenges
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      'Complex and ever-changing global regulatory landscape',
                      'High demand for data-driven financial analysts',
                      'Bridging the gap between legacy banking and fintech innovation',
                      'Maintaining top-tier security and compliance expertise'
                    ].map((challenge, index) => (
                      <div key={index} className="p-6 rounded-2xl bg-amber-50 border border-amber-100/50 hover:shadow-md transition-all group">
                        <div className="flex gap-4">
                          <span className="text-amber-500 mt-0.5">•</span>
                          <p className="text-navy-900 font-medium">{challenge}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions Section */}
                <div className="p-10 rounded-[3rem] bg-navy-900 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
                   
                  <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                    <UilCheckCircle size="28" className="text-teal-400" />
                    How We Help
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    {[
                      'Deep network of certified CPA and CFA professionals',
                      'Specialized recruitment for risk and compliance roles',
                      'Insights into fintech compensation and equity trends',
                      'Efficient vetting for high-stakes financial leadership'
                    ].map((solution, index) => (
                      <div key={index} className="flex gap-4 items-start group">
                        <div className="w-8 h-8 rounded-lg bg-teal-400/20 flex items-center justify-center shrink-0 group-hover:bg-teal-400 transition-colors duration-300">
                          <UilCheckCircle size="18" className="text-teal-400 group-hover:text-navy-900" />
                        </div>
                        <p className="text-navy-100 font-medium leading-relaxed">{solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 w-full sticky top-32">
              <ScrollReveal direction="right">
                <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-navy-900 mb-6">Expertise You Can Trust</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    We don&apos;t just recruit; we partner. Our deep understanding of Finance enables us to identify the specialized talent that others miss.
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold">98%</div>
                      <span className="text-xs font-bold text-navy-800">Retention Rate</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold">14d</div>
                      <span className="text-xs font-bold text-navy-800">Avg. Fill Time</span>
                    </div>
                  </div>

                  <Button href="/contact" variant="solid" className="w-full">
                    Consult Our Team
                  </Button>
                </div>

                {/* Other Industries Sidebar */}
                <div className="mt-10">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#0B2340] mb-6 px-4">Other Industries</h4>
                  <div className="space-y-2">
                    {[
                      { title: 'Technology', href: '/industries/technology' },
                      { title: 'Healthcare', href: '/industries/healthcare' },
                      { title: 'Engineering', href: '/industries/engineering' },
                      { title: 'Business Operations', href: '/industries/business-operations' }
                    ].map(i => (
                      <a 
                        key={i.href} 
                        href={i.href}
                        className="flex items-center justify-between px-6 py-4 rounded-full hover:bg-white hover:shadow-md hover:border-teal-500 border border-transparent transition-all group no-underline"
                      >
                        <span className="text-navy-500 font-bold text-sm group-hover:text-teal-600">{i.title}</span>
                        <UilAngleRight size="18" className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-teal-500" />
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
