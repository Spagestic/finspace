import {
  Wallet,
  PieChart,
  Lightbulb,
  PiggyBank,
  GraduationCap,
  Banknote,
  Target,
  BellRing,
  TrendingUp,
} from "lucide-react";

import { Card } from "@/components/ui/card"; // Make sure the import path is correct

export function Features() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 p-12"
      id="features"
    >
      {/* Card A */}
      <Card className="relative overflow-hidden rounded-3xl p-6 md:p-8 lg:col-span-2 transition hover:border-primary/50">
        <div className="relative z-10">
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent ring-1 ring-border">
            <Wallet className="size-4 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl tracking-tight font-geist text-card-foreground">
            Your financial life.
            <br />
            <span className="text-primary font-geist">All in one place.</span>
          </h3>
          <p className="mt-3 text-sm md:text-base text-muted-foreground font-geist">
            Connect your accounts to see all your spending, budgets, and savings
            goals in a single, simple dashboard.
          </p>
        </div>
      </Card>

      {/* Card B (Large) */}
      <Card className="relative overflow-hidden rounded-3xl p-6 md:p-8 lg:col-span-4 transition hover:border-primary/50">
        <div className="relative z-10">
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent ring-1 ring-border">
            <PieChart className="size-4 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl tracking-tight font-geist text-card-foreground">
            Budgeting that works.
            <br />
            <span className="text-primary font-geist">
              Designed for student life.
            </span>
          </h3>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl font-geist">
            Effortlessly track income and expenses. We categorize your spending
            so you know exactly where your money goes, from textbooks to
            late-night snacks.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 rounded-2xl border bg-accent/50 p-3 transition hover:border-primary/50">
              <Banknote className="h-4 w-4 text-primary stroke-[1.5]" />
              <p className="text-sm text-muted-foreground font-geist">
                Track Expenses
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border bg-accent/50 p-3 transition hover:border-primary/50">
              <Target className="h-4 w-4 text-primary stroke-[1.5]" />
              <p className="text-sm text-muted-foreground font-geist">
                Set Budgets
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border bg-accent/50 p-3 transition hover:border-primary/50">
              <BellRing className="h-4 w-4 text-primary stroke-[1.5]" />
              <p className="text-sm text-muted-foreground font-geist">
                Spending Alerts
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border bg-accent/50 p-3 transition hover:border-primary/50">
              <TrendingUp className="h-4 w-4 text-primary stroke-[1.5]" />
              <p className="text-sm text-muted-foreground font-geist">
                Visualize Habits
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Card C */}
      <Card className="relative overflow-hidden rounded-3xl p-6 md:p-8 lg:col-span-2 transition hover:border-primary/50">
        <div className="relative z-10">
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent ring-1 ring-border">
            <Lightbulb className="size-4 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl tracking-tight font-geist text-card-foreground">
            Smart insights.
            <br />
            <span className="text-primary font-geist">Smarter decisions.</span>
          </h3>
          <p className="mt-3 text-sm md:text-base text-muted-foreground font-geist">
            Get personalized tips and see spending trends to help you save money
            and avoid common financial pitfalls.
          </p>
        </div>
      </Card>

      {/* Card D */}
      <Card className="relative overflow-hidden rounded-3xl p-6 md:p-8 lg:col-span-2 transition hover:border-primary/50">
        <div className="relative z-10">
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent ring-1 ring-border">
            <PiggyBank className="size-4 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl tracking-tight font-geist text-card-foreground">
            Achieve your goals.
            <br />
            <span className="text-primary font-geist">Stress-free.</span>
          </h3>
          <p className="mt-3 text-sm md:text-base text-muted-foreground font-geist">
            Saving for spring break or a new laptop? Set your goals and
            we&apos;ll help you stay on track to reach them.
          </p>
        </div>
      </Card>

      {/* Card E */}
      <Card className="relative overflow-hidden rounded-3xl p-6 md:p-8 lg:col-span-2 transition hover:border-primary/50">
        <div className="relative z-10">
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent ring-1 ring-border">
            <GraduationCap className="size-4 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl tracking-tight font-geist text-card-foreground">
            Financial literacy.
            <br />
            <span className="text-primary font-geist">For a lifetime.</span>
          </h3>
          <p className="mt-3 text-sm md:text-base text-muted-foreground font-geist">
            Learn essential money skills that will empower you long after you
            graduate. Build a strong financial foundation.
          </p>
        </div>
      </Card>
    </div>
  );
}
