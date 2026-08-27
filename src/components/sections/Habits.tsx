import { SectionHeading } from '../SectionHeading';
import { SecurityTip } from '../SecurityTip';
import { habits, securityTips } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export function Habits() {
  const { ref, visible } = useReveal();
  return (
    <section id="habits" className="scroll-mt-20 bg-soft py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Build Better Cyber Habits"
          title="Five habits that make you a harder target"
          subtitle="Small, repeatable habits protect you far more than any single tool. Build these into your routine."
        />

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} relative mt-14`}
        >
          {/* vertical line */}
          <div
            className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent md:block"
            aria-hidden="true"
          />
          <ol className="space-y-5">
            {habits.map((h) => {
              const Icon = h.icon;
              return (
                <li
                  key={h.num}
                  className="card group relative flex items-start gap-5 p-5 transition-all duration-300 hover:-translate-y-1 hover:glow sm:p-6"
                >
                  {/* node */}
                  <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-400/10 text-accent">
                    <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="font-display text-sm font-bold text-accent">{h.num}</span>
                      <h3 className="text-lg font-bold sm:text-xl">{h.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted sm:text-base">{h.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-8 max-w-xl">
          <SecurityTip text={securityTips[3]} />
        </div>
      </div>
    </section>
  );
}
