import { useState } from 'react';
import { ShieldAlert, CheckCircle2, XCircle, Fish, Lightbulb, RotateCcw } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { SecurityTip } from '../SecurityTip';
import { phishingSigns, phishingScenarios, securityTips } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export function Phishing() {
  const { ref, visible } = useReveal();
  return (
    <section id="phishing" className="scroll-mt-20 bg-soft py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Spot the Phish"
          title="Learn to recognize phishing before it hooks you"
          subtitle="Phishing is the most common attack on everyday users. These warning signs help you spot it."
        />

        {/* Warning signs grid */}
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5`}
        >
          {phishingSigns.map((sign, i) => (
            <div
              key={sign.title}
              className="card group relative overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30"
            >
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-red-500/15 text-xs font-bold text-red-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <ShieldAlert className="h-4 w-4 text-red-400" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-sm font-bold leading-snug">{sign.title}</h3>
              <p className="mt-1.5 text-xs text-muted">{sign.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-xl">
          <SecurityTip text={securityTips[0]} />
        </div>

        {/* Interactive quiz */}
        <PhishingQuiz />
      </div>
    </section>
  );
}

function PhishingQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<'phishing' | 'safe' | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const scenario = phishingScenarios[current];
  const isLast = current === phishingScenarios.length - 1;

  const choose = (choice: 'phishing' | 'safe') => {
    if (selected) return;
    setSelected(choice);
    if (choice === scenario.answer) {
      setScore((s) => s + 1);
      setAnswered((a) => [...a, current]);
    }
  };

  const next = () => {
    if (isLast) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  const reset = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setAnswered([]);
    setFinished(false);
  };

  return (
    <div className="mt-16">
      <SectionHeading
        eyebrow="Phishing or Safe?"
        title="Test your instincts"
        subtitle="Read each fictional scenario and decide: is it phishing, or probably safe? These are made-up examples — no real accounts or credentials."
        align="left"
      />

      <div className="mt-8 card glow overflow-hidden">
        {/* Progress */}
        <div className="flex items-center justify-between border-b border-soft px-6 py-4">
          <span className="text-sm font-semibold text-muted">
            Scenario {Math.min(current + 1, phishingScenarios.length)} of {phishingScenarios.length}
          </span>
          <span className="chip bg-emerald-500/10 text-emerald-300">
            Score: {score}/{phishingScenarios.length}
          </span>
        </div>
        <div className="h-1 w-full bg-soft">
          <div
            className="h-full bg-gradient-to-r from-sky-400 to-cyan-300 transition-all duration-500"
            style={{ width: `${((finished ? phishingScenarios.length : current) / phishingScenarios.length) * 100}%` }}
            aria-hidden="true"
          />
        </div>

        {!finished ? (
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <Fish className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <p className="text-base sm:text-lg">{scenario.scenario}</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => choose('phishing')}
                disabled={!!selected}
                className={`btn justify-center border transition-all ${
                  selected
                    ? scenario.answer === 'phishing'
                      ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300'
                      : 'border-red-500/40 bg-red-500/15 text-red-300'
                    : 'border-soft btn-ghost'
                } ${selected === 'phishing' && scenario.answer !== 'phishing' ? 'ring-1 ring-red-400' : ''}`}
              >
                <XCircle className="h-4 w-4" aria-hidden="true" /> Phishing
              </button>
              <button
                type="button"
                onClick={() => choose('safe')}
                disabled={!!selected}
                className={`btn justify-center border transition-all ${
                  selected
                    ? scenario.answer === 'safe'
                      ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300'
                      : 'border-red-500/40 bg-red-500/15 text-red-300'
                    : 'border-soft btn-ghost'
                } ${selected === 'safe' && scenario.answer !== 'safe' ? 'ring-1 ring-red-400' : ''}`}
              >
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Probably Safe
              </button>
            </div>

            {selected && (
              <div className="mt-6 animate-fade-in space-y-3">
                <div
                  className={`rounded-xl border p-4 ${
                    selected === scenario.answer
                      ? 'border-emerald-500/30 bg-emerald-500/5'
                      : 'border-red-500/30 bg-red-500/5'
                  }`}
                >
                  <p className="flex items-center gap-2 text-sm font-bold">
                    {selected === scenario.answer ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-400" aria-hidden="true" />
                    )}
                    {selected === scenario.answer ? 'Correct!' : 'Not quite.'}
                    <span className="font-normal text-muted">
                      The answer is{' '}
                      <span className="font-bold text-accent">
                        {scenario.answer === 'phishing' ? 'Phishing' : 'Probably Safe'}
                      </span>
                      .
                    </span>
                  </p>
                  <p className="mt-2 text-sm text-muted">{scenario.explanation}</p>
                </div>
                <div className="flex items-start gap-2.5 rounded-xl bg-amber-400/10 p-3 text-sm">
                  <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
                  <p>
                    <span className="font-semibold text-amber-300">Security tip:</span>{' '}
                    {scenario.tip}
                  </p>
                </div>
                <div className="flex justify-end">
                  <button type="button" onClick={next} className="btn btn-primary">
                    {isLast ? 'See Results' : 'Next Scenario'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="p-6 text-center sm:p-10">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-cyan-400/10 text-accent">
              <Fish className="h-8 w-8" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-2xl font-bold">
              You scored {score} out of {phishingScenarios.length}
            </h3>
            <p className="mx-auto mt-2 max-w-md text-muted">
              {score === phishingScenarios.length
                ? 'Excellent instincts. You spot phishing signals reliably.'
                : score >= 3
                  ? 'Good awareness. Review the scenarios you missed and keep practicing.'
                  : 'Keep learning. Revisit the warning signs above and try again.'}
            </p>
            <p className="mx-auto mt-3 max-w-md text-xs text-muted">
              Always verify suspicious requests through official channels — never through the
              contact details provided in the message itself.
            </p>
            <button type="button" onClick={reset} className="btn btn-ghost mt-6">
              <RotateCcw className="h-4 w-4" aria-hidden="true" /> Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
