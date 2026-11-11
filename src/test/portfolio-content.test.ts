import { describe, expect, it } from "vitest";

import * as content from "@/content/portfolio";
import { connectLinks, profile, projects } from "@/content/portfolio";

describe("portfolio content", () => {
  it("uses the preferred email address", () => {
    expect(profile.email).toBe("somyajulashriya@gmail.com");
  });

  it("shows LinkedIn and X in the Let's connect section", () => {
    expect(connectLinks.map((s) => s.href)).toEqual([
      "https://www.linkedin.com/in/shriyasomyajula/",
      "https://x.com/ShriyaSomyajula",
    ]);
  });

  it("links each project to the address it was given", () => {
    const links = Object.fromEntries(projects.map((p) => [p.slug, p.links[0]?.href]));
    expect(links["college-for-you"]).toBe("https://collegeforyou.in");
    expect(links["mind-reset"]).toBe("https://github.com/shriya-13/Anti-scroll-chrome-extension-prototype");
    expect(links["trex-runner"]).toBe("https://github.com/shriya-13/trex-game");
  });

  it("shows the fourth project as under construction", () => {
    expect(projects[3]?.status).toBe("building");
  });

  it("never includes the phone number from the resume", () => {
    expect(JSON.stringify(content)).not.toMatch(/7738896475/);
  });
});
