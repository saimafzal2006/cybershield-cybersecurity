import { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  ShieldCheck,
  ShieldAlert,
  ShieldQuestion,
  Trophy,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { quizQuestions } from '@/data';
import { useReveal } from '@/hooks/useReveal';

type Phase = 'playing' | 'results';

const resultBands = [
  {
    min: 0,
    max: 3,
    label: 'High Risk',
    icon: ShieldAlert,
    color: 'text-red-300',
    bg: 'from-red-500/20 to-red-500/5',
    message: 'You should strengthen your cybersecurity habits.',
  },
  {
    min: 4,
    max: 6,
    label: 'Getting Better',
    icon: ShieldQuestion,
    color: 'text-amber-300',
    bg: 'from-amber-500/20 to-amber-500/5',
    message: 'You understand some basics, but there is room to improve.',
  },
  {
    min: 7,
    max: 8,
    label: 'Good',
    icon: ShieldCheck,
    color: 'text-lime-300',
    bg: 'from-lime-500/20 to-lime-500/5',
    message: 'You have solid cybersecurity awareness.',
  },
  {
    min: 9,
    max: 10,
    label: 'Excellent',
    icon: Trophy,
    color: 'text-emerald-300',
    bg: 'from-emerald-500/20 to-emerald-500/5',
    message: "You're practicing strong cybersecurity habits.",
  },
];

export function SecurityCheckup() {
  const { ref, visible } = useReveal();
  const [phase, setPhase] = useState<Phase>('playing');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const q = quizQuestions[current];
  const isLast = current === quizQuestions.length - 1;

  const choose = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
  };

  const next = () => {
    const updated = [...answers, selected ?? -1];
    setAnswers(updated);
    if (isLast) {
      setPhase('results');
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  const score = answers.filter((a, i) => a === quizQuestions[i].correctIndex).length;
  const band = resultBands.find((b) => score >= b.min && score <= b.max)!;
  const BandIcon = band.icon;

  const reset = () => {
    setPhase('playing');
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
  };

  return (
    <section id="checkup" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How Secure Are You?"
          title="10-question security checkup"
          subtitle="Answer honestly — your answers stay in your browser and are never sent anywhere. See how your habits stack up."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto mt-12 max-w-3xl`}>
          <div className="card glow overflow-hidden">
            {/* Progress */}
            <div className="flex items-center justify-between border-b border-soft px-6 py-4">
              <span className="text-sm font-semibold text-muted">
                {phase === 'playing'
                  ? `Question ${current + 1} of ${quizQuestions.length}`
                  : 'Results'}
              </span>
              {phase === 'playing' && (
                <span className="chip bg-sky-500/10 text-sky-300">
                  {current + 1} / {quizQuestions.length}
                </span>
              )}
            </div>
            <div className="h-1 w-full bg-soft" aria-hidden="true">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-cyan-300 transition-all duration-500"
                style={{
                  width: `${((phase === 'results' ? quizQuestions.length : current) / quizQuestions.length) * 100}%`,
                }}
              />
            </div>

            {phase === 'playing' ? (
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-bold sm:text-xl">{q.question}</h3>
                <ul className="mt-6 space-y-3">
                  {q.options.map((opt, idx) => {
                    const isCorrect = idx === q.correctIndex;
                    const isSelected = selected === idx;
                    let cls = 'border-soft hover:bg-[color-mix(in_srgb,var(--text)_5%,transparent)]';
                    if (selected !== null) {
                      if (isCorrect) cls = 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200';
                      else if (isSelected) cls = 'border-red-500/40 bg-red-500/10 text-red-200';
                      else cls = 'border-soft opacity-50';
                    }
                    return (
                      <li key={idx}>
                        <button
                          type="button"
                          onClick={() => choose(idx)}
                          disabled={selected !== null}
                          className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${cls}`}
                        >
                          <span
                            className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg border text-xs font-bold ${
                              selected !== null && isCorrect
                                ? 'border-emerald-500/40 bg-emerald-500/20 text-emerald-300'
                                : selected !== null && isSelected
                                  ? 'border-red-500/40 bg-red-500/20 text-red-300'
                                  : 'border-soft text-muted'
                            }`}
                          >
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="flex-1">{opt}</span>
                          {selected !== null && isCorrect && (
                            <CheckCircle2 className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                          )}
                          {selected !== null && isSelected && !isCorrect && (
                            <XCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {selected !== null && (
                  <div className="mt-5 animate-fade-in rounded-xl border border-soft bg-soft p-4">
                    <p className="text-sm">
                      <span className="font-semibold text-accent">Explanation: </span>
                      <span className="text-muted">{q.explanation}</span>
                    </p>
                    <div className="mt-4 flex justify-end">
                      <button type="button" onClick={next} className="btn btn-primary">
                        {isLast ? 'See My Score' : 'Next Question'}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6 text-center sm:p-10">
                <div className={`mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br ${band.bg} ${band.color}`}>
                  <BandIcon className="h-10 w-10" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-muted">
                  You scored
                </p>
                <p className="font-display text-5xl font-bold">
                  {score}
                  <span className="text-2xl text-muted">/{quizQuestions.length}</span>
                </p>
                <p className={`mt-2 text-xl font-bold ${band.color}`}>{band.label}</p>
                <p className="mx-auto mt-2 max-w-md text-muted">{band.message}</p>

                {/* Review */}
                <details className="mt-6 text-left">
                  <summary className="cursor-pointer text-sm font-semibold text-accent">
                    Review your answers
                  </summary>
                  <ul className="mt-3 space-y-2">
                    {quizQuestions.map((qq, i) => {
                      const correct = answers[i] === qq.correctIndex;
                      return (
                        <li
                          key={qq.id}
                          className={`flex items-start gap-2.5 rounded-lg border p-3 text-sm ${
                            correct
                              ? 'border-emerald-500/20 bg-emerald-500/5'
                              : 'border-red-500/20 bg-red-500/5'
                          }`}
                        >
                          {correct ? (
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                          ) : (
                            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" aria-hidden="true" />
                          )}
                          <div>
                            <p className="font-medium">{qq.question}</p>
                            <p className="mt-1 text-xs text-muted">
                              Correct: {qq.options[qq.correctIndex]}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </details>

                <button type="button" onClick={reset} className="btn btn-ghost mt-6">
                  <RotateCcw className="h-4 w-4" aria-hidden="true" /> Retake Quiz
                </button>
              </div>
            )}
          </div>
          <p className="mt-4 text-center text-xs text-muted">
            Privacy: Your answers are processed locally and never sent to a server.
          </p>
        </div>
      </div>
    </section>
  );
}
