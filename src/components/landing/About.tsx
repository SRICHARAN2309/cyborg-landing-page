import { Target, Users2, Trophy } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "The Brief",
    body: "Design and build a working cybernetic prototype — hardware, software, or hybrid — that augments a real human capability.",
  },
  {
    icon: Users2,
    title: "Who It's For",
    body: "Open to undergraduate and postgraduate teams (2–4 members) from any institution worldwide. No discipline restrictions.",
  },
  {
    icon: Trophy,
    title: "Judged On",
    body: "Engineering rigour, originality of the human-machine interface, and a live demo before a panel of industry and research jurors.",
  },
];

export function About() {
  return (
    <section id="overview" className="relative py-24 lg:py-32 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="hud-kicker text-primary">01 — Overview</span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            A challenge for the
            <br />
            <span className="text-accent">augmented generation.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We're not looking for slides. UNIT-07 rewards teams that ship —
            soldered boards, trained models, working actuators, and the wild
            ideas behind them.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group relative chrome-panel rounded-md p-7 hover:border-primary/60 transition"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-primary/15 border border-primary/40 text-primary">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 font-display text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.body}
              </p>
              <span className="absolute top-3 right-4 hud-kicker text-[10px] text-muted-foreground/60">
                0{pillars.indexOf(p) + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
