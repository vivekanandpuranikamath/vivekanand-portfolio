import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Cta() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-glass-border p-10 text-center md:p-16">
          <div className="absolute inset-0 bg-gradient-brand opacity-15" />
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 animate-pulse-glow rounded-full bg-primary/30 blur-[100px]" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              {profile.availability}
            </p>
            <h2 className="mt-4 text-4xl font-bold text-gradient md:text-6xl">Let&apos;s work together!</h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              I&apos;m looking for opportunities to contribute, learn and grow as a software engineer.
              Have a role or project in mind? I&apos;d love to hear about it.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-glow-accent"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold transition-all hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
