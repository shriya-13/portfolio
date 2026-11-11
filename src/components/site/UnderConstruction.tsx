import type { Project } from "@/content/portfolio";
import { cn } from "@/lib/utils";

/** Card for a project that is still being built. */
export function UnderConstructionCard({ project, index, className }: { project: Project; index: number; className?: string }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-xl border border-dashed border-line-strong bg-surface/40",
        className,
      )}
      aria-label={`Project ${n}: under construction`}
    >
      <div className="h-1.5 w-full animate-stripes bg-hazard opacity-70" aria-hidden />
      <div className="absolute inset-0 top-1.5 bg-grid opacity-60" aria-hidden />

      <div className="relative grid gap-8 p-6 md:grid-cols-[1fr_1.1fr] md:items-center md:p-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 font-mono text-[0.7rem] text-muted-foreground">
            <span className="rounded border border-line-strong bg-background/70 px-2 py-0.5 text-primary">{n}</span>
            <span className="uppercase tracking-[0.14em]">{project.category}</span>
          </div>
          <h3 className="text-3xl text-foreground md:text-4xl">
            {project.title}
            <span className="text-signal-gradient">…</span>
          </h3>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        </div>

        <div className="overflow-hidden rounded-lg border border-line-strong bg-background/80 font-mono text-xs shadow-card">
          <div className="flex items-center justify-between border-b border-line px-4 py-2 text-muted-foreground">
            <span>~/project-{n} — build</span>
            <span className="flex items-center gap-1.5 text-primary">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-primary" aria-hidden />
              in progress
            </span>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <p className="text-muted-foreground">
              <span className="text-primary">$</span> git checkout -b project-{n}
            </p>
            <p className="text-muted-foreground">
              <span className="text-primary">$</span> npm run build
            </p>
            <p className="text-silver">
              <span className="text-primary">✓</span> idea validated
            </p>
            <p className="text-silver">
              <span className="text-primary">✓</span> wireframes drafted
            </p>
            <p className="flex items-center text-foreground">
              <span className="mr-2 text-primary">›</span> building
              <span className="ml-1 inline-block h-3.5 w-[6px] animate-blink bg-primary" aria-hidden />
            </p>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-line" aria-hidden>
              <div className="h-full w-1/3 animate-build rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
