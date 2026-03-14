"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import {
  UilUsersAlt,
  UilHardHat,
  UilFileAlt,
  UilSearch,
  UilAngleDown,
} from "@iconscout/react-unicons";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  cta1?: { label: string; href: string };
  cta2?: { label: string; href: string };
  compact?: boolean;
  showOverlappingCards?: boolean;
}

const overlappingCards = [
  {
    title: "Contingent Recruitment",
    image: "/images/service-contingent.jpg",
    icon: <UilUsersAlt size="64" />,
    href: "/services#contingent",
  },
  {
    title: "Contract Staffing",
    image: "/images/service-contract.jpg",
    icon: <UilHardHat size="64" />,
    href: "/services#contract",
  },
  {
    title: "Direct Hire",
    image: "/images/service-direct.jpg",
    icon: <UilFileAlt size="64" />,
    href: "/services#direct-hire",
  },
];

export default function Hero({
  title,
  subtitle,
  backgroundImage = "/images/hero.jpeg",
  cta1,
  cta2,
  compact = false,
  showOverlappingCards = false,
}: HeroProps) {
  return (
    <section
      className={`relative w-full overflow-hidden ${compact ? "pb-8" : "pb-20"}`}
    >
      {/* Hero main area — full viewport, content vertically centered */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          minHeight: compact ? "55vh" : "89vh",
          paddingTop: compact ? "96px" : "0",
          paddingBottom: compact ? "64px" : "0",
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            className="object-cover object-center"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1
            className="font-heading font-bold text-white leading-tight mb-6"
            style={{
              fontSize: "clamp(1.8rem, 8vw, 4.5rem)",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {subtitle}
            </p>
          )}

          {(cta1 || cta2) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              {cta1 && (
                <Button href={cta1.href} variant="ghost-white" size="lg">
                  {cta1.label}
                </Button>
              )}
              {cta2 && (
                <Button href={cta2.href} variant="ghost-white" size="lg">
                  {cta2.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ===== OVERLAPPING SERVICE CARDS (vpausa-style) ===== */}
      {showOverlappingCards && (
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 mt-[-160px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {overlappingCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="block relative overflow-hidden group cursor-pointer no-underline shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(8,145,178,0.25)]"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
                  height: "420px",
                  borderRadius: "32px 32px 0 0",
                }}
              >
                {/* Card BG image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />

                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                />

                {/* Card Content — centered icon + title */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
                  {/* Unicon icon */}
                  <div
                    className="mb-8 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      color: "#26C6DA",
                      filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))",
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-center leading-tight px-4"
                    style={{ textShadow: "0 4px 15px rgba(0,0,0,0.6)" }}
                  >
                    {card.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          {/* ===== REFERENCE-STYLE SEARCH BAR ===== */}
          <div className="mt-16 md:mt-24 w-full max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 py-10 lg:py-8 px-6 lg:px-12 bg-white/95 backdrop-blur-md rounded-[2rem] lg:rounded-[3rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] border border-white/60">
              {/* Label */}
              <div className="shrink-0 mb-2 lg:mb-0">
                <span className="text-xs lg:text-sm font-black uppercase tracking-[0.2em] text-[#0B2340]">
                  Search Jobs
                </span>
              </div>

              {/* Title Input */}
              <div className="w-full lg:w-72">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="job title, skills, etc."
                    className="w-full px-5 py-3 border border-gray-200 rounded-lg lg:rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-gray-700 placeholder:text-gray-400 text-sm transition-all"
                  />
                </div>
              </div>

              {/* Location Select (Pill) */}
              <div className="w-full lg:w-48 relative">
                <select
                  className="w-full pl-6 pr-10 py-3 border border-gray-200 rounded-lg lg:rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-gray-700 text-sm appearance-none bg-white cursor-pointer transition-all"
                  defaultValue=""
                >
                  <option value="" disabled>
                    United States
                  </option>
                  <option value="Remote">Remote (USA)</option>
                  <option value="SF">San Francisco, CA</option>
                  <option value="NY">New York, NY</option>
                  <option value="TX">Austin, TX</option>
                  <option value="TX2">Dallas, TX</option>
                </select>
                <div className="absolute right-4 inset-y-0 flex items-center pointer-events-none">
                  <div className="flex flex-col -gap-1">
                    <UilAngleDown size="14" className="text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Industry Select (Pill) */}
              <div className="w-full lg:w-48 relative">
                <select
                  className="w-full pl-6 pr-10 py-3 border border-gray-200 rounded-lg lg:rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-gray-700 text-sm appearance-none bg-white cursor-pointer transition-all"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Industry
                  </option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Engineering</option>
                </select>
                <div className="absolute right-4 inset-y-0 flex items-center pointer-events-none">
                  <UilAngleDown size="14" className="text-gray-400" />
                </div>
              </div>

              {/* Search Button (Circle) */}
              <button
                className="w-full lg:w-12 h-12 rounded-lg lg:rounded-full bg-[#0B2340] hover:bg-teal-600 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-105 shrink-0 mt-2 lg:mt-0"
                aria-label="Search"
              >
                <span className="lg:hidden text-sm font-bold mr-2">
                  Search Now
                </span>
                <UilSearch size="20" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
