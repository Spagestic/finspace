"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiggyBank, TrendingUp, Shield, Target } from "lucide-react";

export default function EducationSection() {
  return (
    <div id="basics" className="w-full max-w-6xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Financial Literacy Basics
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Master these essential concepts to build a strong financial foundation
        </p>
      </div>

      <Tabs defaultValue="budgeting" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="budgeting">Budgeting</TabsTrigger>
          <TabsTrigger value="saving">Saving</TabsTrigger>
          <TabsTrigger value="emergency">Emergency Fund</TabsTrigger>
          <TabsTrigger value="goals">Financial Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="budgeting" className="space-y-6">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <PiggyBank className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>What is Budgeting?</CardTitle>
              </div>
              <CardDescription>
                A budget is your financial roadmap
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Budgeting is the process of creating a plan for your money. It
                helps you decide how much to spend and save based on your income
                and expenses.
              </p>

              <div className="bg-accent/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">The 50/30/20 Rule</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center font-bold text-primary">
                      50%
                    </div>
                    <div>
                      <p className="font-medium">Needs</p>
                      <p className="text-sm text-muted-foreground">
                        Rent, groceries, utilities, transportation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center font-bold text-primary">
                      30%
                    </div>
                    <div>
                      <p className="font-medium">Wants</p>
                      <p className="text-sm text-muted-foreground">
                        Entertainment, dining out, hobbies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center font-bold text-primary">
                      20%
                    </div>
                    <div>
                      <p className="font-medium">Savings & Debt</p>
                      <p className="text-sm text-muted-foreground">
                        Emergency fund, retirement, paying off debt
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Know exactly where your money goes</li>
                  <li>Avoid overspending and debt</li>
                  <li>Save for future goals</li>
                  <li>Reduce financial stress</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="saving" className="space-y-6">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Smart Saving Strategies</CardTitle>
              </div>
              <CardDescription>
                Build wealth one dollar at a time
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Saving money is essential for financial security. Even small
                amounts can add up to significant savings over time through the
                power of compound interest.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-accent/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Pay Yourself First</h4>
                  <p className="text-sm text-muted-foreground">
                    Set aside savings as soon as you get paid, before spending
                    on anything else.
                  </p>
                </div>
                <div className="bg-accent/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Automate Savings</h4>
                  <p className="text-sm text-muted-foreground">
                    Set up automatic transfers to your savings account each
                    payday.
                  </p>
                </div>
                <div className="bg-accent/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Start Small</h4>
                  <p className="text-sm text-muted-foreground">
                    Even $10-20 per week can grow into thousands over time.
                  </p>
                </div>
                <div className="bg-accent/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Track Progress</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor your savings growth to stay motivated and on track.
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border-2 border-primary/20">
                <h4 className="font-semibold mb-2">💡 Quick Tip</h4>
                <p className="text-sm">
                  Try the &quot;52-week challenge&quot;: Save $1 in week 1, $2
                  in week 2, and so on. You&apos;ll have $1,378 by year&apos;s
                  end!
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emergency" className="space-y-6">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Emergency Fund Essentials</CardTitle>
              </div>
              <CardDescription>Your financial safety net</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                An emergency fund is money set aside for unexpected expenses
                like medical bills, car repairs, or job loss. It&apos;s your
                financial cushion against life&apos;s surprises.
              </p>

              <div className="bg-accent/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">How Much to Save</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-primary">1.</span>
                    <div>
                      <p className="font-medium">Starter Fund: $500-$1,000</p>
                      <p className="text-sm text-muted-foreground">
                        Cover small emergencies while paying off debt
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-primary">2.</span>
                    <div>
                      <p className="font-medium">
                        Basic Fund: 3 Months Expenses
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Ideal if you have stable income and low expenses
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-primary">3.</span>
                    <div>
                      <p className="font-medium">
                        Full Fund: 6 Months Expenses
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Recommended for everyone to handle major emergencies
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Where to Keep It:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>High-yield savings account</li>
                  <li>Money market account</li>
                  <li>Separate from everyday spending</li>
                  <li>Easy to access when needed</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Setting Financial Goals</CardTitle>
              </div>
              <CardDescription>
                Plan your path to financial success
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Financial goals give your money purpose and direction. They help
                you stay motivated and make smart decisions with your finances.
              </p>

              <div className="space-y-4">
                <div className="bg-accent/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">
                    Short-Term Goals (0-1 year)
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Build a $1,000 emergency fund</li>
                    <li>Pay off credit card debt</li>
                    <li>Save for a vacation or new phone</li>
                    <li>Create and stick to a monthly budget</li>
                  </ul>
                </div>

                <div className="bg-accent/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">
                    Medium-Term Goals (1-5 years)
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Save 3-6 months of expenses</li>
                    <li>Save for a car down payment</li>
                    <li>Pay off student loans</li>
                    <li>Start investing for retirement</li>
                  </ul>
                </div>

                <div className="bg-accent/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">
                    Long-Term Goals (5+ years)
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Buy a house</li>
                    <li>Save for children&apos;s education</li>
                    <li>Build retirement savings</li>
                    <li>Achieve financial independence</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border-2 border-primary/20">
                <h4 className="font-semibold mb-2">SMART Goals Framework</h4>
                <p className="text-sm mb-2">
                  Make your goals Specific, Measurable, Achievable, Relevant,
                  and Time-bound
                </p>
                <p className="text-sm italic">
                  Example: &quot;Save $3,000 for emergency fund by December 31st
                  by setting aside $250 monthly&quot;
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
