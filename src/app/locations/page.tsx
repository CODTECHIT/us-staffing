import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';
import DualCTA from '@/components/sections/DualCTA';
import TextMedia from '@/components/sections/TextMedia';
import FAQ from '@/components/sections/FAQ';
import { UilCheckCircle, UilUsersAlt, UilSetting, UilHeartbeat, UilDesktop, UilShieldCheck, UilCalendarAlt } from '@iconscout/react-unicons';

export const metadata: Metadata = {
  title: 'Workforce Solutions in the USA | Maxera Talent',
  description: 'Providing elite workforce solutions and staffing services across the United States. Expertise in skilled trades, technology, and healthcare.',
};

export default function USALocationPage() {
  return (
    <>
      <Hero
        title="Workforce Solutions Across the USA"
        subtitle="Premier Project-Based Staffing Solutions for US-Based Enterprises."
        backgroundImage="/images/locations/usa-hero.png"
        cta1={{ label: 'Get In Touch', href: '/contact' }}
        compact
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <ScrollReveal direction="up">
            <div className="mb-20 max-w-4xl">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-4 inline-block">National Coverage</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-navy-900 mb-8 font-heading leading-tight italic">
                Project-Based Workforce Support <span className="text-teal-500">Across the USA</span>
              </h2>
              <p className="text-xl text-navy-400 leading-relaxed font-medium">
                Industrial construction and technology projects throughout the <span className="text-navy-900 font-bold">United States</span> move fast and leave little margin for disruption. With labor often accounting for <span className="text-teal-600 font-bold">40-50% of total project costs</span>, dependable staffing is essential to maintaining schedules and meeting performance targets.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-24">
            <TextMedia
              subtitle="Specialized Talent"
              title="Job-Ready Skilled Professionals"
              description="When crews are underqualified or slow to mobilize, productivity drops and delays follow. Maxera Talent works with contractors and enterprises across the USA to deliver qualified, job-ready professionals prepared for high-stakes environments."
              image="/images/workforce-solutions.jpg"
              imagePosition="right"
              ctaLabel="View Our Industries"
              ctaHref="/industries"
            />
          </div>
        </div>
      </section>

      {/* Workforce Coverage Section (Icon Grid) */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-500/5 -skew-x-12 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-5xl font-black mb-6 italic">
              Workforce Coverage in <span className="text-teal-400">the United States</span>
            </h2>
            <p className="text-navy-200 text-lg max-w-3xl mx-auto mb-16 font-medium">
              Maxera Talent supports a wide range of project-driven roles across the USA, supplying professionals who are ready to contribute immediately to your success.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
            {[
              { icon: <UilDesktop size="48" />, label: 'IT Specialists' },
              { icon: <UilHeartbeat size="48" />, label: 'Healthcare Pros' },
              { icon: <UilSetting size="48" />, label: 'Engineers' },
              { icon: <UilUsersAlt size="48" />, label: 'Project Managers' },
              { icon: <UilUsersAlt size="48" />, label: 'Software Devs' },
              { icon: <UilShieldCheck size="48" />, label: 'QA / QC Experts' },
              { icon: <UilCalendarAlt size="48" />, label: 'Logistics' },
              { icon: <UilUsersAlt size="48" />, label: 'Field Support' },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} direction="up">
                <div className="flex flex-col items-center group">
                  <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-400 group-hover:text-navy-900 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(45,212,191,0.2)]">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-navy-100">{item.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-20">
              <Button href="/employers" variant="solid" size="lg">I Need Talent</Button>
              <Button href="/jobs" variant="ghost-white" size="lg">I Want An Opportunity</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-navy-900 italic">
              Why US Contractors Partner With <span className="text-teal-600">Maxera Talent</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Rapid Mobilization',
                desc: 'Our expansive national network allows us to source and deploy specialized talent anywhere in the USA with industry-leading speed.',
                color: 'bg-teal-50 text-teal-600'
              },
              {
                title: 'Strict Compliance',
                desc: 'We manage all payroll, taxes, and state-specific regulations, ensuring 100% compliance across all 50 states.',
                color: 'bg-amber-50 text-amber-600'
              },
              {
                title: 'Unmatched Quality',
                desc: 'Every professional in our pool undergoes rigorous vetting and credentialing verification to ensure they meet the highest standards.',
                color: 'bg-blue-50 text-blue-600'
              }
            ].map((box, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 h-full hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-12 h-12 rounded-2xl ${box.color} flex items-center justify-center mb-8`}>
                    <UilCheckCircle size="24" />
                  </div>
                  <h3 className="text-xl font-black text-navy-900 mb-4">{box.title}</h3>
                  <p className="text-navy-400 leading-relaxed font-medium italic">{box.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <DualCTA />
    </>
  );
}
