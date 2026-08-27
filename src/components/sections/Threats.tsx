import { AlertTriangle, ShieldAlert, CheckCircle2, Info } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { SecurityTip } from '../SecurityTip';
import { threats, securityTips } from '@/data';
import { useReveal } from '@/hooks/useReveal';

const riskStyles: Record<string, string> = {
  Critical: 'bg-red-500/15 text-red-300 border-red-500/30',
  Severe: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
  High: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  Elevated: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
};

export function Threats() {
  const { ref, visible } = useReveal();
  return (
    <section id="threats" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Know Your Threats"
          title={
            <>
              Five common cyber threats,
              <br className="hidden sm:block" /> explained simply
            </>
          }
          subtitle="Understanding common threats is the first step toward avoiding them."
        />

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3`}
        >
          {threats.map((t) => {
            const Icon = t.icon;
            return (
              <article
                key={t.num}
                className="card group relative flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:glow"
              >
                {/* top accent */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-400/10 text-accent">
                    <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <span className="font-display text-3xl font-bold text-[color-mix(in_srgb,var(--text)_12%,transparent)]">
                    {t.num}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted">{t.description}</p>

                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex gap-2.5">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">What it is</dt>
                      <dd className="mt-0.5 text-muted">{t.whatItIs}</dd>
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">How it works</dt>
                      <dd className="mt-0.5 text-muted">{t.howItWorks}</dd>
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">How to protect yourself</dt>
                      <dd className="mt-0.5 text-muted">{t.prevention}</dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-5 flex items-center justify-between border-t border-soft pt-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${riskStyles[t.risk]}`}
                  >
                    <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" />
                    {t.risk} Risk
                  </span>
                </div>

                <p className="mt-3 rounded-lg bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] px-3 py-2 text-xs text-muted">
                  <span className="font-semibold text-accent">Tip:</span> {t.tip}
                </p>
              </article>
            );
          })}

          {/* Tip card to fill the grid */}
          <div className="flex flex-col justify-center">
            <SecurityTip text={securityTips[4]} />
            <div className="mt-4 rounded-2xl border border-dashed border-soft p-6 text-center">
              <p className="text-sm text-muted">
                The common thread across all five threats? They rely on{' '}
                <span className="font-semibold text-[var(--text)]">human behavior</span> as much
                as technology. Awareness is your first layer of defense.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
