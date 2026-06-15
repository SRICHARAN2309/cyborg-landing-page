import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who is eligible to participate?",
    a: "Any undergraduate or postgraduate student from a recognised institution worldwide. Teams of 2–4 are recommended; solo entries are accepted with a separate review track.",
  },
  {
    q: "Do I need to bring my own hardware?",
    a: "Yes. Finalists ship or bring their prototype to IIT Bombay for the live demo. A shared electronics bench and limited fabrication support are available on-site.",
  },
  {
    q: "What format is the submission in?",
    a: "Round one is a 5-minute video walkthrough plus a 4-page technical brief. Shortlisted teams move to a live demo and a 15-minute jury Q&A at the finals.",
  },
  {
    q: "What can I win?",
    a: "A cumulative prize pool of ₹25 lakh across tracks, internship offers from partner labs, and a fast-track interview at Techfest research collaborators.",
  },
  {
    q: "Is there a registration fee?",
    a: "Registration is free. Finalists travelling to Mumbai receive partial travel and accommodation support, subject to availability.",
  },
  {
    q: "How do I reach the organisers?",
    a: "Drop a line at unit07@techfest.org or DM @techfest_iitb on social. Expect a reply within two working days.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32 border-t border-border/60"
      style={{ background: "var(--gradient-chrome)" }}
    >
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <span className="hud-kicker text-primary">04 — Diagnostics</span>
        <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
          Frequently asked <span className="text-primary text-glow">queries.</span>
        </h2>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border-border/70"
            >
              <AccordionTrigger className="text-left font-display text-base sm:text-lg hover:text-primary py-5">
                <span className="flex items-center gap-4">
                  <span className="hud-kicker text-[11px] text-primary/70 mono-numeral">
                    Q.{String(i + 1).padStart(2, "0")}
                  </span>
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
