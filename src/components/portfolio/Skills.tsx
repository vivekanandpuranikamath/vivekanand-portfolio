import { Bot, Database, Layout, Server, Wrench, type LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  frontend: Layout,
  backend: Server,
  database: Database,
  tools: Wrench,
  ai: Bot,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="skills"
          title="My tech stack"
          subtitle="Tools and technologies I use to design, build and ship full-stack applications."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.key] ?? Wrench;
            return (
              <Reveal
                key={g.key}
                delay={i * 90}
                className={`glass-card glow-border group rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1.5 ${
                  i === 1 ? "lg:row-span-1" : ""
                }`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-gradient-brand group-hover:text-primary-foreground group-hover:shadow-glow">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold">{g.title}</h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(g.items.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="cursor-default rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
