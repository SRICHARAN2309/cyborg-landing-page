import { useState } from "react";
import { Menu, X, Cpu } from "lucide-react";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#specs", label: "Specs" },
  { href: "#timeline", label: "Timeline" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-md chrome-panel">
            <Cpu className="w-5 h-5 text-primary" />
            <span className="absolute inset-0 rounded-md ring-1 ring-primary/30 group-hover:ring-primary/70 transition" />
          </span>
          <span className="font-display font-bold tracking-widest text-sm">
            TECHFEST<span className="text-primary">·</span>26
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hud-kicker text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#register"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-hud font-semibold uppercase tracking-widest text-xs hover:brightness-110 transition"
          style={{ boxShadow: "var(--shadow-neon)" }}
        >
          Register
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="hud-kicker text-muted-foreground hover:text-primary py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-hud font-semibold uppercase tracking-widest text-xs"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
