import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white/5 border-white/10 border w-full h-screen">
      <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
      <Image
        src="/bg-1.png"
        alt="University students learning financial literacy and budgeting"
        className="w-full h-full object-cover"
        loading="eager"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none"></div>

      <div className="absolute inset-0 flex items-end">
        <div className="w-full sm:p-8 pt-6 pr-6 pb-6 pl-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-7xl text-white font-geist tracking-tighter drop-shadow-lg">
              Master Your Finances
            </h2>
            <p className="sm:text-lg leading-relaxed text-lg font-normal text-white/90 font-geist mt-3 drop-shadow-sm">
              FinSpace is your ultimate financial literacy platform designed for
              university students. Take control of your daily expenses with
              smart budgeting tools, track your spending, and build healthy
              financial habits that last a lifetime.
            </p>
            <div className="mt-4">
              <a
                href="#showreel"
                className="inline-flex items-center gap-2 hover:bg-white/15 text-sm font-medium text-white tracking-tight bg-white/8 backdrop-blur-sm rounded-full pt-2 pr-4 pb-2 pl-4 border border-white/15 shadow-sm transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="arrow-right"
                  className="lucide lucide-arrow-right w-4 h-4 stroke-1.5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <span className="font-geist">Start Budgeting</span>
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
              <div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">
                10,000+
              </div>
              <p className="text-[11px] text-white/80 mt-0.5 font-geist">
                Students Empowered
              </p>
            </div>
            <div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
              <div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">
                $500K+
              </div>
              <p className="text-[11px] text-white/80 mt-0.5 font-geist">
                Savings Achieved
              </p>
            </div>
            <div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
              <div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">
                5
              </div>
              <p className="text-[11px] text-white/80 mt-0.5 font-geist">
                Years of Excellence
              </p>
            </div>
            <div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
              <div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">
                4.9/5
              </div>
              <p className="text-[11px] text-white/80 mt-0.5 font-geist">
                User Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
