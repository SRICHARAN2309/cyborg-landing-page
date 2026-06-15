import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Participants Last Edition", value: 12400, suffix: "+" },
  { label: "Prize Pool", prefix: "₹", value: 25, suffix: "L" },
  { label: "Universities", value: 480, suffix: "+" },
  { label: "Days of Build & Demo", value: 3, suffix: "" },
];

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return v;
}

function StatCard({ s, run }: { s: (typeof stats)[number]; run: boolean }) {
  const n = useCountUp(s.value, run);
  return (
    <div id="specs" className="relative chrome-panel rounded-md p-6 sm:p-8">
      <div className="absolute top-3 right-4 hud-kicker text-[10px] text-primary/70">
        {String(stats.indexOf(s) + 1).padStart(2, "0")}
      </div>
      <div className="font-display font-black text-4xl sm:text-5xl text-foreground text-glow">
        <span className="mono-numeral">
          {s.prefix ?? ""}
          {n.toLocaleString()}
          {s.suffix}
        </span>
      </div>
      <div className="mt-2 hud-kicker text-muted-foreground text-[11px]">
        {s.label}
      </div>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setRun(true),
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section className="py-20 border-t border-border/60">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.label} s={s} run={run} />
        ))}
      </div>
    </section>
  );
}
