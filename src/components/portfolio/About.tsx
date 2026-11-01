import { Briefcase, GraduationCap, Rocket, Target } from "lucide-react";
import { about, profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const stats = [
  { label: "Experience", value: profile.experience, icon: Briefcase },
  { label: "Projects", value: "2+", icon: Rocket },
  { label: "B.Tech CGPA", value: "7.82", icon: GraduationCap },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="about me" title="Code, curiosity & craft" />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="glass-card glow-border rounded-3xl p-8 lg:col-span-3">
            <p className="text-lg leading-relaxed text-muted-foreground">{about.short}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {about.coreConcepts.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6 lg:col-span-2">
            <Reveal delay={100} className="glass-card glow-border rounded-3xl p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Briefcase className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">Current Role</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{about.experience}</p>
            </Reveal>
            <Reveal delay={200} className="glass-card glow-border rounded-3xl p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Target className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">Career Objective</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{about.objective}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              className="glass-card group flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow transition-transform group-hover:rotate-6">
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-2xl font-bold">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
