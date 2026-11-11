import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { LetsConnect } from "@/components/site/LetsConnect";
import { PosterStage } from "@/components/site/ProjectCard";
import { SectionLabel, Tag } from "@/components/site/primitives";
import { UnderConstructionCard } from "@/components/site/UnderConstruction";
import { profile, projects } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Work — ${profile.name}` },
      { name: "description", content: `Projects by ${profile.name}: College for You, Mind Reset Chrome extension and T-Rex Runner.` },
      { property: "og:title", content: `Work — ${profile.name}` },
      { property: "og:description", content: `Projects by ${profile.name}: College for You, Mind Reset Chrome extension and T-Rex Runner.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const live = projects.filter((p) => p.status !== "building");
  const building = projects.filter((p) => p.status === "building");

  return (
    <>
      <section className="relative border-b border-line">
        <div className="absolute inset-0 bg-grid" aria-hidden />
        <div className="container-page relative flex flex-col gap-6 py-20 md:py-24">
          <SectionLabel index="02">Work · {projects.length} projects</SectionLabel>
          <h1 className="max-w-3xl text-5xl leading-tight text-silver-gradient md:text-7xl">
            Things I've designed, built and shipped.
          </h1>
        </div>
      </section>

      <section className="container-page divide-y divide-line">
        {live.map((p, i) => (
          <article key={p.slug} className="group grid gap-10 py-16 md:grid-cols-2 md:items-center md:gap-16">
            <div
              className={cn(
                "overflow-hidden rounded-xl border border-line transition-colors duration-500 group-hover:border-primary/50",
                i % 2 === 1 && "md:order-2",
              )}
            >
              <PosterStage project={p} eager={i === 0} className="aspect-[4/3.6]" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                <span className="text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px w-6 bg-line-strong" />
                <span>{p.category}</span>
                <span className="ml-auto">{p.year}</span>
              </div>
              <h2 className="text-4xl text-foreground md:text-5xl">{p.title}</h2>
              <p className="font-display text-xl italic text-silver">{p.summary}</p>

              {/* Description box */}
              <div className="rounded-lg border border-line bg-surface/50">
                <div className="border-b border-line px-4 py-2 font-mono text-[0.68rem] text-muted-foreground">
                  <span className="text-primary">//</span> description
                </div>
                <div className="flex flex-col gap-4 p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  {p.highlights.length > 0 && (
                    <ul className="flex flex-col gap-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm leading-relaxed text-silver">
                          <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="flex flex-wrap gap-5 pt-1">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-1 border-b border-line-strong pb-0.5 font-mono text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
        {building.map((p, i) => (
          <div key={p.slug} className="py-16">
            <UnderConstructionCard project={p} index={live.length + i} />
          </div>
        ))}
      </section>

      <LetsConnect index="03" />
    </>
  );
}
