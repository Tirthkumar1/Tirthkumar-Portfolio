import { projects } from "@/data/profile";
import { formatUrl } from "@/utils/formatUrl";
import { Section } from "./Section";
import { Badge } from "./Badge";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Selected projects" eyebrow="Projects">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex h-full flex-col justify-between gap-5 rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-sm text-slate-200 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>{project.timeframe}</span>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-300 transition hover:text-sky-200"
                  >
                    {formatUrl(project.link)}{" ->"}
                  </a>
                ) : null}
              </div>
              <h3 className="text-2xl font-semibold text-slate-50">{project.name}</h3>
              <p className="text-base leading-relaxed text-slate-300">{project.description}</p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-700/70 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-sky-400/60 hover:text-sky-200"
                >
                  View project
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
