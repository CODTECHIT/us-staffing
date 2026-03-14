"use client";

import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface CTAProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CTA({
  title = "Ready to Build Your Dream Team?",
  subtitle = "Let Maxera Talent connect you with the professionals who will drive your business forward.",
  backgroundImage = "/images/cta-bg.jpg",
  ctaLabel = "Get Started",
  ctaHref = "/contact",
}: CTAProps) {
  return (
    <section className="relative py-[5vh] sm:py-16 md:py-20 overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(11, 35, 64, 0.92) 0%, rgba(6, 21, 39, 0.88) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            {subtitle}
          </p>
          <Button href={ctaHref} variant="ghost-white" size="lg">
            {ctaLabel}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
