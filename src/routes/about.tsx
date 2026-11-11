import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Portrait, SectionLabel, Tag } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import { experience, profile, skills } from "@/content/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${profile.name}` },
      { name: "description", content: `Background, experience and skills of ${profile.name}, ${profile.role}.` },
      { property: "og:title", content: `About — ${profile.name}` },
      { property: "og:description", content: `Background, experience and skills of ${profile.name}, ${profile.role}.` },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative border-b border-line">
        <div className="absolute inset-0 bg-grid" aria-hidden />
        <div className="container-page relative grid gap-14 py-20 md:py-24 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="overflow-hidden rounded-xl border border-line-strong shadow-card lg:sticky lg:top-24">
            <Portrait />
          </div>
          <div className="flex flex-col gap-8">
            <SectionLabel index="03">About</SectionLabel>
            <h1 className="text-5xl leading-tight text-silver-gradient md:text-6xl">
              Hi, I'm {profile.name.split(" ")[0]}.
            </h1>
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
              {profile.bio.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
            <div>
              <Button asChild variant="signal" size="xl">
                <Link to="/contact">
                  Work with me <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-4">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-4xl text-foreground">Where I've been.</h2>
        </div>
        <ol className="relative border-l border-line">
          {experience.map((e) => (
            <li key={e.role + e.org} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-primary bg-background" aria-hidden />
              <p className="font-mono text-xs text-primary">{e.period}</p>
              <h3 className="mt-2 text-2xl text-foreground">{e.role}</h3>
              <p className="font-mono text-xs text-muted-foreground">@ {e.org}</p>
              {e.points.length > 0 && (
                <ul className="mt-3 flex max-w-xl flex-col gap-2">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-muted-foreground">
                      <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-line bg-surface/30">
        <div className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-4">
            <SectionLabel>Skills</SectionLabel>
            <h2 className="text-4xl text-foreground">What I work with.</h2>
          </div>
          <div className="divide-y divide-line rounded-xl border border-line">
            {skills.map((g) => (
              <div key={g.group} className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:gap-8">
                <span className="w-32 shrink-0 font-mono text-xs text-muted-foreground">{g.group}</span>
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
    </>
  );
}
