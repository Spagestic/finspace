"use client";

import { Button } from "@/components/ui/button";
import { DollarSign, Trophy, BookOpen, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/", icon: DollarSign },
  { name: "Quiz", href: "#quiz", icon: Trophy },
  { name: "Education", href: "#education", icon: BookOpen },
  { name: "Leaderboard", href: "/leaderboard", icon: TrendingUp },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="relative"
  data-element-locator="html &gt; body:nth-of-type(1) &gt; div:nth-of-type(2) &gt; header:nth-of-type(1)">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {/* <a href="#" className="flex items-center gap-2">
        <Image
          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cfd11ad9-7276-443d-aaea-710749f28066_1600w.png"
          alt="Water Logo"
          width={100}
          height={32}
          className="object-cover rounded"
          unoptimized
        />
      </a> */}
      
      <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
        <a className="hover:text-black transition font-geist" href="#">
          Features
        </a>
        <a className="hover:text-black transition font-geist" href="#">
          Solutions
        </a>
        <a className="hover:text-black transition font-geist" href="#">
          Integrations
        </a>
        <a className="hover:text-black transition font-geist" href="#">
          Pricing
        </a>
      </nav>
      <div className="flex items-center gap-3">
        <Link className="hidden sm:inline-flex text-sm text-black/80 hover:text-white transition font-geist" href="#">
          Sign in
        </Link>
        <a href="#"
          className="inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition font-geist">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4">
            <path d="m10 17 5-5-5-5" className=""></path>
            <path d="M15 12H3" className=""></path>
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" className=""></path>
          </svg>
          Create account
        </a>
      </div>
    </div>
</header>
);};