import { useMemo, useState } from 'react';
import {
  Check,
  X,
  Eye,
  EyeOff,
  ShieldCheck,
  Lock,
  AlertTriangle,
} from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { SecurityTip } from '../SecurityTip';
import { securityTips } from '@/data';
import { useReveal } from '@/hooks/useReveal';

const weakExamples = ['password123', '12345678', 'qwerty'];

const guidance = [
  'Long passwords are better than short passwords.',
  'Use unique passwords for important accounts.',
  'Never share passwords with anyone.',
  'Avoid birthdays and obvious personal information.',
  'Consider using a password manager.',
  'Enable MFA wherever it is available.',
  'Change compromised passwords immediately.',
];

type CheckResult = { label: string; pass: boolean };

function evaluate(pw: string): { score: number; label: string; color: string; checks: CheckResult[] } {
  const checks: CheckResult[] = [
    { label: 'At least 12 characters', pass: pw.length >= 12 },
    { label: 'Contains lowercase letters', pass: /[a-z]/.test(pw) },
    { label: 'Contains uppercase letters', pass: /[A-Z]/.test(pw) },
    { label: 'Contains numbers', pass: /\d/.test(pw) },
    { label: 'Contains symbols', pass: /[^A-Za-z0-9]/.test(pw) },
    { label: 'Not a common pattern', pass: !isCommon(pw) },
  ];

  const passed = checks.filter((c) => c.pass).length;
  // Score weighting: length matters most
  let score = 0;
  if (pw.length >= 8) score += 1;
  if (pw.length >= 12) score += 1;
  if (pw.length >= 16) score += 1;
  score += Math.min(3, checks.slice(1, 5).filter((c) => c.pass).length);
  if (checks[5].pass) score += 1;
  if (pw.length === 0) score = 0;
  score = Math.min(5, score);

  const labels = ['Empty', 'Very Weak', 'Weak', 'Fair', 'Strong', 'Excellent'];
  const colors = [
    'bg-slate-500',
    'bg-red-500',
    'bg-orange-500',
    'bg-amber-500',
    'bg-lime-500',
    'bg-emerald-500',
  ];
  return { score, label: labels[score], color: colors[score], checks };
}

function isCommon(pw: string): boolean {
  const common = ['password', '123456', 'qwerty', 'abc123', 'letmein', 'admin', 'welcome', 'iloveyou'];
  const lower = pw.toLowerCase();
  return common.some((c) => lower.includes(c)) || /^(\d)\1+$/.test(pw) || /^(0123|1234|2345|3456|4567|5678|6789)/.test(pw);
}

export function PasswordSafety() {
  const [pw, setPw] = useState('');
  const [show, setShow] = useState(false);
  const { ref, visible } = useReveal();
  const result = useMemo(() => evaluate(pw), [pw]);

  return (
    <section id="passwords" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Password Safety 101"
          title="Strong passwords are your first line of defense"
          subtitle="Most account takeovers start with a weak or reused password. Here is how to do better."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Left: guidance + comparison */}
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} space-y-6`}>
            <div className="card p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />
                Password principles
              </h3>
              <ul className="mt-4 space-y-2.5">
                {guidance.map((g) => (
                  <li key={g} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card border-red-500/20 p-5">
                <div className="flex items-center gap-2 text-red-300">
                  <X className="h-4 w-4" aria-hidden="true" />
                  <h4 className="text-sm font-bold uppercase tracking-wider">Weak examples</h4>
                </div>
                <p className="mt-2 text-xs text-muted">Never use passwords like these:</p>
                <ul className="mt-3 space-y-1.5">
                  {weakExamples.map((w) => (
                    <li
                      key={w}
                      className="rounded-md bg-red-500/10 px-3 py-1.5 font-mono text-sm text-red-300 line-through decoration-red-400/60"
                    >
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card border-emerald-500/20 p-5">
                <div className="flex items-center gap-2 text-emerald-300">
                  <Lock className="h-4 w-4" aria-hidden="true" />
                  <h4 className="text-sm font-bold uppercase tracking-wider">Strong concept</h4>
                </div>
                <p className="mt-2 text-xs text-muted">A passphrase of unrelated words:</p>
                <p className="mt-3 rounded-md bg-emerald-500/10 px-3 py-2 font-mono text-sm text-emerald-300">
                  correct-horse-battery-style-passphrase
                </p>
                <p className="mt-2 text-xs text-muted">
                  Do not copy this example — make your own.
                </p>
              </div>
            </div>
          </div>

          {/* Right: interactive demo */}
          <div className="card glow relative overflow-hidden p-6">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl"
              aria-hidden="true"
            />
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <Lock className="h-5 w-5 text-accent" aria-hidden="true" />
              Password Strength Demo
            </h3>
            <p className="mt-1.5 text-sm text-muted">
              Type below to see how a password's strength is evaluated. This is educational only.
            </p>

            <div className="relative mt-5">
              <input
                type={show ? 'text' : 'password'}
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder="Try typing a password..."
                autoComplete="off"
                spellCheck={false}
                aria-label="Password input for strength demo"
                className="w-full rounded-xl border border-soft bg-soft px-4 py-3 pr-12 font-mono text-sm text-[var(--text)] placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="button"
                onClick={() => setShow((v) => !v)}
                className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-muted hover:text-[var(--text)]"
                aria-label={show ? 'Hide password' : 'Show password'}
              >
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {/* Strength meter */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-muted">Strength</span>
                <span className="font-bold" style={{ color: 'var(--text)' }}>
                  {result.label}
                </span>
              </div>
              <div className="mt-2 flex gap-1.5" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
                      i < result.score ? result.color : 'bg-[color-mix(in_srgb,var(--text)_8%,transparent)]'
                    }`}
                  />
                ))}
              </div>
              <span className="sr-only" aria-live="polite">
                Password strength: {result.label}
              </span>
            </div>

            {/* Checks */}
            <ul className="mt-5 space-y-2">
              {result.checks.map((c) => (
                <li key={c.label} className="flex items-center gap-2.5 text-sm">
                  {c.pass ? (
                    <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  ) : (
                    <X className="h-4 w-4 text-red-400/70" aria-hidden="true" />
                  )}
                  <span className={c.pass ? 'text-[var(--text)]' : 'text-muted'}>{c.label}</span>
                </li>
              ))}
            </ul>

            {/* Privacy notice */}
            <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs text-muted">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
              <p>
                <span className="font-semibold text-emerald-300">Privacy:</span> This demo
                processes your input locally in your browser and does not send or store your
                password.
              </p>
            </div>

            {isCommon(pw) && pw.length > 0 && (
              <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-red-500/20 bg-red-500/5 p-3 text-xs text-red-300">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <p>This looks like a common or predictable pattern. Choose something unique.</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 max-w-xl">
          <SecurityTip text={securityTips[1]} />
        </div>
      </div>
    </section>
  );
}
