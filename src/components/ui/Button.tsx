import Link from 'next/link';
import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'solid' | 'ghost' | 'ghost-white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'solid',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold rounded-full transition-all duration-150 tracking-wider uppercase cursor-pointer no-underline';

  const sizeStyles = {
    sm: 'px-6 py-2.5 text-xs',
    md: 'px-8 py-3.5 text-sm',
    lg: 'px-10 py-4 text-sm',
  };

  const variantStyles = {
    solid:
      'bg-[#0891B2] text-white hover:bg-[#0E7490] hover:scale-105 shadow-[0_4px_14px_rgba(8,145,178,0.3)] hover:shadow-[0_6px_20px_rgba(8,145,178,0.4)]',
    ghost:
      'bg-transparent border-2 border-[#0B2340] text-[#0B2340] hover:bg-[#0B2340] hover:text-white hover:scale-105',
    'ghost-white':
      'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0B2340] hover:scale-105',
  };

  const styles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
