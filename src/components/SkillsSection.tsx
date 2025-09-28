import { skills } from "@/data/profile";
import { Section } from "./Section";
import { Badge } from "./Badge";

export function SkillsSection() {
  return (
    <Section id="skills" title="Technical stack" eyebrow="Skills">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 shadow-lg shadow-black/10"
          >
            <h3 className="text-lg font-semibold text-slate-100">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
