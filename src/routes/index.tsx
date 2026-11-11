import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { NetworkBackground } from "@/components/site/NetworkBackground";
import { LetsConnect } from "@/components/site/LetsConnect";
import { ProjectCard } from "@/components/site/ProjectCard";
import { UnderConstructionCard } from "@/components/site/UnderConstruction";
import { Portrait, SectionLabel, StatusPill, Tag, TerminalWindow } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import { profile, projects, skills, stats } from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — ${profile.role} Portfolio` },
      { name: "description", content: profile.intro },
      { property: "og:title", content: `${profile.name} — ${profile.role} Portfolio` },
      { property: "og:description", content: profile.intro },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects.filter((p) => p.featured);
  const live = featured.filter((p) => p.status !== "building");
  const building = featured.filter((p) => p.status === "building");
  const [first, ...rest] = live;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-grid" aria-hidden />
        <div className="absolute inset-0 bg-vignette" aria-hidden />
        <NetworkBackground className="opacity-70" />

        <div className="container-page relative grid gap-14 py-20 md:py-28 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="animate-rise">
              <StatusPill>{profile.availability}</StatusPill>
            </div>

            <div className="flex flex-col gap-5">
              <p className="animate-rise font-mono text-sm text-primary [animation-delay:80ms]">
                &gt;_ hello, I'm
              </p>
              <h1 className="animate-rise text-5xl leading-[1.02] text-silver-gradient [animation-delay:140ms] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                {profile.name}
              </h1>
              <p className="animate-rise max-w-xl font-display text-2xl italic leading-snug text-silver [animation-delay:220ms] md:text-[1.75rem]">
                {profile.headline}
              </p>
            </div>

            <p className="animate-rise max-w-lg text-base leading-relaxed text-muted-foreground [animation-delay:300ms]">
              {profile.intro}
            </p>

            <div className="animate-rise flex flex-wrap gap-3 [animation-delay:380ms]">
              <Button asChild variant="signal" size="xl">
                <Link to="/projects">
                  View selected work <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="line" size="xl">
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>

          <div className="animate-rise [animation-delay:260ms]">
            <TerminalWindow title={`~/${profile.handle} — whoami`} className="mx-auto max-w-sm lg:ml-auto">
              <Portrait />
              <dl className="divide-y divide-line border-t border-line font-mono text-xs">
                {[
                  ["role", profile.shortRole],
                  ["studying", "Computer Engineering"],
                  ["based_in", profile.location],
                  ["status", profile.availability],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-4 px-4 py-2.5">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className={k === "status" ? "text-primary" : "text-foreground"}>{v}</dd>
                  </div>
                ))}
              </dl>
            </TerminalWindow>
          </div>
        </div>

        {/* Stats */}
        <div className="relative border-t border-line bg-background/40 backdrop-blur">
          <div className="container-page grid grid-cols-3 divide-x divide-line">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1 px-2 py-6 first:pl-0 sm:px-6 sm:first:pl-0">
                <span className="font-display text-3xl text-foreground md:text-4xl">{s.value}</span>
                <span className="eyebrow">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="border-b border-line bg-surface/30">
        <div className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-4">
            <SectionLabel index="01">Toolkit</SectionLabel>
            <h2 className="text-4xl text-foreground md:text-5xl">The stack I reach for.</h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Tools chosen for reliability and clarity — picked per problem, not per trend.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {skills.map((g) => (
              <div key={g.group} className="flex flex-col gap-4 bg-background p-6">
                <span className="font-mono text-xs text-primary">
                  <span className="text-muted-foreground">$</span> ls ./{g.group.toLowerCase().replace(/[^a-z]+/g, "-")}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="container-page py-24">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <SectionLabel index="02">Selected work</SectionLabel>
            <h2 className="max-w-xl text-4xl text-foreground md:text-5xl">
              Projects I'm <em className="text-signal-gradient">proud</em> of.
            </h2>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            All projects <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {first && <ProjectCard project={first} index={0} large className="md:col-span-2" />}
          {rest.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i + 1} />
          ))}
          {building.map((p, i) => (
            <UnderConstructionCard key={p.slug} project={p} index={live.length + i} className="md:col-span-2" />
          ))}
        </div>
      </section>

      <LetsConnect index="03" />
    </>
  );
}
