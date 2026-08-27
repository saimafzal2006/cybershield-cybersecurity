import { ShieldCheck, ArrowRight, ClipboardCheck, Lock } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background grid + glows */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.4]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: copy */}
          <div className="animate-fade-in text-center lg:text-left">
            <span className="section-eyebrow">Introduction to Cybersecurity</span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
              Cybersecurity
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                Awareness
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium text-[var(--text)] sm:text-xl">
              Your digital safety starts with one decision:{' '}
              <span className="text-accent">Think before you click.</span>
            </p>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted lg:mx-0">
              Simple cybersecurity knowledge for protecting your accounts, devices, data, and
              digital identity. Awareness is the first layer of defense — and it is one you
              control.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a href="#threats" className="btn btn-primary w-full sm:w-auto">
                Explore Threats <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#checkup" className="btn btn-ghost w-full sm:w-auto">
                <ClipboardCheck className="h-4 w-4" aria-hidden="true" /> Test Your Security
              </a>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 text-xs text-muted">
              <Lock className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              All interactive demos run locally in your browser. Nothing is sent or stored.
            </p>
          </div>

          {/* Right: shield visual */}
          <div className="relative mx-auto flex h-[22rem] w-full max-w-md items-center justify-center sm:h-[28rem]">
            <HeroShield />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroShield() {
  return (
    <div className="relative h-full w-full" role="img" aria-label="Glowing cybersecurity shield with network nodes">
      {/* Rotating ring */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
          <circle cx="200" cy="200" r="170" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="200" cy="200" r="130" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 10" />
        </svg>
      </div>

      {/* Pulse rings */}
      <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
        <div className="h-40 w-40 animate-pulse-ring rounded-full border border-sky-400/40" />
      </div>
      <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
        <div className="h-40 w-40 animate-pulse-ring rounded-full border border-cyan-300/30 [animation-delay:1.5s]" />
      </div>

      {/* Floating nodes */}
      <FloatNode className="left-[8%] top-[18%]" delay="0s" />
      <FloatNode className="right-[10%] top-[28%]" delay="1.2s" />
      <FloatNode className="left-[16%] bottom-[16%]" delay="2.1s" />
      <FloatNode className="right-[14%] bottom-[22%]" delay="0.6s" />

      {/* Central shield */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="animate-float-slow grid h-36 w-36 place-items-center rounded-3xl bg-gradient-to-br from-sky-400/20 to-cyan-300/10 backdrop-blur-sm glow sm:h-44 sm:w-44">
          <ShieldCheck className="h-16 w-16 text-accent sm:h-20 sm:w-20" strokeWidth={1.5} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function FloatNode({ className, delay }: { className: string; delay: string }) {
  return (
    <div
      className={`absolute ${className} animate-float-slow`}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_2px] shadow-sky-400/50" />
        <span className="h-px w-8 bg-gradient-to-r from-sky-400/60 to-transparent" />
      </div>
    </div>
  );
}
