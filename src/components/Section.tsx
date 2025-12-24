import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark';
  title?: string;
  subtitle?: string;
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
  title,
  subtitle,
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-[#0B7272] text-white',
  };

  const titleColor = background === 'dark' ? 'text-white' : 'text-gray-900';
  const subtitleColor = background === 'dark' ? 'text-white/80' : 'text-gray-600';

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} mb-4`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg md:text-xl ${subtitleColor} max-w-3xl mx-auto`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
