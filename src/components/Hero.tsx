import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-gradient grain relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-28"
    >
      {/* Ambient orbs drifting behind the graphic */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-float-slow absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
        <div
          className="animate-float-slow absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-teal/15 blur-3xl"
          style={{ animationDelay: "-5s" }}
        />
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="relative flex flex-col items-center">
        <div className="relative animate-rise">
          <div
            aria-hidden
            className="animate-halo absolute left-1/2 top-[42%] h-[70%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/25 blur-[90px]"
          />
          <div className="animate-float relative">
            <Image
              src="/hero-graphic.png"
              alt="Portrait of Mayowa Ajadi"
              width={712}
              height={1340}
              preload
              sizes="(max-width: 640px) 60vw, 280px"
              className="h-[48svh] max-h-[520px] min-h-[300px] w-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <p
            className="animate-rise mb-4 text-[11px] font-medium uppercase tracking-[0.45em] text-teal"
            style={{ animationDelay: "150ms" }}
          >
            Portfolio
          </p>
          <h1
            className="animate-rise text-gradient text-5xl font-semibold leading-none tracking-tight sm:text-7xl"
            style={{ animationDelay: "250ms" }}
          >
            Mayowa Ajadi
          </h1>
          <div
            className="animate-rise mt-6 flex items-center justify-center gap-4"
            style={{ animationDelay: "400ms" }}
          >
            <span className="hidden h-px w-10 sm:block bg-gradient-to-r from-transparent to-teal/70" />
            <p className="whitespace-nowrap text-xs font-light uppercase tracking-[0.25em] text-white/75 sm:text-base sm:tracking-[0.3em]">
              Senior Software Engineer
            </p>
            <span className="hidden h-px w-10 sm:block bg-gradient-to-l from-transparent to-teal/70" />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 flex h-10 w-6 -translate-x-1/2 justify-center rounded-full border border-white/25 pt-2"
      >
        <span className="animate-scroll-dot h-1.5 w-1.5 rounded-full bg-teal" />
      </a>
    </section>
  );
}
