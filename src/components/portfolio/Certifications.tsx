import { ArrowUpRight, Award } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="certifications" title="Verified credentials" />

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glow-border group flex h-full items-start gap-5 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow-accent"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Award className="h-7 w-7" />
                </span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold">{c.name}</h3>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.platform} · <span className="font-mono">{c.date}</span>
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {c.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-primary/10 px-2 py-1 font-mono text-xs text-primary"
                      >
                        {s}
                      </span>
                    ))}
                    <span className="ml-auto text-xs font-medium text-accent">Verify credential</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
