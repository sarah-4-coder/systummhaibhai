import { QUESTIONS, WEEK_TITLES, WEEK_TRICKS } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Lightbulb, CheckCircle2 } from "lucide-react";

interface Props {
  week: number;
  onExit: () => void;
}

export const StudyView = ({ week, onExit }: Props) => {
  const questions = QUESTIONS.filter(q => q.week === week);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10">
      <Button variant="ghost" onClick={onExit} className="gap-2 mb-6">
        <ChevronLeft className="w-4 h-4" /> Back to weeks
      </Button>

      <div className="mb-8">
        <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15 border-0">Week {week}</Badge>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">{WEEK_TITLES[week]}</h1>
        <Card className="p-4 bg-secondary/10 border-secondary/30 flex gap-3">
          <Lightbulb className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-secondary mb-1">Master Trick</div>
            <p className="text-sm md:text-base">{WEEK_TRICKS[week]}</p>
          </div>
        </Card>
      </div>

      <div className="space-y-5">
        {questions.map((q) => (
          <Card key={q.q} className="p-5 md:p-6 shadow-soft border-border/60 hover:shadow-elegant transition-smooth">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold">
                {q.q}
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug pt-1">{q.question}</h3>
            </div>

            <ul className="space-y-2 ml-12">
              {q.options.map((opt, i) => {
                const isAnswer = i === q.answerIndex;
                return (
                  <li key={i} className={`flex items-start gap-2 p-2 rounded-md ${isAnswer ? 'bg-success/10 border border-success/30' : ''}`}>
                    <span className={`text-sm font-semibold w-5 ${isAnswer ? 'text-success' : 'text-muted-foreground'}`}>
                      {String.fromCharCode(97 + i)}.
                    </span>
                    <span className={`text-sm ${isAnswer ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                      {opt}
                    </span>
                    {isAnswer && <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 ml-auto" />}
                  </li>
                );
              })}
            </ul>

            {q.trick && (
              <div className="ml-12 mt-4 p-3 rounded-md bg-accent/10 border-l-4 border-accent flex gap-2">
                <Lightbulb className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80"><span className="font-semibold text-accent">Trick:</span> {q.trick}</p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
