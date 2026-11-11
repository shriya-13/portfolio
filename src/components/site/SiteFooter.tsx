import { profile } from "@/content/portfolio";

import { Logo } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. Built with care.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
