import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} max-w-2xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-[2.6rem]">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
