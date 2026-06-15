import { Cpu, Github, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="register"
      className="relative border-t border-primary/40 grain"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--primary), transparent)",
          boxShadow: "0 0 24px var(--primary)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-md chrome-panel">
                <Cpu className="w-5 h-5 text-primary" />
              </span>
              <span className="font-display font-bold tracking-widest">
                TECHFEST<span className="text-primary">·</span>26
              </span>
            </div>
            <p className="mt-5 text-muted-foreground max-w-sm leading-relaxed">
              UNIT-07 // Cybernetic Challenge — Asia's largest science and
              technology festival, hosted at IIT Bombay.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-md chrome-panel rounded-md overflow-hidden"
            >
              <input
                type="email"
                required
                placeholder="agent@callsign.io"
                className="flex-1 bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 inline-flex items-center gap-2 bg-primary text-primary-foreground font-hud uppercase tracking-widest text-xs hover:brightness-110 transition"
              >
                Enlist <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8">
            <div>
              <div className="hud-kicker text-primary text-[11px]">Challenge</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#overview" className="hover:text-foreground">Overview</a></li>
                <li><a href="#capabilities" className="hover:text-foreground">Capabilities</a></li>
                <li><a href="#timeline" className="hover:text-foreground">Timeline</a></li>
                <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <div className="hud-kicker text-primary text-[11px]">Festival</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About Techfest</a></li>
                <li><a href="#" className="hover:text-foreground">Lectures</a></li>
                <li><a href="#" className="hover:text-foreground">Competitions</a></li>
                <li><a href="#" className="hover:text-foreground">Sponsors</a></li>
              </ul>
            </div>
            <div>
              <div className="hud-kicker text-primary text-[11px]">Comms</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:unit07@techfest.org" className="hover:text-foreground">unit07@techfest.org</a></li>
                <li><a href="#" className="hover:text-foreground">Press kit</a></li>
                <li><a href="#" className="hover:text-foreground">Code of conduct</a></li>
              </ul>
              <div className="mt-5 flex gap-3 text-muted-foreground">
                <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="w-4 h-4" /></a>
                <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="w-4 h-4" /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="w-4 h-4" /></a>
                <a href="#" aria-label="GitHub" className="hover:text-primary"><Github className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span className="mono-numeral">© 2026 TECHFEST · IIT BOMBAY · ALL SYSTEMS NOMINAL</span>
          <span className="hud-kicker">UNIT-07 // v3.1</span>
        </div>
      </div>
    </footer>
  );
}
