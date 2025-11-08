"use client";

import { Button } from "@/components/ui/button";

import QuizCard from "@/components/QuizCard";
import EducationSection from "@/components/EducationSection";
import { Trophy } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { Features } from "@/components/features";

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-accent/20 to-background">
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <Features />

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
