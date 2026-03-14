"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import {
  UilUsersAlt,
  UilClipboardAlt,
  UilBriefcaseAlt,
} from "@iconscout/react-unicons";

const services = [
  {
    icon: <UilUsersAlt size="36" />,
    title: "Contingent Recruitment",
    description:
      "Flexible staffing solutions to scale your workforce up or down based on project demands and seasonal needs.",
    image: "/images/service-contingent.jpg",
    href: "/services/contingent-recruitment",
  },
  {
    icon: <UilClipboardAlt size="36" />,
    title: "Contract Staffing",
    description:
      "Access specialized professionals on contract for defined project timelines with full compliance management.",
    image: "/images/service-contract.jpg",
    href: "/services/contract-staffing",
  },
  {
    icon: <UilBriefcaseAlt size="36" />,
    title: "Direct Hire",
    description:
      "Permanent placement solutions to find and secure top-tier talent for your most critical roles.",
    image: "/images/service-direct.jpg",
    href: "/services/direct-hire",
  },
];

interface ServicesProps {
  overlapping?: boolean;
}

export default function Services({ overlapping = false }: ServicesProps) {
  return (
    <section
      className={`relative ${overlapping ? "mt-0 z-20 pb-8" : "py-[5vh]"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        {!overlapping && (
          <ScrollReveal>
            <SectionHeading
              subtitle="What We Do"
              title="Our Core Services"
              description="Comprehensive staffing solutions tailored to your business needs."
            />
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-10">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              delay={index * 0.15}
              direction="up"
            >
              <Link href={service.href}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl h-64 sm:h-72 md:h-80"
                >
                  {/* Optimized Next.js Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    priority={index === 0}
                    className="object-cover object-center absolute inset-0 transition-transform duration-700 group-hover:scale-115"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  />

                  {/* Bottom V-shape clip decorative element */}
                  {overlapping && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-12"
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 0%, 50% 100%, 0 0%)",
                        backgroundColor: "rgba(11, 35, 64, 0.9)",
                      }}
                    />
                  )}

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-4 sm:p-6 md:p-8">
                    <div
                      className="mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: "#26C6DA" }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-center mb-3 drop-shadow-md">
                      {service.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs leading-relaxed"
                      style={{ color: "#C0CAD9" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {!overlapping && (
          <ScrollReveal delay={0.5}>
            <div className="text-center mt-14">
              <Button href="/services" variant="ghost">
                View All Services
              </Button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
