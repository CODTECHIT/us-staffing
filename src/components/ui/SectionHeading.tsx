interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} mb-8 ${className}`}
    >
      {subtitle && (
        <p
          className="text-sm font-bold uppercase mb-4"
          style={{
            letterSpacing: '0.2em',
            color: light ? '#4DD0E1' : '#0891B2',
          }}
        >
          {subtitle}
        </p>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
        style={{ color: light ? '#ffffff' : '#0B2340' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-5 text-lg leading-relaxed"
          style={{ color: light ? '#c0cad9' : '#6b7280' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
