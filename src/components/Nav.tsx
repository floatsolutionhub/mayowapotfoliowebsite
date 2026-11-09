"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#credentials", label: "Credentials" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-navy/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 text-white" aria-label="Mayowa Ajadi, home">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-teal/40 text-sm font-medium tracking-wider">
            MA
          </span>
        </a>

        <ul className="hidden items-center gap-9 text-[13px] font-light tracking-wide text-white/70 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-teal/60 px-5 py-2 text-[13px] font-medium text-white transition hover:bg-teal hover:text-navy md:inline-block"
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="relative h-10 w-10 text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`absolute left-2 right-2 h-px bg-current transition ${open ? "top-5 rotate-45" : "top-4"}`} />
          <span className={`absolute left-2 right-2 h-px bg-current transition ${open ? "top-5 -rotate-45" : "top-6"}`} />
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 px-5 pb-6 md:hidden">
          {[...links, { href: "#contact", label: "Contact" }].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-light text-white/80 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
