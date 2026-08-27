import { AlertTriangle, Siren } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { recoverySteps } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export function AccountRecovery() {
  const { ref, visible } = useReveal();
  return (
    <section id="recovery" className="scroll-mt-20 bg-soft py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Emergency Response"
          title="Account hacked? Act fast."
          subtitle="If your account is compromised, quick and calm action limits the damage. Follow these steps in order."
        />

        {/* Emergency banner */}
        <div className="mx-auto mt-10 flex max-w-3xl items-start gap-4 rounded-2xl border border-red-500/30 bg-red-500/10 p-5">
          <Siren className="mt-0.5 h-6 w-6 shrink-0 text-red-400" aria-hidden="true" />
          <p className="text-sm sm:text-base">
            <span className="font-bold text-red-300">Never pay an attacker</span> or provide
            additional sensitive information simply because they demand it. Payment does not
            guarantee recovery and marks you as a target for further attacks.
          </p>
        </div>

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} relative mt-12`}>
          <div
            className="pointer-events-none absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-red-500/40 via-accent/30 to-emerald-500/30 md:left-1/2"
            aria-hidden="true"
          />
          <ol className="space-y-5">
            {recoverySteps.map((step, i) => (
              <li
                key={step.num}
                className={`relative flex items-start gap-5 md:w-1/2 ${
                  i % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:flex-row-reverse md:text-right'
                }`}
              >
                {/* node */}
                <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-cyan-400/10 font-display text-lg font-bold text-accent glow">
                  {step.num}
                </div>
                <div className="card flex-1 p-5 transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
          <p className="text-sm text-muted">
            If you have lost access entirely, go straight to the platform official account
            recovery page — do not trust links sent to you by the attacker.
          </p>
        </div>
      </div>
    </section>
  );
}
