import { Check, Timer } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { checklistItems } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export function Checklist() {
  const { ref, visible } = useReveal();
  return (
    <section className="bg-soft py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Your 60-Second Security Check"
          title="A quick security checklist you can run right now"
          subtitle="Scan it, act on it, and make it a habit. Eight items — under a minute."
        />

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto mt-12 max-w-4xl`}
        >
          <div className="card overflow-hidden">
            <div className="flex items-center gap-3 border-b border-soft px-6 py-4">
              <Timer className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="text-sm font-bold uppercase tracking-wider text-muted">
                Quick Security Checklist
              </span>
            </div>
            <ul className="grid divide-y divide-[var(--border)] sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
              {checklistItems.map((item, i) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 p-5"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold leading-snug">{item.title}</h3>
                    <p className="mt-0.5 text-xs text-muted">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
