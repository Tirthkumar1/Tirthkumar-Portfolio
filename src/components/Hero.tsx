"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export type NavItem = {
  label: string;
  href: string;
};

type HeroProps = {
  navItems: NavItem[];
};

export function Hero({ navItems }: HeroProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="flex flex-col gap-10">
      <nav className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200 shadow-lg shadow-black/10 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6">
        <div className="flex w-full items-center justify-between gap-4">
          <span className="text-base font-semibold text-slate-100 sm:text-left">{profile.name}</span>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100 transition hover:border-sky-400/60 hover:text-sky-200 sm:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        <div className="hidden items-center justify-end gap-4 text-xs uppercase tracking-[0.25em] sm:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition-colors hover:text-sky-300">
              {item.label}
            </Link>
          ))}
        </div>

        <div
          className={`flex flex-col gap-2 overflow-hidden text-center text-sm uppercase tracking-[0.2em] transition-all duration-300 sm:hidden ${menuOpen ? "max-h-40 opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:border-sky-400/60 hover:text-sky-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
        <div className="flex flex-col gap-6 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.28em] text-sky-300">{profile.tagline}</p>
          <h1 className="text-4xl font-semibold text-slate-50 sm:text-6xl">{profile.name}</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:mx-0 sm:text-lg">{profile.about}</p>
          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            {profile.socials.map((social) => {
              const isDownload = social.url.startsWith("/");
              const isExternal = social.url.startsWith("http");
              return (
                <a
                  key={social.label}
                  href={social.url}
                  className="group flex items-center gap-2 rounded-full border border-slate-700/70 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 transition hover:border-sky-400/60 hover:text-sky-200 sm:px-4 sm:text-sm"
                  {...(isDownload ? { download: true } : {})}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400/80 transition group-hover:bg-sky-300" />
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>

        <aside className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200 shadow-xl shadow-black/10 backdrop-blur sm:p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Current base</p>
            <p className="mt-2 text-lg font-medium text-slate-100">{profile.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Nationality</p>
            <p className="mt-2 font-medium text-slate-100">{profile.nationality}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Availability</p>
            <p className="mt-2 leading-relaxed text-slate-300">{profile.availability}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Languages</p>
            <ul className="mt-3 space-y-2">
              {profile.languages.map((language) => (
                <li key={language.name} className="flex items-center justify-between gap-4 text-slate-200">
                  <span>{language.name}</span>
                  <span className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-400 sm:text-xs">{language.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </header>
  );
}
