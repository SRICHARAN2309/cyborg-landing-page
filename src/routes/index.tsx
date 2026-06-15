import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Capabilities } from "@/components/landing/Capabilities";
import { Stats } from "@/components/landing/Stats";
import { Timeline } from "@/components/landing/Timeline";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UNIT-07 // Cybernetic Challenge — Techfest 2026, IIT Bombay" },
      {
        name: "description",
        content:
          "Engineer the next cybernetic frontier. Join the UNIT-07 Cybernetic Challenge at Techfest 2026, IIT Bombay — neural interfaces, exo-frames, and adaptive AI.",
      },
      { property: "og:title", content: "UNIT-07 // Cybernetic Challenge — Techfest 2026" },
      {
        property: "og:description",
        content:
          "Engineer the next cybernetic frontier at Techfest 2026, IIT Bombay. Build, compete, and prototype the future of human-machine interfaces.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Stats />
        <Timeline />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
