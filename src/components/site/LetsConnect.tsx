import { ArrowUpRight } from "lucide-react";

import { connectLinks, profile } from "@/content/portfolio";

import { NetworkBackground } from "./NetworkBackground";
import { SectionLabel } from "./primitives";
import { SocialIcon } from "./SocialIcon";

export function LetsConnect({ index }: { index?: string }) {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <NetworkBackground className="opacity-40" density={0.00005} />
      <div className="container-page relative grid gap-12 py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <SectionLabel index={index}>Let's connect</SectionLabel>
          <h2 className="text-5xl leading-tight text-silver-gradient md:text-6xl">
            Let's <em>connect</em>.
          </h2>
          <p className="max-w-md text-muted-foreground">
            Open to internships, freelance work and hackathon teams. Say hi — I'd love to hear what you're building.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex w-fit items-center gap-2 font-mono text-sm text-foreground transition-colors hover:text-primary"
          >
            <span className="text-primary">&gt;_</span>
            <span className="border-b border-line-strong pb-0.5 group-hover:border-primary">{profile.email}</span>
          </a>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {connectLinks.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col gap-10 rounded-xl border border-line-strong bg-surface/70 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line-strong text-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                    <SocialIcon label={s.label} className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-display text-2xl text-foreground">{s.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">{s.handle}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
