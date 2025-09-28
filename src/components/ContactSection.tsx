import { profile } from "@/data/profile";
import { Section } from "./Section";

export function ContactSection() {
  return (
    <Section id="contact" title="Let's collaborate" eyebrow="Contact">
      <div className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-900/80 p-8 text-sm text-slate-200 shadow-xl shadow-black/10">
        <p className="text-lg text-slate-200">
          I am excited about opportunities that blend thoughtful design with technical depth. If you
          have a role, project, or collaboration in mind, feel free to reach out.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Email</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 block text-base font-medium text-slate-100 transition hover:text-sky-200"
            >
              {profile.email}
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Phone</p>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="mt-2 block text-base font-medium text-slate-100 transition hover:text-sky-200"
            >
              {profile.phone}
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Address</p>
          <p className="mt-2 text-base text-slate-200">
            Studentenwohnheim Jakobsplan 20103, 99423 Weimar, Germany
          </p>
        </div>
      </div>
    </Section>
  );
}
