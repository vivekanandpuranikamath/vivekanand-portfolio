import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Linkedin, MapPin, Terminal } from "lucide-react";
import { profile } from "@/data/portfolio";

function useTyping(words: string[], typeMs = 85, deleteMs = 45, holdMs = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? deleteMs : typeMs,
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs]);

  return text;
}

export function Hero() {
  const typed = useTyping(profile.roles);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] animate-pulse-glow rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] animate-pulse-glow rounded-full bg-accent/15 blur-[120px] [animation-delay:1.5s]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.25fr_1fr]">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            {profile.availability}
          </span>

          <p className="font-mono text-sm text-muted-foreground">Hello, I&apos;m</p>
          <h1 className="mt-2 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <div className="mt-6 flex items-center gap-3 font-mono text-lg sm:text-2xl">
            <Terminal className="h-5 w-5 shrink-0 text-accent sm:h-6 sm:w-6" />
            <span className="text-gradient-brand font-semibold">{typed}</span>
            <span className="-ml-2 inline-block h-6 w-0.5 animate-blink bg-primary sm:h-7" />
          </div>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.tagline}</p>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> {profile.location}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-glow-accent"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="glass glow-border inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            <div className="ml-1 flex gap-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="glass inline-flex h-12 w-12 items-center justify-center rounded-xl text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary hover:shadow-glow"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="glass inline-flex h-12 w-12 items-center justify-center rounded-xl text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary hover:shadow-glow"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto animate-in fade-in zoom-in-90 duration-1000">
          <div className="relative h-72 w-72 animate-float sm:h-80 sm:w-80">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-brand p-[3px] opacity-90 blur-[2px]" />
            <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-40 blur-3xl" />
            <div className="absolute inset-[4px] flex items-center justify-center overflow-hidden rounded-full bg-card">
              <div className="absolute inset-0 bg-grid opacity-60" />
              <span className="relative font-display text-8xl font-bold text-gradient-brand">VP</span>
            </div>

            <div className="glass absolute -left-6 top-10 rounded-xl px-3 py-2 font-mono text-xs shadow-glow">
              <span className="text-accent">class</span> Developer {"{}"}
            </div>
            <div className="glass absolute -right-4 bottom-12 rounded-xl px-3 py-2 text-xs">
              <p className="text-muted-foreground">Focus</p>
              <p className="font-semibold">{profile.domain}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
