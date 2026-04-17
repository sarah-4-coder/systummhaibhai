import { useMemo, useState } from "react";
import { QUESTIONS, WEEK_TITLES, WEEK_TRICKS, Question } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Lightbulb, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  weekFilter?: number | "all";
  shuffle?: boolean;
  onExit: () => void;
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const Quiz = ({ weekFilter = "all", shuffle = true, onExit }: Props) => {
  const questions = useMemo<Question[]>(() => {
    const base = weekFilter === "all" ? QUESTIONS : QUESTIONS.filter(q => q.week === weekFilter);
    return shuffle ? shuffleArray(base) : base;
  }, [weekFilter, shuffle]);

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<Set<number>>(new Set());

  const q = questions[idx];

  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (!answered.has(idx)) {
      if (i === q.answerIndex) setScore(s => s + 1);
      setAnswered(prev => new Set(prev).add(idx));
    }
  };

  const next = () => {
    if (idx < questions.length - 1) {
      setIdx(idx + 1);
      setSelected(null);
      setRevealed(false);
    }
  };
  const prev = () => {
    if (idx > 0) {
      setIdx(idx - 1);
      setSelected(null);
      setRevealed(false);
    }
  };
  const reset = () => {
    setIdx(0); setSelected(null); setRevealed(false); setScore(0); setAnswered(new Set());
  };

  const progress = ((idx + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 md:py-10">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" onClick={onExit} className="gap-2">
          <ChevronLeft className="w-4 h-4" /> Back
        </Button>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="text-sm">Score: {score}/{answered.size}</Badge>
          <Button variant="outline" size="sm" onClick={reset} className="gap-1">
            <RotateCcw className="w-3 h-3" /> Reset
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Question {idx + 1} of {questions.length}</span>
          <span>Week {q.week} · Q{q.q}</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-hero transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <Card className="p-6 md:p-8 shadow-elegant border-border/60 animate-fade-in">
        <h2 className="font-display text-xl md:text-2xl font-semibold leading-snug mb-6">
          {q.question}
        </h2>

        <div className="space-y-3">
          {q.options.map((opt, i) => {
            const isCorrect = i === q.answerIndex;
            const isSelected = i === selected;
            const showCorrect = revealed && isCorrect;
            const showWrong = revealed && isSelected && !isCorrect;
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={revealed}
                className={cn(
                  "w-full text-left p-4 rounded-lg border-2 transition-smooth flex items-start gap-3",
                  "hover:border-primary/50 hover:bg-muted/50",
                  !revealed && "border-border bg-card",
                  showCorrect && "border-success bg-success/10 text-success-foreground",
                  showWrong && "border-destructive bg-destructive/10",
                  revealed && !isSelected && !isCorrect && "opacity-60"
                )}
              >
                <span className={cn(
                  "flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-semibold",
                  showCorrect && "border-success bg-success text-success-foreground",
                  showWrong && "border-destructive bg-destructive text-destructive-foreground",
                  !revealed && "border-muted-foreground/40"
                )}>
                  {showCorrect ? <CheckCircle2 className="w-4 h-4" /> :
                   showWrong ? <XCircle className="w-4 h-4" /> :
                   String.fromCharCode(97 + i)}
                </span>
                <span className="pt-0.5">{opt}</span>
              </button>
            );
          })}
        </div>

        {revealed && q.trick && (
          <div className="mt-6 p-4 rounded-lg bg-secondary/15 border border-secondary/30 flex gap-3 animate-scale-in">
            <Lightbulb className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-secondary mb-1">Trick</div>
              <p className="text-sm text-foreground/80">{q.trick}</p>
            </div>
          </div>
        )}
      </Card>

      <div className="flex justify-between mt-6 gap-3">
        <Button variant="outline" onClick={prev} disabled={idx === 0} className="gap-2">
          <ChevronLeft className="w-4 h-4" /> Previous
        </Button>
        <Button onClick={next} disabled={idx === questions.length - 1} className="gap-2 bg-primary hover:bg-primary/90">
          Next <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {idx === questions.length - 1 && answered.size === questions.length && (
        <Card className="mt-6 p-6 text-center bg-gradient-hero text-primary-foreground animate-fade-in">
          <h3 className="font-display text-2xl font-bold mb-2">🎉 Quiz Complete!</h3>
          <p className="text-lg">You scored <span className="font-bold">{score}</span> out of <span className="font-bold">{questions.length}</span></p>
          <p className="opacity-90 mt-1">{Math.round(score/questions.length*100)}% — keep revising!</p>
        </Card>
      )}
    </div>
  );
};
