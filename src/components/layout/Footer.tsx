'use client';

import Link from 'next/link';
import UilLinkedinAlt from '@iconscout/react-unicons/icons/uil-linkedin-alt';
import UilTwitterAlt from '@iconscout/react-unicons/icons/uil-twitter-alt';
import UilFacebookF from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilPhone from '@iconscout/react-unicons/icons/uil-phone';
import UilEnvelope from '@iconscout/react-unicons/icons/uil-envelope';
import UilMapMarker from '@iconscout/react-unicons/icons/uil-map-marker';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Employers', href: '/employers' },
  { label: 'Candidates', href: '/candidates' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  { label: 'Contingent Recruitment', href: '/services/contingent-recruitment' },
  { label: 'Contract Staffing', href: '/services/contract-staffing' },
  { label: 'Direct Hire', href: '/services/direct-hire' },
];

const industries = [
  { label: 'Technology', href: '/industries/technology' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Finance', href: '/industries/finance' },
  { label: 'Engineering', href: '/industries/engineering' },
  { label: 'Business Operations', href: '/industries/business-operations' },
];

const socialLinks = [
  { icon: UilLinkedinAlt, href: '#', label: 'LinkedIn' },
  { icon: UilTwitterAlt, href: '#', label: 'Twitter' },
  { icon: UilFacebookF, href: '#', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0B2340' }} className="text-white relative overflow-hidden">
      {/* Gear pattern overlay */}
      <div className="absolute inset-0 gear-pattern opacity-40" />

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-20 pb-10">
        {/* Logo centered */}
        <div className="text-center mb-14">
          <Link href="/" className="inline-block no-underline">
            <div className="text-4xl font-bold tracking-tight">
              <span className="font-heading text-white">Maxera</span>
              <span className="font-heading" style={{ color: '#26C6DA' }}> Talent</span>
            </div>
          </Link>
          <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: '#96A8C0' }}>
            Connecting exceptional talent with industry-leading companies across the United States.
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Contact Info */}
          <div>
            <h3
              className="text-sm font-bold uppercase mb-6"
              style={{ letterSpacing: '0.15em', color: '#26C6DA' }}
            >
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm" style={{ color: '#C0CAD9' }}>
                <UilPhone size="16" style={{ color: '#0891B2' }} className="shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm" style={{ color: '#C0CAD9' }}>
                <UilEnvelope size="16" style={{ color: '#0891B2' }} className="shrink-0" />
                <span>info@maxeratalent.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm" style={{ color: '#C0CAD9' }}>
                <UilMapMarker size="16" style={{ color: '#0891B2' }} className="shrink-0 mt-0.5" />
                <span>Nationwide Coverage<br />United States</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 no-underline"
                  style={{
                    border: '2px solid #4D6D94',
                    color: '#96A8C0',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0891B2';
                    e.currentTarget.style.borderColor = '#0891B2';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = '#4D6D94';
                    e.currentTarget.style.color = '#96A8C0';
                  }}
                >
                  <social.icon size="18" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-sm font-bold uppercase mb-6"
              style={{ letterSpacing: '0.15em', color: '#26C6DA' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm flex items-center gap-2 transition-colors duration-200 no-underline hover:no-underline"
                    style={{ color: '#C0CAD9' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#26C6DA'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#C0CAD9'; }}
                  >
                    <span style={{ color: '#0891B2', fontSize: '10px' }}>▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-sm font-bold uppercase mb-6"
              style={{ letterSpacing: '0.15em', color: '#26C6DA' }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm flex items-center gap-2 transition-colors duration-200 no-underline hover:no-underline"
                    style={{ color: '#C0CAD9' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#26C6DA'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#C0CAD9'; }}
                  >
                    <span style={{ color: '#0891B2', fontSize: '10px' }}>▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3
              className="text-sm font-bold uppercase mb-6"
              style={{ letterSpacing: '0.15em', color: '#26C6DA' }}
            >
              Industries
            </h3>
            <ul className="space-y-3">
              {industries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm flex items-center gap-2 transition-colors duration-200 no-underline hover:no-underline"
                    style={{ color: '#C0CAD9' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#26C6DA'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#C0CAD9'; }}
                  >
                    <span style={{ color: '#0891B2', fontSize: '10px' }}>▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid #22416E' }}>
          <p className="text-xs" style={{ color: '#6C86A7' }}>
            © {new Date().getFullYear()} Maxera Talent. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs transition-colors no-underline" style={{ color: '#6C86A7' }}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs transition-colors no-underline" style={{ color: '#6C86A7' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
