import {
  BrainCircuit,
  Eye,
  Bone,
  ShieldHalf,
  Atom,
  Network,
} from "lucide-react";

const caps = [
  {
    icon: BrainCircuit,
    name: "Neural Link",
    desc: "Bi-directional brain-computer interface protocols and low-latency signal decoders.",
  },
  {
    icon: Eye,
    name: "Optical HUD",
    desc: "Retinal projection systems, augmented overlays, and real-time computer vision.",
  },
  {
    icon: Bone,
    name: "Kinetic Frame",
    desc: "Powered exoskeletons, actuator linkages, and balance feedback control loops.",
  },
  {
    icon: ShieldHalf,
    name: "Adaptive Armor",
    desc: "Self-healing composites and responsive plating with on-board sensor meshes.",
  },
  {
    icon: Atom,
    name: "Quantum Core",
    desc: "Edge-AI inference, low-power compute, and novel battery chemistries.",
  },
  {
    icon: Network,
    name: "Synaptic Mesh",
    desc: "Swarm communication, distributed control, and resilient peer-to-peer comms.",
  },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative py-24 lg:py-32 border-t border-border/60"
      style={{ background: "var(--gradient-chrome)" }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="hud-kicker text-primary">02 — Capabilities</span>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Six tracks. One <span className="text-primary text-glow">objective.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Pick a track or fuse multiple. Every submission is benchmarked on a
            standardized cybernetic test rig at the finals.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {caps.map((c, i) => (
            <div
              key={c.name}
              className="group relative overflow-hidden rounded-md border border-border bg-card/40 backdrop-blur p-6 hover:border-primary/60 hover:-translate-y-0.5 transition-all"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "var(--gradient-amber-glow)" }}
              />
              <div className="relative flex items-start justify-between">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-background/60 border border-primary/40 text-primary">
                  <c.icon className="w-5 h-5" />
                </div>
                <span className="hud-kicker text-[10px] text-muted-foreground/70 mono-numeral">
                  T-0{i + 1}
                </span>
              </div>
              <h3 className="relative mt-5 font-display text-lg">{c.name}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
