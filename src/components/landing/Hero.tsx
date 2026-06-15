import { ArrowRight, FileText, MapPin, CalendarDays } from "lucide-react";
import heroImg from "@/assets/cyborg-hero.jpg";
import { HudFrame } from "./HudFrame";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden grain"
    >
      {/* Background atmospheric glows */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-chrome)" }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[36rem] h-[36rem] -z-10 rounded-full"
        style={{ background: "var(--gradient-amber-glow)", opacity: 0.6 }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] -z-10 rounded-full"
        style={{ background: "var(--gradient-amber-glow)", opacity: 0.35 }}
      />
      {/* Grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-amber" />
            <span className="hud-kicker text-primary">
              Techfest 2026 // IIT Bombay
            </span>
          </div>

          <h1 className="mt-6 font-display font-black text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight">
            Engineer the next
            <br />
            <span className="text-primary text-glow">cybernetic</span> frontier.
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            UNIT-07 is Techfest's flagship cybernetic challenge. Prototype
            neural interfaces, kinetic exo-frames, and adaptive AI — and prove
            your build against the best engineering minds on the subcontinent.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-hud font-semibold uppercase tracking-widest text-sm hover:brightness-110 transition"
              style={{ boxShadow: "var(--shadow-neon)" }}
            >
              Enter the Challenge <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#overview"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-card/40 text-foreground font-hud font-semibold uppercase tracking-widest text-sm hover:border-primary/60 hover:text-primary transition"
            >
              <FileText className="w-4 h-4" /> View Brief
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarDays className="w-4 h-4 text-primary" />
              <span className="mono-numeral">19 — 21 DEC 2026</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="hud-kicker">IIT Bombay · Powai</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <HudFrame className="aspect-[4/5] max-w-md mx-auto">
            <div className="relative w-full h-full overflow-hidden rounded-sm chrome-panel scanlines scan-sweep">
              <img
                src={heroImg}
                alt="Chrome cyborg with glowing amber optical implant"
                width={1024}
                height={1280}
                className="w-full h-full object-cover flicker"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[10px] hud-kicker text-primary/90">
                <span>UNIT-07 // ONLINE</span>
                <span className="mono-numeral">SYNC 99.7%</span>
              </div>
              <div className="absolute top-3 left-3 right-3 flex justify-between text-[10px] hud-kicker text-foreground/70">
                <span>ID·0xA7-F1</span>
                <span>REV.3.1</span>
              </div>
            </div>
          </HudFrame>
        </div>
      </div>
    </section>
  );
}
