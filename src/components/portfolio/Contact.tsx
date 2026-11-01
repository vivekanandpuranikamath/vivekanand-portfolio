import { useState, type FormEvent } from "react";
import { Code2, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const fieldClass =
  "w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-primary focus:shadow-glow";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "vivekanandpuranikamath", href: profile.socials.linkedin, icon: Linkedin },
  { label: "GitHub", value: "vivekanandpuranikamath", href: profile.socials.github, icon: Github },
  { label: "HackerRank", value: "vivekanandapura1", href: profile.socials.hackerrank, icon: Code2 },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Please enter a valid email";
    if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters";
    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = encodeURIComponent(form.subject.trim() || `Portfolio enquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(`${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app…", { description: "Thanks for reaching out!" });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="contact"
          title="Get in touch"
          subtitle="Have a question or an opportunity? Drop a message and I'll get back to you."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="glass-card glow-border group flex items-center gap-4 rounded-2xl p-5 transition-all hover:translate-x-1"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="truncate text-sm font-medium">{c.value}</p>
                  </div>
                </a>
              </Reveal>
            ))}
            <Reveal delay={320} className="flex items-center gap-2 px-2 pt-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" /> {profile.location}
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-3">
            <form onSubmit={onSubmit} noValidate className="glass-card rounded-3xl p-7 md:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name}>
                  <input
                    className={fieldClass}
                    placeholder="Your name"
                    value={form.name}
                    maxLength={100}
                    onChange={(e) => set("name")(e.target.value)}
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    className={fieldClass}
                    placeholder="you@example.com"
                    value={form.email}
                    maxLength={255}
                    onChange={(e) => set("email")(e.target.value)}
                  />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Subject">
                  <input
                    className={fieldClass}
                    placeholder="What's this about?"
                    value={form.subject}
                    maxLength={150}
                    onChange={(e) => set("subject")(e.target.value)}
                  />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Message" error={errors.message}>
                  <textarea
                    rows={5}
                    className={`${fieldClass} resize-none`}
                    placeholder="Tell me a bit about your project or role…"
                    value={form.message}
                    maxLength={1000}
                    onChange={(e) => set("message")(e.target.value)}
                  />
                </Field>
              </div>
              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-glow-accent"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
