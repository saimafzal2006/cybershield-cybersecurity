import { Shield } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sky-400 to-cyan-300 shadow-lg shadow-sky-500/30">
        <Shield className="h-5 w-5 text-[#04121f]" strokeWidth={2.5} aria-hidden="true" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight">
          CYBER<span className="text-accent">SHIELD</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
          Awareness
        </span>
      </div>
    </div>
  );
}
