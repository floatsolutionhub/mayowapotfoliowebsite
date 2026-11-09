import Reveal from "@/components/Reveal";
import {
  caseStudies,
  contact,
  credentials,
  projects,
  services,
  stack,
  stages,
  trust,
} from "@/content";

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p className={`mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.4em] ${light ? "text-teal-soft" : "text-teal"}`}>
      <span className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M2 8h11M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function About() {
  return (
    <section id="about" className="relative bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <h2 className="max-w-4xl text-3xl font-light leading-[1.25] tracking-tight text-navy sm:text-5xl">
            From idea to production, <span className="font-semibold text-teal">and everything after.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <Reveal delay={100} className="space-y-6 text-[15px] font-light leading-8 text-ink/75">
            <p>
              I&apos;m a senior software engineer and technical lead with 6+ years designing, building and running
              products across the full lifecycle. I work in C#/.NET, React and Node.js on AWS, and I&apos;m an
              ISO/IEC 42001 Lead Implementer helping teams ship AI they can trust.
            </p>
            <p>
              I&apos;ve grown from writing features to owning products: shaping the idea with stakeholders, designing
              the architecture, leading the team that builds it, and staying accountable once real customers depend on
              it. I care about the unglamorous parts too: monitoring, incident response, cost control and clean
              handovers.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-teal hover:text-navy">
                Let&apos;s build something <Arrow />
              </a>
              <a href="#work" className="group inline-flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-sm font-medium text-navy transition hover:border-teal">
                View my work <Arrow />
              </a>
            </div>
          </Reveal>

          <Reveal delay={200} className="divide-y divide-navy/10 border-y border-navy/10">
            {trust.map((t) => (
              <div key={t.label} className="flex items-baseline justify-between gap-6 py-6">
                <span className="text-3xl font-semibold tracking-tight text-navy">{t.value}</span>
                <span className="max-w-[12rem] text-right text-[13px] font-light text-ink/60">{t.label}</span>
              </div>
            ))}
            <p className="py-5 text-[12px] font-light leading-6 text-ink/50">
              Open to senior, staff and lead roles and select consulting projects. Working remotely with teams
              worldwide (UTC+1).
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-mist py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow>What I do</Eyebrow>
          <h2 className="text-3xl font-light tracking-tight text-navy sm:text-5xl">
            How I help teams <span className="font-semibold">ship</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-navy/8 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="h-full">
              <article className="group h-full bg-white p-8 transition-colors duration-500 hover:bg-navy sm:p-10">
                <span className="text-xs font-medium tracking-[0.3em] text-teal">0{i + 1}</span>
                <h3 className="mt-6 text-xl font-medium text-navy transition-colors group-hover:text-white">{s.title}</h3>
                <p className="mt-2 text-sm font-light text-ink/60 transition-colors group-hover:text-white/60">{s.promise}</p>
                <ul className="mt-8 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[13.5px] font-light text-ink/75 transition-colors group-hover:text-white/80">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="hero-gradient grain relative overflow-hidden py-28 text-white sm:py-36">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow light>Selected work</Eyebrow>
          <h2 className="max-w-3xl text-3xl font-light tracking-tight sm:text-5xl">
            Products taken from idea to <span className="font-semibold text-teal">live customers</span>, and kept running.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-6">
          {caseStudies.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <article className="group grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-500 hover:border-teal/40 hover:bg-white/[0.06] sm:p-10 md:grid-cols-[1fr_1.1fr]">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-extralight text-teal/70">0{i + 1}</span>
                    <div>
                      <h3 className="text-lg font-medium">{c.name}</h3>
                      <p className="text-xs font-light tracking-wide text-white/50">{c.meta}</p>
                    </div>
                  </div>
                  <p className="mt-8 text-2xl font-light leading-snug text-white/95">{c.title}</p>
                  <a href={c.url} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm text-teal-soft hover:text-white">
                    Visit {c.url.replace(/^https?:\/\/(www\.)?/, "")} <Arrow />
                  </a>
                </div>
                <div className="border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">The challenge</p>
                  <p className="mt-3 text-sm font-light leading-7 text-white/70">{c.challenge}</p>
                  <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-white/40">What I did</p>
                  <ul className="mt-3 space-y-2.5">
                    {c.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm font-light text-white/80">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 80} className="h-full">
              <a href={p.url} target="_blank" rel="noreferrer" className="group flex h-full flex-col rounded-3xl border border-white/10 p-8 transition duration-500 hover:border-teal/40 hover:bg-white/[0.04]">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{p.name}</h3>
                  <span className="text-teal"><Arrow /></span>
                </div>
                <p className="mt-3 flex-1 text-sm font-light leading-7 text-white/65">{p.copy}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-light text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow>How I work</Eyebrow>
          <h2 className="max-w-3xl text-3xl font-light tracking-tight text-navy sm:text-5xl">
            From idea to customers, <span className="font-semibold">and beyond</span>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] font-light leading-7 text-ink/60">
            Shipping is the middle of the story, not the end. Here&apos;s how I run every product.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((s, i) => (
            <li key={s.name} className={`relative p-8 sm:p-10 ${s.highlight ? "bg-navy text-white" : "bg-white"}`}>
              <Reveal delay={i * 70}>
                <div className="flex items-center justify-between">
                  <span className={`grid h-11 w-11 place-items-center rounded-full border text-sm font-medium ${s.highlight ? "border-teal bg-teal text-navy" : "border-teal/40 text-teal"}`}>
                    {i + 1}
                  </span>
                  <span className={`text-lg ${s.highlight ? "text-teal" : "text-navy/20"}`} aria-hidden>
                    {i === stages.length - 1 ? "↺" : "→"}
                  </span>
                </div>
                <h3 className={`mt-8 text-lg font-medium ${s.highlight ? "text-white" : "text-navy"}`}>{s.name}</h3>
                <p className={`mt-3 text-sm font-light leading-7 ${s.highlight ? "text-white/70" : "text-ink/60"}`}>{s.copy}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <p className="mt-10 text-center text-sm font-light italic text-ink/55">
            Security and responsible AI governance aren&apos;t a final step. They&apos;re built into every stage.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="bg-mist py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow>Skills and tech stack</Eyebrow>
          <h2 className="text-3xl font-light tracking-tight text-navy sm:text-5xl">
            Tools I use to <span className="font-semibold">deliver</span>
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-navy/10 border-y border-navy/10">
          {stack.map((row, i) => (
            <Reveal key={row.area} delay={i * 50}>
              <div className="grid gap-2 py-7 md:grid-cols-[0.8fr_1.2fr_1.2fr] md:items-center md:gap-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal">{row.area}</p>
                <p className="text-lg font-medium text-navy">{row.tech}</p>
                <p className="text-sm font-light text-ink/60">{row.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Credentials() {
  return (
    <section id="credentials" className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow>Credentials</Eyebrow>
          <h2 className="text-3xl font-light tracking-tight text-navy sm:text-5xl">
            Education and <span className="font-semibold">certifications</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {credentials.map((c, i) => (
            <Reveal key={c.title} delay={i * 100} className="h-full">
              <article className="relative h-full overflow-hidden rounded-3xl border border-navy/10 p-8 sm:p-10">
                <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-teal/25 to-transparent blur-2xl" />
                <span className="relative inline-block rounded-full bg-navy px-4 py-1.5 text-xs font-medium tracking-wider text-teal">
                  {c.badge}
                </span>
                <h3 className="relative mt-6 text-2xl font-medium text-navy">{c.title}</h3>
                <p className="relative mt-4 text-sm font-light leading-7 text-ink/65">{c.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const links = [
    { label: "Email", href: `mailto:${contact.email}`, text: contact.email },
    { label: "LinkedIn", href: contact.linkedin, text: "Connect" },
    { label: "GitHub", href: contact.github, text: "Follow" },
    ...(contact.booking ? [{ label: "Book a call", href: contact.booking, text: "30 minutes" }] : []),
  ];

  return (
    <section id="contact" className="hero-gradient grain relative overflow-hidden py-28 text-white sm:py-40">
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.45em] text-teal">Contact</p>
          <h2 className="text-4xl font-light leading-tight tracking-tight sm:text-6xl">
            Let&apos;s build something <span className="text-gradient font-semibold">that lasts</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[15px] font-light leading-8 text-white/65">
            Hiring for a senior or lead role, planning a new product, or preparing your AI systems for ISO/IEC 42001?
            Tell me what you&apos;re working on. I reply within one business day.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-teal px-8 py-4 text-sm font-medium text-navy shadow-[0_20px_50px_-15px_rgba(27,180,160,0.7)] transition hover:bg-white"
          >
            Start a conversation <Arrow />
          </a>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-20 grid max-w-3xl gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="bg-navy-deep/60 px-6 py-6 text-left transition hover:bg-navy"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">{l.label}</p>
                <p className="mt-2 truncate text-sm text-white/90">{l.text}</p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep py-10 text-center text-xs font-light tracking-wide text-white/40">
      © 2026 Mayowa Ajadi. Built with Next.js.
    </footer>
  );
}
