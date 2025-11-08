import Link from "next/link";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between py-2 px-6">
      {/* Logo */}
      <div className="flex items-center font-semibold text-primary-foreground">
        <Link href="/">FinSpace</Link>
      </div>

      {/* Navigation */}
      <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-2">
        <Link
          className="rounded-full px-3 py-2 font-light text-primary-foreground text-xs transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="rounded-full px-3 py-2 font-light text-primary-foreground text-xs transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
          href="#pricing"
        >
          Pricing
        </Link>
        <Link
          className="rounded-full px-3 py-2 font-light text-primary-foreground text-xs transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
          href="#faqs"
        >
          FAQs
        </Link>
      </nav>

      <Link href="/dashboard">
        <div
          id="gooey-btn"
          className="relative flex items-center group"
          style={{ filter: "url(#gooey-filter)" }}
        >
          <button className="absolute right-0 px-2.5 py-2 rounded-full bg-primary hover:bg-primary/80 text-primary-foreground font-normal text-xs transition-all duration-300 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </button>
          <button className="px-6 py-2 rounded-full bg-primary hover:bg-primary/80 text-primary-foreground font-normal text-xs transition-all duration-300 cursor-pointer h-8 flex items-center z-10">
            App
          </button>
        </div>
      </Link>
    </header>
  );
}
