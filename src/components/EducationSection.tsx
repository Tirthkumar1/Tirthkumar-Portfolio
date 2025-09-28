import { education } from "@/data/profile";
import { Section } from "./Section";

export function EducationSection() {
  return (
    <Section id="education" title="Education" eyebrow="Education">
      <div className="relative pl-6">
        <div className="absolute left-1 top-0 h-full w-px bg-gradient-to-b from-sky-500/70 via-sky-400/30 to-transparent" />
        <div className="space-y-10">
          {education.map((entry) => (
            <div key={entry.degree} className="relative flex flex-col gap-2 pl-8">
              <span className="absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full border border-sky-300/60 bg-slate-900" />
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{entry.timeframe}</p>
              <h3 className="text-xl font-semibold text-slate-50">{entry.degree}</h3>
              <p className="text-slate-300">
                {entry.institution} - {entry.location}
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-300">{entry.details}</p>
              {entry.link ? (
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sky-300 transition hover:text-sky-200"
                >
                  Visit program
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
