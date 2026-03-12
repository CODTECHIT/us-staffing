'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import UilUserPlus from '@iconscout/react-unicons/icons/uil-user-plus';
import UilApps from '@iconscout/react-unicons/icons/uil-apps';
import UilPhone from '@iconscout/react-unicons/icons/uil-phone';

const navItems = [
  {
    label: 'SEARCH JOBS',
    icon: <UilSearch size="24" />,
    href: '/jobs',
  },
  {
    label: 'REQUEST TALENT',
    icon: <UilUserPlus size="24" />,
    href: '/employers',
  },
  {
    label: 'SERVICES',
    icon: <UilApps size="24" />,
    href: '/services',
  },
  {
    label: 'CONTACT US',
    icon: <UilPhone size="24" />,
    href: '/contact',
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] bg-[#0B2340] border-t border-white/10 shadow-[0_-5px_20px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-4 h-20">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1.5 transition-all duration-300 no-underline border-r border-white/5 last:border-r-0 ${
                isActive ? 'bg-teal-600/20 text-teal-400' : 'text-white hover:bg-white/5'
              }`}
            >
              <div className={`${isActive ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
                {item.icon}
              </div>
              <span className="text-[9px] font-black uppercase tracking-wider text-center px-1 leading-tight">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
