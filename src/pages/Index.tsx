import { useState } from "react";
import { QUESTIONS, WEEK_TITLES } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quiz } from "@/components/Quiz";
import { StudyView } from "@/components/StudyView";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BookOpen, Brain, Trees, Target, Sparkles, Calendar } from "lucide-react";

type View = { kind: "home" } | { kind: "study"; week: number } | { kind: "quiz"; week: number | "all" };

const Index = () => {
  const [view, setView] = useState<View>({ kind: "home" });

  if (view.kind === "study") return <StudyView week={view.week} onExit={() => setView({ kind: "home" })} />;
  if (view.kind === "quiz") return <Quiz weekFilter={view.week} onExit={() => setView({ kind: "home" })} />;

  const weeks = Object.keys(WEEK_TITLES).map(Number).sort((a, b) => a - b);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 30%, white 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="container relative py-12 md:py-20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 opacity-90">
              <Trees className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wider uppercase">NPTEL · Forests & Their Management</span>
            </div>
            <ThemeToggle />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-4 max-w-3xl">
            Ace your <span className="italic">120-question</span> MOOC exam.
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mb-8">
            Every assignment question, organized by week, with shortcut tricks. Study by week or test yourself with a randomized quiz.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" onClick={() => setView({ kind: "quiz", week: "all" })}
              className="bg-white text-primary hover:bg-white/90 gap-2 font-semibold">
              <Brain className="w-5 h-5" /> Start Full Quiz (120 Q)
            </Button>
            <div className="flex items-center gap-2 opacity-90 ml-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Exam: 18 April</span>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <Stat label="Weeks" value="12" />
            <Stat label="Questions" value="120" />
            <Stat label="Tricks" value="120" />
          </div>
        </div>
      </header>

      {/* Quick actions */}
      <section className="container py-10">
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <ActionCard icon={<Target className="w-5 h-5" />} title="Random Practice" desc="Mixed quiz from all 120"
            onClick={() => setView({ kind: "quiz", week: "all" })} />
          <ActionCard icon={<BookOpen className="w-5 h-5" />} title="Study by Week" desc="Read all answers + tricks"
            onClick={() => document.getElementById('weeks')?.scrollIntoView({ behavior: 'smooth' })} />
          <ActionCard icon={<Sparkles className="w-5 h-5" />} title="Last-Minute" desc="Pick any week to revise fast"
            onClick={() => document.getElementById('weeks')?.scrollIntoView({ behavior: 'smooth' })} />
        </div>

        {/* Weeks grid */}
        <div id="weeks">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">All 12 Weeks</h2>
              <p className="text-muted-foreground mt-1">Tap any week to study or quiz that section.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {weeks.map(w => {
              const count = QUESTIONS.filter(q => q.week === w).length;
              return (
                <Card key={w} className="p-5 hover:shadow-elegant transition-smooth border-border/60 group bg-gradient-card">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/15 border-0">Week {w}</Badge>
                    <span className="text-xs text-muted-foreground">{count} Qs</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-4 leading-tight min-h-[3rem]">
                    {WEEK_TITLES[w]}
                  </h3>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1"
                      onClick={() => setView({ kind: "study", week: w })}>
                      <BookOpen className="w-3.5 h-3.5 mr-1.5" /> Study
                    </Button>
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => setView({ kind: "quiz", week: w })}>
                      <Brain className="w-3.5 h-3.5 mr-1.5" /> Quiz
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-6 mt-12">
        <div className="container text-center text-sm text-muted-foreground">
          Built for the 18 April MOOC paper · All the best 🌿
        </div>
      </footer>
    </div>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="font-display text-3xl md:text-4xl font-bold">{value}</div>
    <div className="text-sm opacity-80">{label}</div>
  </div>
);

const ActionCard = ({ icon, title, desc, onClick }: { icon: React.ReactNode; title: string; desc: string; onClick: () => void }) => (
  <button onClick={onClick}
    className="text-left p-5 rounded-lg border border-border bg-gradient-card hover:shadow-elegant transition-smooth group">
    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
      {icon}
    </div>
    <div className="font-display font-semibold text-lg">{title}</div>
    <div className="text-sm text-muted-foreground">{desc}</div>
  </button>
);

export default Index;
