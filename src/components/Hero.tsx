import Link from "next/link";
import { profile } from "@/data/profile";

export type NavItem = {
  label: string;
  href: string;
};

type HeroProps = {
  navItems: NavItem[];
};

export function Hero({ navItems }: HeroProps) {
  return (
    <header className="flex flex-col gap-10">
      <nav className="flex flex-wrap items-center justify-between gap-6 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-200 shadow-lg shadow-black/10 backdrop-blur">
        <span className="font-semibold text-slate-100">{profile.name}</span>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-sky-300">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-300">{profile.tagline}</p>
          <h1 className="text-4xl font-semibold text-slate-50 sm:text-6xl">{profile.name}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">{profile.about}</p>
          <div className="flex flex-wrap gap-3">
            {profile.socials.map((social) => {
              const isDownload = social.url.startsWith("/");
              const isExternal = social.url.startsWith("http");
              return (
                <a
                  key={social.label}
                  href={social.url}
                  className="group flex items-center gap-2 rounded-full border border-slate-700/70 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-400/60 hover:text-sky-200"
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

        <aside className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 shadow-xl shadow-black/10 backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Current base</p>
            <p className="mt-2 text-lg font-medium text-slate-100">{profile.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Nationality</p>
            <p className="mt-2 font-medium text-slate-100">{profile.nationality}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Availability</p>
            <p className="mt-2 leading-relaxed text-slate-300">{profile.availability}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Languages</p>
            <ul className="mt-3 space-y-1">
              {profile.languages.map((language) => (
                <li key={language.name} className="flex items-center justify-between gap-4 text-slate-200">
                  <span>{language.name}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{language.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </header>
  );
}
