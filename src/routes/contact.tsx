import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useState } from "react";

import { NetworkBackground } from "@/components/site/NetworkBackground";
import { SectionLabel, StatusPill, TerminalWindow } from "@/components/site/primitives";
import { SocialIcon } from "@/components/site/SocialIcon";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${profile.name}` },
      { name: "description", content: `Get in touch with ${profile.name} about projects, roles or collaborations.` },
      { property: "og:title", content: `Contact — ${profile.name}` },
      { property: "og:description", content: `Get in touch with ${profile.name} about projects, roles or collaborations.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute inset-0 bg-vignette" aria-hidden />
      <NetworkBackground className="opacity-50" />

      <div className="container-page relative grid gap-16 py-20 md:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="flex flex-col gap-8">
          <SectionLabel index="04">Contact</SectionLabel>
          <h1 className="text-5xl leading-[1.05] text-silver-gradient md:text-7xl">
            Let's build something <em>remarkable</em>.
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            Whether it's a role, a collaboration or just a hello — my inbox is open.
          </p>
          <div>
            <StatusPill>{profile.availability}</StatusPill>
          </div>
        </div>

        <TerminalWindow title="~/contact — zsh">
          <div className="flex flex-col gap-6 p-6 font-mono text-sm">
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground">
                <span className="text-primary">$</span> echo $EMAIL
              </span>
              <div className="flex items-center justify-between gap-3 rounded-md border border-line bg-background px-4 py-3">
                <a href={`mailto:${profile.email}`} className="truncate text-foreground hover:text-primary">
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copy}
                  className="flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "copied" : "copy"}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground">
                <span className="text-primary">$</span> ls ./socials
              </span>
              <ul className="divide-y divide-line rounded-md border border-line">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between px-4 py-3 text-foreground transition-colors hover:bg-primary-soft hover:text-primary"
                    >
                      <span className="flex items-center gap-3">
                        <SocialIcon label={s.label} className="h-4 w-4" />
                        {s.label}
                        <span className="hidden text-xs text-muted-foreground sm:inline">{s.handle}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild variant="signal" size="xl" className="w-full">
              <a href={`mailto:${profile.email}`}>&gt;_ Send a message</a>
            </Button>
            <p className="text-xs text-muted-foreground">
              <span className="text-primary">●</span> Based in {profile.location}
            </p>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
