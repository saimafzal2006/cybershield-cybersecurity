import { useReveal } from '@/hooks/useReveal';

const stats = [
  { value: '5', label: 'Common Cyber Threats' },
  { value: '5', label: 'Essential Cyber Habits' },
  { value: '8+', label: 'Phishing Warning Signs' },
  { value: '1', label: 'Goal: Stay Secure' },
];

export function Stats() {
  const { ref, visible } = useReveal();
  return (
    <section className="relative -mt-6 pb-6" aria-label="Quick overview">
      <div className="container-x">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4`}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="card group relative overflow-hidden p-5 text-center transition-transform duration-300 hover:-translate-y-1 sm:p-6"
            >
              <div
                className="pointer-events-none absolute -top-px left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/60 to-transparent"
                aria-hidden="true"
              />
              <div className="font-display text-4xl font-bold text-accent sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted">
          Educational overview — not real-world statistics.
        </p>
      </div>
    </section>
  );
}
