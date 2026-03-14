"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  UilClipboardAlt,
  UilSearch,
  UilShieldCheck,
  UilCalendarAlt,
  UilCheckCircle,
} from "@iconscout/react-unicons";

const steps = [
  {
    icon: <UilClipboardAlt size="32" />,
    title: "Understand Requirements",
    description:
      "We begin by learning your business needs, culture, and specific role requirements.",
  },
  {
    icon: <UilSearch size="32" />,
    title: "Source Candidates",
    description:
      "Our recruiters leverage extensive networks to identify top-tier talent.",
  },
  {
    icon: <UilShieldCheck size="32" />,
    title: "Screen & Vet",
    description:
      "Rigorous screening includes skills assessment, background checks, and cultural fit.",
  },
  {
    icon: <UilCalendarAlt size="32" />,
    title: "Interview & Select",
    description:
      "We manage the entire interview process, scheduling, and communications.",
  },
  {
    icon: <UilCheckCircle size="32" />,
    title: "Successful Placement",
    description:
      "From offer to onboarding, we ensure a smooth transition for both parties.",
  },
];

export default function Process() {
  return (
    <section
      className="py-[5vh] sm:py-16 md:py-20"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            subtitle="Our Process"
            title="How We Connect Talent"
            description="A proven five-step process designed to deliver the right talent, on time."
          />
        </ScrollReveal>

        <div className="relative mt-6 sm:mt-8">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute h-[3px] z-0"
            style={{
              top: "36px",
              left: "10%",
              right: "10%",
              background:
                "linear-gradient(to right, #E0F7FA, #0891B2, #E0F7FA)",
              borderRadius: "2px",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {steps.map((step, index) => (
              <ScrollReveal
                key={step.title}
                delay={index * 0.15}
                direction="up"
              >
                <div className="relative text-center group">
                  {/* Step circle */}
                  <div
                    className="relative z-10 w-[80px] h-[80px] mx-auto mb-6 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "#0B2340",
                      border: "4px solid #E0F7FA",
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Step number badge */}
                  <div
                    className="absolute z-20 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center shadow-md"
                    style={{
                      backgroundColor: "#F59E0B",
                      top: "-4px",
                      left: "50%",
                      marginLeft: "16px",
                    }}
                  >
                    {index + 1}
                  </div>

                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: "#0B2340" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6b7280" }}
                  >
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
