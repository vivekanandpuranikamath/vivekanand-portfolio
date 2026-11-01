import { ArrowUp, Code2, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

const socials = [
  { href: profile.socials.github, label: "GitHub", icon: Github },
  { href: profile.socials.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: profile.socials.hackerrank, label: "HackerRank", icon: Code2 },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-50" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-xl font-bold text-gradient">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.title}</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary hover:shadow-glow"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className="glass inline-flex h-9 w-9 items-center justify-center rounded-lg transition-all hover:-translate-y-0.5 hover:text-primary"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
