import {
  Eye,
  Settings,
  UserPlus,
  Lock,
  Link2,
  UserX,
  MessageSquareWarning,
  KeyRound,
  ShieldQuestion,
  MapPin,
  Flag,
} from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { SecurityTip } from '../SecurityTip';
import { socialPractices, securityTips } from '@/data';
import { useReveal } from '@/hooks/useReveal';

const icons = [
  Eye, Settings, UserPlus, Lock, Link2, UserX, MessageSquareWarning, KeyRound, ShieldQuestion,
  MapPin, Flag,
];

export function SocialMedia() {
  const { ref, visible } = useReveal();
  return (
    <section id="social" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Stay Safe on Social Media"
          title="Protect your identity where you share the most"
          subtitle="Social platforms are where personal information is most exposed. A few habits go a long way."
        />

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3`}
        >
          {socialPractices.map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article
                key={p.title}
                className="card group flex items-start gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:glow"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-400/10 text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold leading-snug">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{p.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <SecurityTip text={securityTips[2]} />
          <div className="glass flex items-start gap-3 rounded-2xl p-4">
            <KeyRound className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <p className="text-sm text-muted">
              <span className="font-semibold text-[var(--text)]">Golden rule:</span> No
              legitimate person, platform, or support agent will ever ask for your password or a
              verification code. Treat any such request as an attack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
