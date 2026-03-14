"use client";

import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  UilDesktop,
  UilHeartbeat,
  UilDollarSign,
  UilSetting,
  UilBuilding,
} from "@iconscout/react-unicons";

const industries = [
  {
    icon: <UilDesktop size="40" />,
    title: "Technology",
    description:
      "Software engineers, data scientists, cloud architects, and IT specialists.",
    image: "/images/industry-tech.jpg",
    href: "/industries/technology",
  },
  {
    icon: <UilHeartbeat size="40" />,
    title: "Healthcare",
    description:
      "Clinical professionals, medical administrators, and healthcare IT specialists.",
    image: "/images/industry-health.jpg",
    href: "/industries/healthcare",
  },
  {
    icon: <UilDollarSign size="40" />,
    title: "Finance",
    description:
      "Financial analysts, accountants, compliance officers, and banking professionals.",
    image: "/images/industry-finance.jpg",
    href: "/industries/finance",
  },
  {
    icon: <UilSetting size="40" />,
    title: "Engineering",
    description:
      "Electrical, mechanical, civil, and industrial engineers for complex projects.",
    image: "/images/industry-engineering.jpg",
    href: "/industries/engineering",
  },
  {
    icon: <UilBuilding size="40" />,
    title: "Business Operations",
    description:
      "Project managers, operations analysts, HR specialists, and administrative professionals.",
    image: "/images/industry-business.jpg",
    href: "/industries/business-operations",
  },
];

export default function Industries() {
  return (
    <section
      className="py-[5vh] sm:py-16 md:py-20"
      style={{ backgroundColor: "#f9fafb" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            subtitle="Industries We Serve"
            title="Expertise Across Key Sectors"
            description="Deep industry knowledge that enables us to find the right talent for specialized roles."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-10">
          {industries.map((industry, index) => (
            <ScrollReveal
              key={industry.title}
              delay={index * 0.04}
              direction="up"
            >
              <Link href={industry.href} className="no-underline">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.15 }}
                  className="relative h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
                >
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover object-center transition-transform duration-200 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-200" />

                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-4 sm:p-6 md:p-8">
                    <div
                      className="mb-4 transition-transform duration-200 group-hover:scale-110"
                      style={{ color: "#26C6DA" }}
                    >
                      {industry.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-center mb-2 drop-shadow-md">
                      {industry.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 leading-relaxed"
                      style={{ color: "#C0CAD9" }}
                    >
                      {industry.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
