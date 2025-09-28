import { experiences } from "@/data/profile";
import { Section } from "./Section";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Professional experience" eyebrow="Experience">
      <div className="grid gap-6 lg:grid-cols-2">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-sky-500/10"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 text-slate-100">
              <div>
                <h3 className="text-xl font-semibold text-slate-50">{experience.role}</h3>
                <p className="text-slate-300">{experience.company}</p>
              </div>
              <div className="text-right text-xs uppercase tracking-[0.25em] text-slate-400">
                <p>{experience.timeframe}</p>
                <p>{experience.location}</p>
              </div>
            </div>
            <ul className="space-y-3 text-slate-300">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-left">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-400/80" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
