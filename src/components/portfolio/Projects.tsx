import { useState } from "react";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { filterProjects, projectFilters, projects, type ProjectFilter } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const visible = filterProjects(projects, filter);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="projects"
          title="Things I've built"
          subtitle="Full-stack applications built with Java, Spring and React."
        />

        <Reveal className="mb-10 flex justify-center">
          <div className="glass inline-flex gap-1 rounded-2xl p-1.5" role="tablist">
            {projectFilters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm font-medium transition-all",
                  filter === f
                    ? "bg-gradient-brand text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {visible.map((p, i) => (
            <article
              key={p.title}
              className="glass-card glow-border group flex flex-col overflow-hidden rounded-3xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 hover:-translate-y-2 hover:shadow-glow"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative h-44 overflow-hidden bg-secondary">
                <div className="absolute inset-0 bg-grid opacity-80" />
                <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gradient-brand opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FolderGit2 className="h-16 w-16 text-primary/70 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                </div>
                <span
                  className={cn(
                    "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
                    p.status === "Completed"
                      ? "bg-success/15 text-success"
                      : "bg-accent/15 text-accent",
                  )}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {p.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
                  {p.category}
                </p>
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-background/40 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 pt-7">
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:text-primary"
                    >
                      <Github className="h-4 w-4" /> Code
                    </a>
                  ) : null}
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-glow"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  ) : null}
                  {!p.github && !p.demo && (
                    <span className="inline-flex items-center rounded-xl border border-dashed border-border px-4 py-2 text-sm text-muted-foreground">
                      Links coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
