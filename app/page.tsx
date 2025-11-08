"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import QuizCard from "@/components/QuizCard";
import EducationSection from "@/components/EducationSection";
import { BookOpen, Trophy, Target, TrendingUp, PiggyBank } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-accent/20 to-background">
      <div className="relative">
        <Header />
        <Hero />
      </div>
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Financial Literacy Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <PiggyBank className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Smart Budgeting</CardTitle>
                <CardDescription>
                  Learn how to create and manage a budget that works for your
                  lifestyle and goals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Financial Goals</CardTitle>
                <CardDescription>
                  Set and achieve short-term and long-term financial objectives
                  with confidence
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Money Management</CardTitle>
                <CardDescription>
                  Master essential concepts like saving, investing, and building
                  an emergency fund
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      {showQuiz && (
        <section className="py-16 px-4 bg-accent/30" id="quiz">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Test Your Knowledge
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Answer finance and budgeting questions to earn points and climb
                the leaderboard
              </p>
            </div>
            <QuizCard />
          </div>
        </section>
      )}

      {/* Education Section */}
      <section className="py-16 px-4">
        <EducationSection />
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Boost Your Financial IQ?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join the competition and start your journey to financial literacy
            today
          </p>
          {!showQuiz && (
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => {
                setShowQuiz(true);
                setTimeout(() => {
                  document
                    .getElementById("quiz")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
            >
              <Trophy className="w-5 h-5 mr-2" />
              Take the Quiz Now
            </Button>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>
            © 2024 Finance Literacy Competition. Empowering financial education.
          </p>
        </div>
      </footer>
    </div>
  );
}
