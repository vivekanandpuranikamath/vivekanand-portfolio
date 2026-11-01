import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="education" title="Academic journey" />

        <ol className="relative space-y-8 border-l border-border pl-8 md:pl-10">
          <span className="absolute -left-px top-0 h-full w-px bg-gradient-brand opacity-60" />
          {education.map((e, i) => (
            <Reveal as="li" key={e.degree} delay={i * 120} className="relative">
              <span className="absolute -left-[45px] top-6 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow md:-left-[53px]">
                <GraduationCap className="h-4 w-4" />
              </span>
              <div className="glass-card glow-border rounded-3xl p-7 transition-transform duration-500 hover:translate-x-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold">{e.degree}</h3>
                    <p className="mt-1 font-medium text-primary">{e.institute}</p>
                  </div>
                  <span className="rounded-full bg-accent/15 px-3 py-1 font-mono text-xs font-semibold text-accent">
                    {e.score}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> {e.location}
                  </span>
                  <span className="font-mono">{e.period}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
