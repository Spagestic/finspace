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

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 p-6">
      {/* Card A */}
      <section className="relative overflow-hidden rounded-3xl border border-primary/10 bg-primary p-6 md:p-8 lg:col-span-2 hover:border-primary/30 hover:bg-primary/90 transition">
        <div className="absolute inset-0 opacity-[0.12]"></div>
        <div className="relative z-10">
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary ring-1 ring-primary/30">
            <Wallet className="size-4" />
          </div>
          <h3 className="text-xl md:text-2xl tracking-tight font-geist text-primary-foreground">
            Your financial life.
            <br />
            <span className="text-secondary font-geist">All in one place.</span>
          </h3>
          <p className="mt-3 text-sm md:text-base text-muted font-geist">
            Connect your accounts to see all your spending, budgets, and savings
            goals in a single, simple dashboard.
          </p>
        </div>
      </section>

      {/* Card B (Large) */}
      <section className="relative overflow-hidden rounded-3xl border border-primary/10 bg-primary p-6 md:p-8 lg:col-span-4 hover:border-primary/30 hover:bg-primary/90 transition">
        <div className="absolute inset-0 opacity-[0.09]"></div>
        <div className="relative z-10">
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary ring-1 ring-primary/30">
            <PieChart className="size-4" />
          </div>
          <h3 className="text-xl md:text-2xl tracking-tight font-geist text-primary-foreground">
            Budgeting that works.
            <br />
            <span className="text-secondary font-geist">
              Designed for student life.
            </span>
          </h3>
          <p className="mt-3 text-sm md:text-base text-muted max-w-2xl font-geist">
            Effortlessly track income and expenses. We categorize your spending
            so you know exactly where your money goes, from textbooks to
            late-night snacks.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-primary-foreground/5 p-3 hover:border-secondary/30 transition">
              <Banknote className="h-4 w-4 text-secondary stroke-[1.5]" />
              <p className="text-sm text-muted-foreground font-geist">
                Track Expenses
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-primary-foreground/5 p-3 hover:border-secondary/30 transition">
              <Target className="h-4 w-4 text-secondary stroke-[1.5]" />
              <p className="text-sm text-muted-foreground font-geist">
                Set Budgets
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-primary-foreground/5 p-3 hover:border-secondary/30 transition">
              <BellRing className="h-4 w-4 text-secondary stroke-[1.5]" />
              <p className="text-sm text-muted-foreground font-geist">
                Spending Alerts
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-primary-foreground/5 p-3 hover:border-secondary/30 transition">
              <TrendingUp className="h-4 w-4 text-secondary stroke-[1.5]" />
              <p className="text-sm text-muted-foreground font-geist">
                Visualize Habits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Card C */}
      <section className="relative overflow-hidden rounded-3xl border border-primary/10 bg-primary p-6 md:p-8 lg:col-span-2 hover:border-primary/30 hover:bg-primary/90 transition">
        <div className="absolute inset-0 opacity-[0.12]"></div>
        <div className="relative z-10">
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary ring-1 ring-primary/30">
            <Lightbulb className="size-4" />
          </div>
          <h3 className="text-xl md:text-2xl tracking-tight font-geist text-primary-foreground">
            Smart insights.
            <br />
            <span className="text-secondary font-geist">
              Smarter decisions.
            </span>
          </h3>
          <p className="mt-3 text-sm md:text-base text-muted font-geist">
            Get personalized tips and see spending trends to help you save money
            and avoid common financial pitfalls.
          </p>
        </div>
      </section>

      {/* Card D */}
      <section className="relative overflow-hidden rounded-3xl border border-primary/10 bg-primary p-6 md:p-8 lg:col-span-2 hover:border-primary/30 hover:bg-primary/90 transition">
        <div className="absolute inset-0 opacity-[0.10]"></div>
        <div className="relative z-10">
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary ring-1 ring-primary/30">
            <PiggyBank className="size-4" />
          </div>
          <h3 className="text-xl md:text-2xl tracking-tight font-geist text-primary-foreground">
            Achieve your goals.
            <br />
            <span className="text-secondary font-geist">Stress-free.</span>
          </h3>
          <p className="mt-3 text-sm md:text-base text-muted font-geist">
            Saving for spring break or a new laptop? Set your goals and
            we&apos;ll help you stay on track to reach them.
          </p>
        </div>
      </section>

      {/* Card E */}
      <section className="relative overflow-hidden rounded-3xl border border-primary/10 bg-primary p-6 md:p-8 lg:col-span-2 hover:border-primary/30 hover:bg-primary/90 transition">
        <div className="absolute inset-0 opacity-[0.12]"></div>
        <div className="relative z-10">
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary ring-1 ring-primary/30">
            <GraduationCap className="size-4" />
          </div>
          <h3 className="text-xl md:text-2xl tracking-tight font-geist text-primary-foreground">
            Financial literacy.
            <br />
            <span className="text-secondary font-geist">For a lifetime.</span>
          </h3>
          <p className="mt-3 text-sm md:text-base text-muted font-geist">
            Learn essential money skills that will empower you long after you
            graduate. Build a strong financial foundation.
          </p>
        </div>
      </section>
    </div>
  );
}
