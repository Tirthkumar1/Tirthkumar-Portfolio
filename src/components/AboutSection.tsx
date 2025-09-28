import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section id="about" title="Bridging physical and digital experiences" eyebrow="Profile">
      <p className="leading-relaxed text-slate-300 text-center sm:text-left">
        I am pursuing my M.Sc. in Digital Engineering at Bauhaus University Weimar while applying my
        craft to build immersive, performant web products. My journey began in civil engineering,
        which sharpened my systems thinking and project planning. Today, I channel that mindset into
        front-end development, pairing clean UI foundations with motion, accessibility, and reliable
        delivery.
      </p>
      <p className="leading-relaxed text-slate-300 text-center sm:text-left">
        Outside of class and work, I explore emerging interfaces, prototype ideas in React, and
        experiment with visual storytelling using Three.js, GSAP, and modern CSS. I care deeply about
        teams that value craftsmanship, collaboration, and measurable impact.
      </p>
    </Section>
  );
}
