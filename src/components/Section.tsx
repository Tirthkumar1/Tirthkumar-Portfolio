import React from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex flex-col gap-4">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.3em] text-sky-400">{eyebrow}</p>
        ) : null}
        <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">{title}</h2>
        <div className="mt-4 space-y-6 text-base text-slate-300 md:text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}
