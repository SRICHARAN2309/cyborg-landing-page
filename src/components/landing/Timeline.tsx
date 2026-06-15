const phases = [
  { code: "P-01", title: "Registration Opens", date: "15 SEP 2026" },
  { code: "P-02", title: "Submission Deadline", date: "10 NOV 2026" },
  { code: "P-03", title: "Live Finals @ Powai", date: "19 DEC 2026" },
  { code: "P-04", title: "Awards & Showcase", date: "21 DEC 2026" },
];

export function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-24 lg:py-32 border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-xl">
          <span className="hud-kicker text-primary">03 — Timeline</span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Mission <span className="text-accent">phases.</span>
          </h2>
        </div>

        <div className="mt-14 relative">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent hidden md:block"
          />
          <ol className="grid md:grid-cols-4 gap-6">
            {phases.map((p) => (
              <li key={p.code} className="relative">
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary text-primary font-hud font-bold pulse-amber">
                    {p.code.split("-")[1]}
                  </span>
                  <div>
                    <div className="hud-kicker text-[10px] text-muted-foreground">
                      {p.code}
                    </div>
                    <div className="font-display text-base mt-1">{p.title}</div>
                    <div className="mono-numeral text-sm text-primary mt-1">
                      {p.date}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
