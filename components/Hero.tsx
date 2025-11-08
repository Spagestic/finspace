import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white/5 border-white/10 border w-full min-h-[90vh]">
      <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
      <Image
        src="/bg-1.png"
        alt="Creative team working on design projects"
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
              Design that moves brands forward
            </h2>
            <p className="sm:text-lg leading-relaxed text-lg font-normal text-white/90 font-geist mt-3 drop-shadow-sm">
              We craft brand identities, digital products, and strategic
              campaigns for ambitious teams. From concept to launch, our studio
              blends clarity, utility, and aesthetics to create work that
              performs and endures. Explore a curated reel of recent
              collaborations and outcomes.
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
                  data-lucide="play"
                  className="lucide lucide-play w-4 h-4 stroke-1.5"
                >
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                </svg>
                <span className="font-geist">Watch Showreel</span>
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
              <div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">
                200+
              </div>
              <p className="text-[11px] text-white/80 mt-0.5 font-geist">
                Projects Delivered
              </p>
            </div>
            <div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
              <div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">
                50+
              </div>
              <p className="text-[11px] text-white/80 mt-0.5 font-geist">
                Clients Worldwide
              </p>
            </div>
            <div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
              <div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">
                8
              </div>
              <p className="text-[11px] text-white/80 mt-0.5 font-geist">
                Years in Practice
              </p>
            </div>
            <div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
              <div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">
                12
              </div>
              <p className="text-[11px] text-white/80 mt-0.5 font-geist">
                Team Members
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
