import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/content/portfolio";
import { cn } from "@/lib/utils";

import { Tag } from "./primitives";

/** Project cover shown as a poster resting on a grid "stage". */
export function PosterStage({ project, className, eager }: { project: Project; className?: string; eager?: boolean }) {
  return (
    <div className={cn("relative overflow-hidden bg-background", className)}>
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute inset-0 bg-vignette" aria-hidden />
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} cover`}
          loading={eager ? undefined : "lazy"}
          width={1100}
          height={1512}
          className="absolute left-1/2 top-[11%] w-[52%] -translate-x-1/2 rounded-md shadow-card ring-1 ring-line-strong transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:rotate-[-1deg]"
        />
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-surface to-transparent" aria-hidden />
    </div>
  );
}

export function ProjectCard({ project, index, className, large }: { project: Project; index: number; className?: string; large?: boolean }) {
  const primary = project.links[0];
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface/60 transition-all duration-500 hover:border-primary/50 hover:shadow-glow",
        large && "md:grid md:grid-cols-[1.15fr_1fr]",
        className,
      )}
    >
      <div className={cn("relative border-b border-line", large && "md:border-b-0 md:border-r")}>
        <PosterStage
          project={project}
          eager={!!large}
          className={cn("aspect-[16/11]", large && "md:absolute md:inset-0 md:aspect-auto")}
        />
        <span className="absolute left-4 top-4 rounded border border-line-strong bg-background/70 px-2 py-0.5 font-mono text-[0.68rem] text-primary backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className={cn("flex flex-1 flex-col gap-4 p-6", large && "md:min-h-[440px] md:p-10")}>
        <div className="flex items-center justify-between font-mono text-[0.7rem] text-muted-foreground">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3 className={cn("text-foreground", large ? "text-3xl md:text-5xl" : "text-2xl")}>{project.title}</h3>
        <p className={cn("leading-relaxed text-muted-foreground", large ? "text-base" : "text-sm")}>
          {large ? project.description : project.summary}
        </p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          {primary && (
            <a
              href={primary.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-foreground transition-colors hover:text-primary"
            >
              {primary.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
