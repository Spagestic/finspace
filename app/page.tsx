import EducationSection from "@/components/EducationSection";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { Features } from "@/components/features";
import FAQ from "@/components/faq-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-accent/20 to-background">
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <Features />
      <EducationSection />
      <FAQ />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 FinSpace.</p>
        </div>
      </footer>
    </div>
  );
}
