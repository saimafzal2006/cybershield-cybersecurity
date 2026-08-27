import { Lightbulb } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export function SecurityTip({ text }: { text: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} glass flex items-start gap-3 rounded-2xl p-4`}
    >
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-400/15 text-amber-300">
        <Lightbulb className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
          Security Tip
        </p>
        <p className="mt-1 text-sm text-muted">{text}</p>
      </div>
    </div>
  );
}
