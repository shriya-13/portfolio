import type { ReactNode } from "react";

import { profile } from "@/content/portfolio";
import { cn } from "@/lib/utils";

/** "// 02 — Selected work" style label */
export function SectionLabel({ index, children, className }: { index?: string | undefined; children: ReactNode; className?: string }) {
  return (
    <div className={cn("eyebrow flex items-center gap-3", className)}>
      {index && <span className="text-primary">{index}</span>}
      <span className="h-px w-8 bg-line-strong" aria-hidden />
      <span>{children}</span>
    </div>
  );
}

export function StatusPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-3 py-1 font-mono text-[0.7rem] text-silver backdrop-blur">
      <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-primary" aria-hidden />
      {children}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-[0.68rem] text-silver">
      {children}
    </span>
  );
}

/** A terminal-styled window frame */
export function TerminalWindow({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-line-strong bg-surface/80 shadow-card backdrop-blur", className)}>
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        <span className="ml-2 font-mono text-[0.7rem] text-muted-foreground">{title}</span>
      </div>
      {children}
    </div>
  );
}

/** Profile photo, or an elegant monogram until a photo is added. */
export function Portrait({ className }: { className?: string }) {
  const initials = profile.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  return (
    <div className={cn("relative aspect-[4/5] overflow-hidden bg-background", className)}>
      {profile.photo ? (
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />
      ) : (
        <div className="relative flex h-full w-full items-center justify-center bg-grid">
          <div className="absolute inset-0 bg-vignette" />
          <span className="relative font-display text-8xl italic text-silver-gradient">{initials}</span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-line" />
    </div>
  );
}
