import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { profile } from "@/content/portfolio";

const nav = [
  { to: "/", label: "Index", n: "01" },
  { to: "/projects", label: "Work", n: "02" },
  { to: "/about", label: "About", n: "03" },
  { to: "/contact", label: "Contact", n: "04" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2 font-mono text-sm text-foreground">
      <span className="flex h-7 w-7 items-center justify-center rounded border border-line-strong text-primary transition-colors group-hover:border-primary">
        &gt;_
      </span>
      <span className="tracking-tight">
        {profile.handle}
        <span className="text-muted-foreground">.dev</span>
      </span>
      <span className="ml-0.5 inline-block h-4 w-[7px] animate-blink bg-primary" aria-hidden />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/70 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="group flex items-center gap-1.5 rounded px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
            >
              <span className="text-[0.65rem] opacity-50">{item.n}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="line" size="sm">
            <Link to="/contact">Hire me</Link>
          </Button>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded border border-line-strong text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line md:hidden" aria-label="Mobile">
          <div className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 border-b border-line py-3 font-mono text-sm text-muted-foreground last:border-0 data-[status=active]:text-primary"
              >
                <span className="text-xs opacity-50">{item.n}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
